import React, { useEffect, useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup({ toggleLogin }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <div className="signup-section">
      <div className="signup-container">
        <form className="form">
          <h1 className="signup-heading">Sign Up</h1>
          <div className="form-control">
            <label htmlFor="FullName">FullName</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email</label>
            <input type="email" className="form-input " />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-input" />
          </div>
          <div className="form-control">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input type="password" className="form-input" />
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
