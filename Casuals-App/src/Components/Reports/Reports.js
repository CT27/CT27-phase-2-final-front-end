import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const RATE_PER_HOUR = 35; // Define the hourly rate

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const timesheetSubmissions =
        JSON.parse(localStorage.getItem(`timesheetSubmissions_${userId}`)) ||
        [];
      setReports(timesheetSubmissions);
    }
  }, []);

  return (
    <div className="container mt-4">
      {/* <h2 className="mb-4">Reports</h2> */}
      <div className="card p-4 shadow">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Hours</th>
                <th>Event</th>
                <th>Authorizer</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.date}</td>
                  <td>{report.hours}</td>
                  <td>{report.event}</td>
                  <td>{report.authorizer}</td>
                  <td>${(report.hours * RATE_PER_HOUR).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
