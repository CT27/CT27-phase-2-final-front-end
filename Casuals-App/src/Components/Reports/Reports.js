import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Reports = () => {
  // Dummy data for reports
  const reports = [
    { date: "01/01/2023", hours: 8, event: "Event 1" },
    { date: "02/01/2023", hours: 7, event: "Event 2" },
    { date: "03/01/2023", hours: 6, event: "Event 3" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Reports</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Hours</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.date}</td>
                <td>{report.hours}</td>
                <td>{report.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
