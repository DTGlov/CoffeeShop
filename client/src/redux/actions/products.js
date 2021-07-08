import * as api from '../../api';
import { CREATE, FETCH_ALL, UPDATE } from '../actionTypes';

//Action Creators are functions that return actions;
export const getProducts = () => async (dispatch) => {
    try {
        //we get the response from the api and we destructure to get the data, where data represents the products
        const { data } = await api.fetchProducts();

         dispatch({type:FETCH_ALL,payload:data});
    } catch (error) {
       console.log(error.message) 
    }
};

export const createProducts = (product) =>async(dispatch) =>{
    try {
        const { data } = await api.createProducts(product);
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
};

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        //destructuring the response to get the updated product
        const { data } = await api.updatePost(id, product)
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error.message)
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log(error)
    }
}