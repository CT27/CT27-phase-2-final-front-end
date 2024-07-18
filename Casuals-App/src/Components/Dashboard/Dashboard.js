import React, { useState } from "react";
import "./Dashboard.css";
import SideBar from "../SideBar/SideBar"; // Ensure the file name matches exactly
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";

import Reports from "../Reports/Reports";

const Dashboard = () => {
  const [selectedTile, setSelectedTile] = useState("Timesheet");

  const profile = {
    picture: "path/to/your/profile/photo.jpg",
    name: "John Doe",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
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
    <div className="dashboard-container">
      <div className="sidebar-container">
        <SideBar profile={profile} />
      </div>
      <div className="main-content">
        <div className="tile-container">
          <div className="tile" onClick={() => setSelectedTile("Timesheet")}>
            Timesheet
          </div>
          <div
            className="tile"
            onClick={() => setSelectedTile("Payment Details")}
          >
            Payment Details
          </div>
          <div className="tile" onClick={() => setSelectedTile("Reports")}>
            Reports
          </div>
        </div>
        <div className="content-container">{content}</div>
      </div>
    </div>
  );
};

export default Dashboard;
