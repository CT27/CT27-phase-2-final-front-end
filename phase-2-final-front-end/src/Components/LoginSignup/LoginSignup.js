import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Update to useNavigate
import { AuthContext } from "../../AuthContext";

// Ensure this path is correct
import "./LoginSignup.css";
import { HiOutlineMail, HiOutlineUser, HiOutlineKey } from "react-icons/hi";
import axios from "axios";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // Update to useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${email}`
      );
      if (response.data.length === 0) {
        throw new Error("User not found");
      }

      const user = response.data[0];
      if (user.password !== password) {
        throw new Error("Password incorrect");
      }

      console.log("Login successful:", user);
      login();
      navigate("/dashboard"); // Update to useNavigate
    } catch (error) {
      console.error("Login error:", error.message);
      setErrorMessage(error.message);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      console.log("Signup response:", response.data);
      login();
      navigate("/dashboard"); // Update to useNavigate
    } catch (error) {
      console.error("Signup error:", error.message);
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "Login") {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit} className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <HiOutlineUser className="custom-icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <HiOutlineMail className="custom-icon" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <HiOutlineKey className="custom-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Lost password?<span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <button
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default LoginSignup;
