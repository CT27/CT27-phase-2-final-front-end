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
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-3 sidebar-container p-0">
          <SideBar profile={profile} />
        </div>
        <div className="col-md-9 main-content p-4">
          <div className="row tile-container">
            <div className="col-md-4 p-2">
              <div
                className="tile d-flex align-items-center justify-content-center"
                onClick={() => setSelectedTile("Timesheet")}
              >
                Timesheet
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div
                className="tile d-flex align-items-center justify-content-center"
                onClick={() => setSelectedTile("Payment Details")}
              >
                Payment Details
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div
                className="tile d-flex align-items-center justify-content-center"
                onClick={() => setSelectedTile("Reports")}
              >
                Reports
              </div>
            </div>
          </div>
          <div className="content-container mt-3 p-3 border rounded bg-white">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
