import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import TimeLogForm from "./Components/TimeLogForm/TimeLogForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timelog" element={<TimeLogForm />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
