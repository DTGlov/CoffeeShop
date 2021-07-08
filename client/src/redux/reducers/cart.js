import { ADD_TO_CART, REMOVE_FROM_CART,DECREASE_QTY, INCREASE_QTY, CLEAR_CART} from "../actionTypes";


export const cartReducer = (cart = [], action) => {
  switch (action.type) {
    case INCREASE_QTY:
    case ADD_TO_CART:
      //checking if the product exists
      const exist = cart.find((product) => product._id === action.payload._id);
      if (exist) {
        //check if the product been icreased is what we clicked on, if it is increase its quantity by 1 and maintain the state of the other items in the cart
        return cart.map((product) =>
          product._id === action.payload._id
            ? { ...exist, qty: exist.qty + 1 }
            : product
        );
      } else {
        //if product does not exist add the product and add a new quantity property with value === 1
        return [...cart, { ...action.payload, qty: 1 }];
      }

    case DECREASE_QTY:
      const available = cart.find((product) => product._id === action.payload);
      //if the qty of the product been clicked on is 1 then remove the product from the cart
      if (available.qty === 1) {
        return cart.filter((product) => product._id !== action.payload._id);
      } else {
        //check if the product been decreased is what we clicked on, if it is decrease its quantity by 1 and maintain the state of the other items in the cart
        return cart.map((product) =>
          product._id === action.payload
            ? { ...available, qty: available.qty - 1 }
            : product
        );
      }
    case REMOVE_FROM_CART:
      return cart.filter((product) => product._id !== action.payload)
    case CLEAR_CART:
      return []
    default:
      return cart;
  }
}