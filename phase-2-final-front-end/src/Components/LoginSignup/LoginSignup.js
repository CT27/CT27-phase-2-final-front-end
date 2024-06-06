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
          <img src="" alt="" />
          <p>
            here is an email icon <HiOutlineMail />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
