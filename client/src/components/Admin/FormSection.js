import React, { useState, useContext,useEffect } from 'react';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createProducts,updateProduct,getProducts } from '../../redux/actions/products';

import { CurrentContext, SetContext } from '../../context/edit';

function FormSection() {
  
   const currentId = useContext(CurrentContext);
  const setCurrentId = useContext(SetContext)
  
//when we click the edit button we want to return only the product with the id equal to the id we clicked on and not the entire products state. or else return null
  //const Product because we only return a single product
  const Product = useSelector((state) => currentId ? state.productReducer.find((p) => p._id === currentId):null);
 
  const dispatch = useDispatch();

  useEffect(() => {
    //when the edit button is clicked the form is populated with the product details.
    if(Product) setProductData(Product)
  }, [Product]);


  const [productData, setProductData] = useState({
    name: "",
    selectedFile: "",
    price: "",
    description:""
  })

  const Isinvalid = productData.name === "" || productData.description==="" || productData.price ==="" || productData.selectedFile===""

  console.log(Isinvalid)

  const handleSubmit = (e) => {
    e.preventDefault();
//if there is a current id  then we will update the product instead
    if (currentId) {
      //for updating we need to pass the currentId also
      dispatch(updateProduct(currentId, productData));
         dispatch(getProducts());
      alert("Product updated")
      
      
    } else {
      //if there is no current id this means we are creating a new Product
       dispatch(createProducts(productData));
       alert("Product Added to Database");
       
    }
    clear();
   
  }

  const clear = () => {
    setCurrentId(null)
    setProductData({
      name: "",
      price: "",
      selectedFile: "",
      description: "",
    });
  }
    return (
      <div className="dash-form-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1 className="dash-form-head">{currentId ? 'Editing a Product' : 'Add a Product'}</h1>
            <div className="form-body">
              <input
                name="name"
                value={productData.name}
                onChange={(e) =>
                  setProductData({ ...productData, name: e.target.value })
                }
                type="text"
                className="form-input"
                placeholder="Product Name"
              />
            </div>
            <div className="form-body ">
              <input
                name="price"
                value={productData.price}
                onChange={(e) =>
                  setProductData({ ...productData, price: e.target.value })
                }
                type="number"
                className="form-input"
                placeholder="Product Price"
              />
            </div>
            <div className="form-body mt-4">
              <textarea
                value={productData.description}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    description: e.target.value,
                  })
                }
                className="dash-textarea"
                placeholder="Product Description"
              ></textarea>
            </div>
            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setProductData({ ...productData, selectedFile: base64 })
                }
              />
            </div>
            <div className="button-container">
              <button className={Isinvalid? "cursor-not-allowed create-button opacity-60" :"create-button"} disabled={Isinvalid} type="submit">
                Create
              </button>
            </div>
          </form>
          <div className="button-container">
            <button className="clear-button" onClick={clear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    );
}

export default FormSection
