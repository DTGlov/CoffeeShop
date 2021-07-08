import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { HOMEPAGE } from "../../constants/routes";
import { AUTH } from "../../redux/actionTypes";

import {signin} from '../../redux/actions/auth'



function Login({ toggleSignup }) {
  const history = useHistory();
  const dispatch = useDispatch();
 const [formData, setFormData] = useState({
   email: "",
   password: "",
 });
  
  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSubmit = (e) => {
        e.preventDefault();
    dispatch(signin(formData, history));

  }

  const googleSuccess =async(res)=>{
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push(HOMEPAGE)
    } catch (error) {
      console.log(error)
    }
  }
  const googleFailure = (error) => {
    console.log(error)
    console.log("Google Sign In was unsuccessful.Try Again Later")
  }

  return (
    <div className="login-section">
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="login-heading">Log In</h1>
          <div className="form-body">
            <label htmlFor="Email">Email</label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="Email"
              className="form-input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="Password">Password</label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              className="form-input"
            />
          </div>

          <button className="form-button" type="submit" onClick={handleSubmit}>
            Login
          </button>
          <GoogleLogin
            //get client id from google.developers.com
            clientId="CLIENT ID"
            render={(renderProps) => (
              <button
                className="form-button bg-blue-400"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Sign in with Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </form>
      </div>
      <div className="form-footer">
        <p className="form-footer-text">
          Don't have an Account?
          <span className="form-footer-span" onClick={toggleSignup}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
