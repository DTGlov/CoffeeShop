import React,{useContext} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SetContext } from "../../context/edit";
import {deletePost} from '../../redux/actions/products'

function ProductList({ handleClick, Delete, Edit }) {
  const setCurrentId = useContext(SetContext);
  const ProductData = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
 
 
    return (
      <div>
        {ProductData.length > 0 && (
          <section className="product-section">
            <div className="product-container">
              <h1 className="product-header">Product List</h1>
              <div className="card-container ">
                {ProductData.map((product) => (
                  <div className="" key={product._id}>
                    <div className="card-body transform duration-150 ease-in sm:hover:scale-110">
                      <img
                        src={product.selectedFile}
                        alt="product"
                        className="card-image"
                      />
                      <div className="card-details">
                        <h1 className="card-heading">{product.name}</h1>
                        <p className="card-text">${product.price}</p>
                        {Edit && (
                          <div className="line-clamp-3 mt-3">
                            {" "}
                            {product.description}
                          </div>
                        )}
                      </div>
                      {handleClick && (
                        <Link
                          to={`/details/${product._id}`}
                          onClick={handleClick}
                        >
                          <div className="card-footer">
                            <p> View</p>
                          </div>
                        </Link>
                      )}

                      {Edit && (
                        <div className="card-footer" onClick={()=>setCurrentId(product._id)}>
                          <p>Edit</p>
                        </div>
                      )}
                      {Delete && (
                        <div className="card-footer bg-red-400" onClick={()=>dispatch(deletePost(product._id))}>
                          <p>Delete</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        {!ProductData.length && (
          <div className="p-10 text-center">
            <h1 className="text-3xl">Product List</h1>
            <h1 className="text-center text-lg animate-pulse font-bold mt-4">
              Loading items...
            </h1>
          </div>
        )}
      </div>
    );
     
}

 export default ProductList
