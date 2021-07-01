import React from 'react';
import { Link } from 'react-router-dom';
import { faCreditCard,faHome,faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../assets/logo.png';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from "react-burger-menu";
import { menuStyles } from "./menuStyles";
import { SCREENS } from '../../../responsive/responsive';

const  Logo =()=> {
     const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
console.log(isMobile)
  return isMobile ? (
    <div>
      <Menu left styles={menuStyles}>
        <ul className="nav-slide">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faCreditCard} />
              <span className="ml-2">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} />
              <span className="ml-2">Login</span>
            </Link>
          </li>
        </ul>
      </Menu>
    </div>
  ) : (
    <div>
      <Link to='/'>
        <img src={logo} alt="coffee logo" className="w-auto h-12" />
      </Link>
    </div>
  );
    
}

export default Logo
