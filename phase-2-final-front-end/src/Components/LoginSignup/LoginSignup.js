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
          <HiOutlineMail />
          <input type="text" />
        </div>
        <div className="input">
          <HiOutlineMail />
          <input type="email" />
        </div>
        <div className="input">
          <HiOutlineMail />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
