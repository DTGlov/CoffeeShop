import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, onDecrease, onIncrease } from '../redux/actions/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CLEAR_CART } from '../redux/actionTypes';
import {faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ORDERS } from '../constants/routes';




function Cart() {
  const history = useHistory();
  const CartProduct = useSelector((state) => state.cartReducer);

  //sum of the price of all products in the cart
  let total = CartProduct.map((product) => product).reduce((acc, val) => {
    return acc + (val.qty * val.price)
  }, 0);

 
  

  //sum of the quantity of all the products in the cart
  let qty = CartProduct.map((product) => product.qty).reduce((acc, val) => {
    return acc + val
  },0)
 
  
    const dispatch = useDispatch();
 
  const purchase = () => {
    localStorage.setItem("cartItems", JSON.stringify(CartProduct));
    dispatch({type:CLEAR_CART})
   history.push(ORDERS)
  }
    return (
      <section className="">
        <div className="container max-w-5xl mx-auto mt-4 p-5 md:p-5">
          <h1>Shopping Cart</h1>
          <p className="text-right">Price</p>
          <div className="border-b"></div>
          {!CartProduct.length && (
            <h1 className="text-center mt-2">
              Cart Empty. Please Add Items 😎
            </h1>
          )}
          {CartProduct.map((product) => (
            <div className="p-2" key={product._id}>
              <div className="mt-2">
                <div className="flex">
                  <div className="flex justify-center sm:justify-start">
                    <img src={product.selectedFile} alt="" className="h-44" />
                    <div className=" sm:w-8/12">
                      <h1 className="font-semibold">{product.name}</h1>
                      <p className="cart-description line-clamp-3 sm:line-clamp-none">
                        {product.description}
                      </p>
                      <div className="flex space-x-4 items-center mt-2">
                        <div className="bg-gray-100 px-4 cursor-pointer" onClick={()=>dispatch(onDecrease(product._id))}>
                          <FontAwesomeIcon icon={faMinus} />
                        </div>

                        <p>{ product.qty}</p>
                        <div className="bg-gray-100 px-4 cursor-pointer" onClick={()=>dispatch(onIncrease(product))}>
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      </div>
                      <button
                        className="bg-yellow-300 border border-gray-400 mt-4 px-2 rounded-sm"
                        onClick={() => dispatch(removeFromCart(product._id))}
                      >
                        remove item
                      </button>
                    </div>
                  </div>
                  <div className="font-bold">${product.price}</div>
                </div>
              </div>
              <div className="border-b mt-2"></div>
            </div>
          ))}
          {CartProduct.length > 0 && (
            <div className="flex justify-end ">
              <div className="bg-gray-100 p-5">
                <h1>
                  Subtotal({" "}
                  {qty <= 1
                    ? `${qty} item`
                    : `${qty} items`}{" "}
                  ): ${total.toFixed(2)}
                </h1>
                <div className="flex justify-center" onClick={purchase}>
                  <button className="bg-yellow-300 border border-gray-400 mt-4 px-2 rounded-sm">
                    purchase
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
}

export default Cart

