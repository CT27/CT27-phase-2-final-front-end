import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import { HiOutlineMail, HiOutlineUser, HiOutlineKey } from "react-icons/hi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/forgot-password",
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Forgot password error:", error.message);
      setMessage("Failed to send password reset email");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Reset</div>
        <div className="underline"></div>
        <div className="input">
          <HiOutlineUser className="custom-icon" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="reset-container">
          <button className="reset-password" onClick={handleForgotPassword}>
            Reset Password
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
