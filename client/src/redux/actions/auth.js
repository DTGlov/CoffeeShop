import { AUTH } from "../actionTypes";
import * as api from '../../api/index';
import { HOMEPAGE } from "../../constants/routes";


export const signin = (formData,history) =>async (dispatch)=> {
    try {
        //log in the user and navigate to the homepage
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH,data });

        history.push(HOMEPAGE)
    } catch (error) {
        console.log(error)
    }
}
export const signup = (formData,history) =>async (dispatch)=> {
    try {
        //sign up the user and navigate to the homepage
         const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        
        history.push(HOMEPAGE)
    } catch (error) {
        console.log(error)
    }
}