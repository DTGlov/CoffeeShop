import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  faUser,faShoppingCart, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CART_PAGE,HOMEPAGE,LOGIN_SIGNUP} from '../../../constants/routes'
import { LOGOUT } from '../../../redux/actionTypes';

function NavItems() {
  const history = useHistory();
  const dispatch = useDispatch();
  const CartProduct = useSelector((state) => state.cartReducer);
    const [user, setUser] = useState(
      JSON.parse(localStorage.getItem("profile"))
    );

  
  const logout = () => {
    dispatch({ type: LOGOUT })
    history.push(HOMEPAGE)
    setUser(null)
  }
  
    return (
      <div className="nav-item-container">
        {user ? (
          <Link to={HOMEPAGE}>
            <div className="nav-item-account" onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <p>Logout</p>
            </div>
          </Link>
        ) : (
          <Link to={LOGIN_SIGNUP}>
            <div className="nav-item-account">
              <FontAwesomeIcon icon={faUser} />
              <p>Login</p>
            </div>
          </Link>
        )}
        <Link to={CART_PAGE}>
          <div className="nav-item-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>Cart - {CartProduct.length}</p>
          </div>
        </Link>
      </div>
    );
}

export default NavItems
