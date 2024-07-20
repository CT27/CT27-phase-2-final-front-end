import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Reports from "../Reports/Reports";
import Profile from "../Profile"; // Import the Profile component
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const [selectedTile, setSelectedTile] = useState("Timesheet");
  const [loading, setLoading] = useState(false); // No longer needed for profile loading
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  let content;
  if (selectedTile === "Timesheet") {
    content = <TimeLogForm />;
  } else if (selectedTile === "Payment Details") {
    content = <PaymentDetails />;
  } else if (selectedTile === "Reports") {
    content = <Reports />;
  } else if (selectedTile === "Profile") {
    const userId = localStorage.getItem("userId");
    content = <Profile userId={userId} />;
  }

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-12 main-content p-4">
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <img
                src="path/to/default/profile/photo.jpg" // Default profile photo
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <button
                  className="btn btn-outline-danger"
                  onClick={handleSignOut}
                >
                  <FaSignOutAlt className="me-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 mb-2">
              <div
                className="tile d-flex align-items-center justify-content-center bg-light border rounded p-3 cursor-pointer"
                onClick={() => setSelectedTile("Profile")}
              >
                Profile
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div
                className="tile d-flex align-items-center justify-content-center bg-light border rounded p-3 cursor-pointer"
                onClick={() => setSelectedTile("Timesheet")}
              >
                Timesheet
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div
                className="tile d-flex align-items-center justify-content-center bg-light border rounded p-3 cursor-pointer"
                onClick={() => setSelectedTile("Payment Details")}
              >
                Payment Details
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div
                className="tile d-flex align-items-center justify-content-center bg-light border rounded p-3 cursor-pointer"
                onClick={() => setSelectedTile("Reports")}
              >
                Reports
              </div>
            </div>
          </div>
          <div className="content-container p-3 border rounded bg-white">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
