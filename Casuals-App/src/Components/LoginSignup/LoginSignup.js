import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Ensure this path is correct
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
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Email and password are required.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });

      const user = response.data.user;
      console.log("Login successful:", user);

      localStorage.setItem("userId", user.id);
      localStorage.setItem("userName", user.name);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userProfilePicture", user.profilePicture || "");

      console.log("Stored user data in local storage: ", {
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        userProfilePicture: user.profilePicture || "",
      });

      login();

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
      setErrorMessage(error.response?.data?.message || error.message);
    }
  };

  const handleSignup = async () => {
    if (name === "" || password === "" || email === "") {
      setErrorMessage("Name, email, and password are required.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/api/signup", {
        name,
        email,
        password,
      });
      console.log("Signup response:", response.data);

      const newUser = response.data.user;

      localStorage.setItem("userId", newUser.id);
      localStorage.setItem("userName", newUser.name);
      localStorage.setItem("userEmail", newUser.email);
      localStorage.setItem("userProfilePicture", newUser.profilePicture || "");

      console.log("Stored user data in local storage: ", {
        userId: newUser.id,
        userName: newUser.name,
        userEmail: newUser.email,
        userProfilePicture: newUser.profilePicture || "",
      });

      login();

      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error.message);
      setErrorMessage(error.response?.data?.message || error.message);
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
            placeholder="Email id"
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
        <div className="forgot-password-container">
          {action === "Login" && (
            <div className="forgot-password">
              Lost password? <Link to="/forgotpassword">Click Here</Link>
            </div>
          )}
        </div>
        <div className="submit-container">
          <button
            type="button"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
        <button type="submit" className="btn btn-primary">
          {action}
        </button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default LoginSignup;
