import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import SideBar from "../SideBar/SideBar";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import Reports from "../Reports/Reports";

const Dashboard = () => {
  const [selectedTile, setSelectedTile] = useState("Timesheet");

  const profile = {
    picture: "path/to/your/profile/photo.jpg",
    name: "Candice Test",
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
