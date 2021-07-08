import { FETCH_ALL,CREATE, UPDATE, DELETE } from "../actionTypes";

// A reducer is a function that accepts the state and a action and based  on the action type dispatches the action.


//state must always be equal to something, so we set an initial value.. here state = products
export const productReducer = (products =[], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...products, action.payload];
        case UPDATE:
            //if the product id(product already in the DB) === payload.id(the new updated product been sent to the DB) we 'swap' the existing product with the updated payload else return the whole products.
            return products.map((product => product._id === action.payload ? action.payload : product));
        case DELETE:
            return products.filter((product)=>product._id !== action.payload)
        default:
            return products;
    }
}