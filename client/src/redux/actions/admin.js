import { ADMIN_AUTH } from "../actionTypes";
import * as api from '../../api/index';
import { ADMIN_DASHBOARD } from "../../constants/routes";


export const adminSignin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.adminSignIn(formData);
        dispatch({ type: ADMIN_AUTH, data });
    
        history.push(ADMIN_DASHBOARD);
    } catch (error) {
        console.log(error)
    }
};

export const adminSignup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.adminSignUp(formData)
        dispatch({ type: ADMIN_AUTH, data });
        
        history.push(ADMIN_DASHBOARD)
    } catch (error) {
        console.log(error)
    }
}