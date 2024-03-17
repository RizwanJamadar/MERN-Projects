import React from "react";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./login.css";

const Login = () => {
  return (
    <div className="Login-container">
      <div className="login">
        <div className="title">
          <p className="heading">
            <span className="logo">
              <a style={{ color: "#312ECB" }}>
                Smart</a>Leave.
            </span>
          </p>
          <h3>Log in to your Account</h3>
          <p>Welcome back! Proceed to login:</p>
        </div>
        <div className="main-login">
          <div className="input">
            <EmailOutlinedIcon/>
            <input type="email" placeholder="johndoe@sfit.ac.in"/>
          </div>
          <div className="input">
            <LockOutlinedIcon/>
            <input type="password" placeholder="Your password"/>
          </div>
          <button className="">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
