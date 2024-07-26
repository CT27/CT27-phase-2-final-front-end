import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Header from "../Header/Header";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Reports from "../Reports/Reports";
import Profile from "../Profile/Profile";

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
      <Header />
      <div className="tiles-container row mb-4">
        {["Profile", "Timesheet", "Payment Details", "Reports"].map((tile) => (
          <div key={tile} className="col-md-3 mb-3">
            <div
              className={`p-3 tile ${
                selectedTile === tile ? "tile-selected" : ""
              }`}
              onClick={() => setSelectedTile(tile)}
            >
              {tile}
            </div>
          </div>
        ))}
      </div>
      <div className="h-100">{content}</div>
    </div>
  );
};

export default Dashboard;
