import { combineReducers } from "redux";

import { productReducer } from './products';
import { cartReducer } from "./cart";
import { authReducer } from "./auth";
import { adminReducer } from "./admin";

export default combineReducers({
productReducer,cartReducer,authReducer,adminReducer
})