import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
// import { ProductData } from '../constants/ProductData';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { stagger,fadeInUp } from '../constants/animate';

import { motion } from "framer-motion";
import { addToCart } from '../redux/actions/cart';



function DetailPage() {
  const ProductData = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();
 

  const { id } = useParams();
  const [data,setData] = useState(null)
useEffect(() => {
  const products = ProductData.find(p => p._id === id)
  setData(products)
}, [data, id,ProductData]);
  
  
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <section className="detail-section">
        {data && (
          <div className="detail-container" key={data.id}>
            <div className="detail-image">
              <motion.img
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                src={data.selectedFile}
                alt="product image"
              />
            </div>
            <motion.div variants={stagger} className="detail-item-container">
                  <Link to ='/'>
              <div className="detail-back">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <h2>Back to Product</h2>
              </div>
               </Link>
              <motion.p variants={fadeInUp} className="detail-item-header">
                {data.name}
              </motion.p>
              <motion.p variants={fadeInUp} className="detail-item-price">
                ${data.price}
              </motion.p>
              <motion.div variants={fadeInUp} className="detail-text-section">
                <h1 className="detail-about">About Item</h1>
                <p className="detail-description">{data.description}</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="detail-add-cart" onClick={()=>dispatch(addToCart(data))}>
                Add to cart
              </motion.div>
            </motion.div>
          </div>
        )}
      </section>
    </motion.div>
  );
}

export default DetailPage
