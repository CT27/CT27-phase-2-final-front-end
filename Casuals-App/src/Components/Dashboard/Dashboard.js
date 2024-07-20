import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Reports from "../Reports/Reports";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const [selectedTile, setSelectedTile] = useState("Timesheet");
  const navigate = useNavigate();

  // Sample profile data
  const profile = {
    picture: "path/to/your/profile/photo.jpg",
    name: "Candice Thomason",
    email: "candice.thomason@example.com",
    id: "123456",
  };

  const handleSignOut = () => {
    // Clear user data (for example, from local storage)
    localStorage.removeItem("user");
    // Redirect to the login page
    navigate("/login");
  };

  let content;
  if (selectedTile === "Timesheet") {
    content = <TimeLogForm />;
  } else if (selectedTile === "Payment Details") {
    content = <PaymentDetails />;
  } else if (selectedTile === "Reports") {
    content = <Reports />;
  }

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-12 main-content p-4">
          {/* Profile Tile */}
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <img
                src={profile.picture}
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <h5 className="card-title mb-1">{profile.name}</h5>
                <p className="card-text mb-1">{profile.email}</p>
                <p className="card-text mb-2">User ID: {profile.id}</p>
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
            <div className="col-md-4 mb-2">
              <div
                className="tile d-flex align-items-center justify-content-center bg-light border rounded p-3 cursor-pointer"
                onClick={() => setSelectedTile("Timesheet")}
              >
                Timesheet
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div
                className="tile d-flex align-items-center justify-content-center bg-light border rounded p-3 cursor-pointer"
                onClick={() => setSelectedTile("Payment Details")}
              >
                Payment Details
              </div>
            </div>
            <div className="col-md-4 mb-2">
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
