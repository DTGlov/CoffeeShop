import React,{useState} from 'react';
import { Link,useHistory} from 'react-router-dom';
import {faHome,faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../assets/logo.png';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from "react-burger-menu";
import { menuStyles } from "./menuStyles";
import { SCREENS } from '../../../responsive/responsive';
import { HOMEPAGE, LOGIN_SIGNUP} from '../../../constants/routes';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../redux/actionTypes';

const Logo = () => {
  const history = useHistory();
  // const location = useLocation();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


  const userFirstName = user?.result.name.split(" ")[0];

  const logout = () => {
    dispatch({ type: LOGOUT })
    history.push(HOMEPAGE)
    setUser(null);
}
  
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
          </li>
          <li>
            {user ? (
              <Link to={HOMEPAGE}>
                <div onClick={logout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span className="ml-2">Logout</span>
                </div>
              </Link>
            ) : (
              <Link to={LOGIN_SIGNUP}>
                <FontAwesomeIcon icon={faSignInAlt} />
                <span className="ml-2">Login</span>
              </Link>
            )}
          </li>
          <li>
            {user && 
              <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} />
              <h1 className="ml-2">Hi, {userFirstName}</h1>
            </div>
            }
          </li>
        </ul>
      </Menu>
    </div>
  ) : (
    <div>
      <Link to="/">
        <img src={logo} alt="coffee logo" className="w-auto h-12" />
      </Link>
    </div>
  );
    
}

export default Logo
