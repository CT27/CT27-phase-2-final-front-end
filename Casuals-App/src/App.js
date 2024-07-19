import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Dashboard from "./Components/Dashboard/Dashboard";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
