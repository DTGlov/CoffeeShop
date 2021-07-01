import React, { useEffect } from "react";

function Login({ toggleSignup }) {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="login-section">
      <div className="login-container">
        <form className="form">
          <h1 className="login-heading">Log In</h1>
          <div className="form-body">
            <label htmlFor="Email">Email</label>
            <input type="Email" className="form-input" />
          </div>
          <div className="form-control">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-input" />
          </div>
          <button className="form-button">Login</button>
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
