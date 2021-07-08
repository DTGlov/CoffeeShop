import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { adminSignin } from '../../redux/actions/admin';



function Login({ handleClick }) {
  const history = useHistory();
  const dispatch = useDispatch();
   const [formData, setFormData] = useState({
     AdminID: "",
     password: "",
   });
  useEffect(() => {
    document.title = "Coffee Shop | Admin Login";
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminSignin(formData,history))
  }
    return (
      <div className="admin-container">
        <div className="dash-form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-body">
              <label htmlFor="text">AdminID</label>
              <input
                value={formData.AdminID}
                onChange={(e) =>
                  setFormData({ ...formData, AdminID: e.target.value })
                }
                type="email"
                className="form-input"
                placeholder="Enter Admin ID"
              />
            </div>
            <div className="form-body">
              <label htmlFor="password">Password</label>
              <input
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                className="form-input"
                placeholder="Enter Password"
              />
            </div>
            <div className="admin-button-container">
              <button className="admin-button" type="submit">
                Login
              </button>
            </div>
            <div onClick={handleClick} className="text-center mt-2">Register As Admin</div>
          </form>
        </div>
      </div>
    );
}

export default Login
