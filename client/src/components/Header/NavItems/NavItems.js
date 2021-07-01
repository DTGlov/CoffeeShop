import React from 'react';
import { Link } from 'react-router-dom';
import {
  faUser,faShoppingCart, faCreditCard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItems() {
    return (
      <div className="nav-item-container">
        <div className="nav-item-account">
          <FontAwesomeIcon icon={faCreditCard} />
          <p>Orders</p>
        </div>
        <Link to="/login">
          <div className="nav-item-account">
            <FontAwesomeIcon icon={faUser} />
            <p>Account</p>
          </div>
        </Link>
        <div className="nav-item-cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>Cart - 0</p>
        </div>
      </div>
    );
}

export default NavItems
