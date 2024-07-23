import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPassword.css";
import { HiOutlineUser } from "react-icons/hi";

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
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h1>Reset Password</h1>
          <hr className="my-4" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            <HiOutlineUser className="me-2" /> Enter your email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button
            className="btn btn-dark text-white"
            onClick={handleForgotPassword}
          >
            Reset Password
          </button>
        </div>
        {message && (
          <div
            className={`alert mt-3 ${
              message.includes("Failed") ? "alert-danger" : "alert-info"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
