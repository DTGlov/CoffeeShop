import { ADMIN_AUTH, ADMIN_LOGOUT } from "../actionTypes";

export const adminReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case ADMIN_AUTH:
             localStorage.setItem(
               "admin",
               JSON.stringify({ ...action?.data })
             );
             return { ...state, authData: action.data };
        case ADMIN_LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
        return   state;
    }
}