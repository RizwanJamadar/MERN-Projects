import React, { useState, useRef } from "react";
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
  const emailInputRef = useRef(null); // Ref for the email input field

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Invalid email format. Please use an email ending with @student.sfit.ac.in or @sfit.ac.in");
      emailInputRef.current.focus(); // Return focus to email input field
      return;
    }
    try {
      const res = await axios.post("https://tutorhub-api.onrender.com/api/auth/login", {
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
    setEmail(e.target.value);
  };

  // Handle blur event for email input field
  const handleEmailBlur = () => {
    if (email.trim() !== "" && !validateEmail(email)) {
      toast.error("Invalid email format!!");
      emailInputRef.current.focus(); // Return focus to email input field
    }
  };

  return (
    <>
    <div className="Login-container">
      <div className="login">
        <div className="title">
          <p className="heading">
            <span className="logo">
              <a style={{ color: "#312ECB" }}>Easy</a>Leave.
            </span>
          </p>
          <h3>Log in to your Account</h3>
          <p>Welcome back! Proceed to login:</p>
        </div>
        <div className="main-login">
          <div className="input">
            <EmailOutlinedIcon/>
            <input 
              type="email" 
              placeholder="johndoe@sfit.ac.in" 
              onChange={handleEmailChange} 
              onBlur={handleEmailBlur} 
              ref={emailInputRef} // Assign ref to email input field
            />
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
