import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

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
    <div className="forgot-password-container">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
