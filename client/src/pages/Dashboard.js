import React,{useEffect} from 'react';
import ProductList from '../components/ProductList/ProductList';
import FormSection from '../components/Admin/FormSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    useEffect(() => {
        document.title = "Coffee Shop | Admin Dash"
    }, []);
    return (
      <div className="dash-container">
        <div className="dash-nav">
          <div>Welcome ADMIN</div>
          <div className="dash-icon">
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
