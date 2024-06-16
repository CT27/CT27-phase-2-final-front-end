import React from "react";
import "./LoginSignup.css";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineKey } from "react-icons/hi";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <HiOutlineUser className="custom-icon" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <HiOutlineMail className="custom-icon" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <HiOutlineKey className="custom-icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost password?<span>Click Here</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Log In</div>
      </div>
    </div>
  );
};

export default LoginSignup;
