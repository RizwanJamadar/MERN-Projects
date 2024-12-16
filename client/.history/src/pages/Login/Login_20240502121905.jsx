import React, { useState } from "react";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /@student\.sfit\.ac\.in$|@sfit\.ac\.in$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    if (validateEmail(newEmail)) {
      setEmail(newEmail);
    } else {
      toast.error("Invalid email format. Please use an email ending with @student.sfit.ac.in or @sfit.ac.in");
    }
  };

  return (
    <>
    <div className="Login-container">
      <div className="login">
        <div className="title">
          <p className="heading">
            <span className="logo">
              <a style={{ color: "#312ECB" }}>Smart</a>Leave.
            </span>
          </p>
          <h3>Log in to your Account</h3>
          <p>Welcome back! Proceed to login:</p>
        </div>
        <div className="main-login">
          <div className="input">
            <EmailOutlinedIcon/>
            <input type="email" placeholder="johndoe@sfit.ac.in" onChange={handleEmailChange}/>
          </div>
          <div className="input">
            <LockOutlinedIcon/>
            <input type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className="" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
