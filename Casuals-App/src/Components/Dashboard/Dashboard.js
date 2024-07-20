import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Reports from "../Reports/Reports";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  const [selectedTile, setSelectedTile] = useState("Timesheet");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");

      console.log("Fetching user data for userId:", userId); // Debug

      if (userId) {
        try {
          // Fetch user data by ID
          const response = await axios.get(
            `http://localhost:3000/users/${userId}`
          );
          const user = response.data;

          if (user) {
            setProfile(user);
          } else {
            console.log("User not found in the data."); // Debug
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

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
  }

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-12 main-content p-4">
          {loading ? (
            <div className="text-center">
              <p>Loading profile...</p>
            </div>
          ) : profile ? (
            <div className="card mb-4">
              <div className="card-body d-flex align-items-center">
                <img
                  src={profile.picture || "path/to/default/profile/photo.jpg"}
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
          ) : (
            <div className="text-center">
              <p>No profile data available.</p>
            </div>
          )}

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
