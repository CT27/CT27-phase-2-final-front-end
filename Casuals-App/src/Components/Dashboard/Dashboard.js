import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Reports from "../Reports/Reports";
import Profile from "../Profile";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Dashboard = () => {
  const [selectedTile, setSelectedTile] = useState("Timesheet");
  const [userId, setUserId] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from the backend
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/api/login", {
          withCredentials: true,
        });
        const { user } = response.data;
        setUserId(user.id);
        setUserDetails(user);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
        navigate("/login");
      }
    };

    fetchUserDetails();
  }, [navigate]);

  const handleSignOut = () => {
    axios
      .post("/api/logout", {}, { withCredentials: true }) // Ensure logout is handled on the server
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign out failed:", error);
        navigate("/login");
      });
  };

  let content;
  if (selectedTile === "Timesheet") {
    content = <TimeLogForm />;
  } else if (selectedTile === "Payment Details") {
    content = <PaymentDetails />;
  } else if (selectedTile === "Reports") {
    content = <Reports />;
  } else if (selectedTile === "Profile" && userId && userDetails) {
    content = <Profile user={userDetails} onSignOut={handleSignOut} />;
  } else if (selectedTile === "Profile" && (!userId || !userDetails)) {
    content = <p>No user details found. Please log in again.</p>;
  }

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-12 main-content p-4">
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
