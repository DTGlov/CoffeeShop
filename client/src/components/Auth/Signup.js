import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {signup} from '../../redux/actions/auth'

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup({ toggleLogin }) {
  const history = useHistory();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData,history))
  console.log(formData)
}

  return (
    <div className="signup-section">
      <div className="signup-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="signup-heading">Sign Up</h1>
          <div className="form-control">
            <label htmlFor="FullName">FullName</label>
            <input
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              type="text"
              className="form-input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email</label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              className="form-input "
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              className="form-input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              type="password"
              className="form-input"
            />
          </div>
          <button className="form-button">Sign Up</button>
          <h1 className="form-footer-text">
            Already Have an Account?{" "}
            <span onClick={toggleLogin} className="form-footer-span">
              Sign In
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Signup;
