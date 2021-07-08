
import { ADD_TO_CART,DECREASE_QTY,INCREASE_QTY,REMOVE_FROM_CART } from "../actionTypes";


export const addToCart = (product) =>{
 return {type:ADD_TO_CART,payload:product}
};

export const onIncrease = (product) => {
  return { type: INCREASE_QTY, payload: product };
};

export const removeFromCart = (id) => {
    return {type:REMOVE_FROM_CART,payload:id}
};


export const onDecrease = (id) => {
  return { type: DECREASE_QTY, payload: id };
};

