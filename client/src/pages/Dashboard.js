import React, { useEffect,useState} from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import FormSection from '../components/Admin/FormSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ADMIN_LOGIN } from '../constants/routes';
import { ADMIN_LOGOUT } from '../redux/actionTypes';

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [admin,setAdmin] =useState( JSON.parse(localStorage.getItem("admin")));
  const admin_firstname = admin?.result.name.split(" ")[0]

  
  
  const adminLogout = () => {
    dispatch({ type: ADMIN_LOGOUT });
    history.push(ADMIN_LOGIN);
    setAdmin(null);
  };

    useEffect(() => {
      document.title = "Coffee Shop | Admin Dash";
      if(!admin) return history.push(ADMIN_LOGIN)
    }, [admin,history]);
    return (
      <div className="dash-container bg-gray-100">
        <div className="dash-nav">
          <div>Welcome, { admin_firstname}</div>
          <div className="dash-icon cursor-pointer" onClick={adminLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <p>Logout</p>
          </div>
        </div>
        <FormSection />
        <ProductList Delete="Delete" Edit="Edit" />
      </div>
    );
}

export default Dashboard
