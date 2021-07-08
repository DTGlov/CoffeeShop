import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminSignup } from "../../redux/actions/admin";

const initialState = {
  Name: "",
  AdminID: "",
  password: "",
  confirmPassword: "",
};

function Signup({handleClick}) {
  const history = useHistory();
  const dispatch = useDispatch();
     const [form, setForm] = useState(initialState);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminSignup(form,history))
  }
  
  return (
    <div className="admin-container">
      <div className="dash-form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="font-bold text-lg">Signup</h1>
          <div className="form-body">
            <label htmlFor="text">Name</label>
            <input
              value={form.Name}
              onChange={(e) => setForm({ ...form, Name: e.target.value })}
              type="text"
              className="form-input"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-body">
            <label htmlFor="text">AdminID</label>
            <input
              value={form.AdminID}
              onChange={(e) => setForm({ ...form, AdminID: e.target.value })}
              type="email"
              className="form-input"
              placeholder="Enter Admin ID"
              required
            />
          </div>
          <div className="form-body">
            <label htmlFor="password">Password</label>
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              className="form-input"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-body">
            <label htmlFor="password">Confirm Password</label>
            <input
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              type="password"
              className="form-input"
              placeholder="Enter Password"
            />
          </div>
          <div className="admin-button-container">
            <button
              className="admin-button"
              type="submit"
              onClick={handleSubmit}
            >
              Signup
            </button>
          </div>
          <div className="mt-2 text-center">
            <h1>
              Already an Admin?{" "}
              <span className="ml-2 font-bold" onClick={handleClick}>
                Login
              </span>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
