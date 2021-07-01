
import React from 'react'

function Login() {
    return (
      <div className="admin-container">
        <div className="dash-form-container">
        <form className="form">
          <div className="form-body">
            <label htmlFor="text">AdminID</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter Admin ID"
            />
          </div>
          <div className="form-body">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter Password"
            />
          </div>
          <div className="admin-button-container">
            <button
              className="admin-button"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
    );
}

export default Login
