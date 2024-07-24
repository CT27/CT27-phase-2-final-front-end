import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Reports from "../Reports/Reports";
import Profile from "../Profile/Profile"; // Import the Profile component

const Dashboard = () => {
  const [selectedTile, setSelectedTile] = useState("Timesheet");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUserName = localStorage.getItem("userName");
    const storedUserEmail = localStorage.getItem("userEmail");
    const storedUserProfilePicture = localStorage.getItem("userProfilePicture");

    if (storedUserId && storedUserName && storedUserEmail) {
      const userData = {
        id: storedUserId,
        name: storedUserName,
        email: storedUserEmail,
        profilePicture:
          storedUserProfilePicture || "path/to/default/profile/photo.jpg",
      };
      console.log("User data found in local storage:", userData);
      setUser(userData);
    } else {
      console.log("User data not found in local storage");
    }
  }, []);

  let content;
  if (selectedTile === "Timesheet") {
    content = <TimeLogForm />;
  } else if (selectedTile === "Payment Details") {
    content = <PaymentDetails userId={user?.id} />;
  } else if (selectedTile === "Reports") {
    content = <Reports />;
  } else if (selectedTile === "Profile") {
    content = <Profile user={user} />;
  }

  return (
    <div className="container-fluid h-100">
      <Header /> {/* Add the Header component here */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div
            className={`card text-center p-3 ${
              selectedTile === "Profile" ? "bg-dark text-white" : "bg-light"
            } cursor-pointer`}
            onClick={() => setSelectedTile("Profile")}
          >
            Profile
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            className={`card text-center p-3 ${
              selectedTile === "Timesheet" ? "bg-dark text-white" : "bg-light"
            } cursor-pointer`}
            onClick={() => setSelectedTile("Timesheet")}
          >
            Timesheet
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            className={`card text-center p-3 ${
              selectedTile === "Payment Details"
                ? "bg-dark text-white"
                : "bg-light"
            } cursor-pointer`}
            onClick={() => setSelectedTile("Payment Details")}
          >
            Payment Details
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div
            className={`card text-center p-3 ${
              selectedTile === "Reports" ? "bg-dark text-white" : "bg-light"
            } cursor-pointer`}
            onClick={() => setSelectedTile("Reports")}
          >
            Reports
          </div>
        </div>
      </div>
      <div className="row h-100">
        <div className="col-md-12 main-content p-4">{content}</div>
      </div>
    </div>
  );
};

export default Dashboard;
