import React from "react";

const Reports = () => {
  // Dummy data for reports
  const reports = [
    { date: "01/01/2023", hours: 8, event: "Event 1" },
    { date: "02/01/2023", hours: 7, event: "Event 2" },
    { date: "03/01/2023", hours: 6, event: "Event 3" },
  ];

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            {report.date} - {report.hours} hours - {report.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
