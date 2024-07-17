import React, { useState } from "react";
import "./Dashboard.css";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import Avatar from "../Avatar/Avatar";

const Panel = ({ title, content, onRemove }) => (
  <div className="panel">
    <h2>{title}</h2>
    <div>{content}</div>
    <button onClick={onRemove}>Remove Panel</button>
  </div>
);

const Dashboard = () => {
  const [panels, setPanels] = useState([
    { title: "Timesheet Submission", content: <TimeLogForm /> },
  ]);

  const addPanel = () => {
    const newPanel = {
      title: `Panel ${panels.length + 1}`,
      content: <TimeLogForm />,
    };
    setPanels([...panels, newPanel]);
  };

  const removePanel = (index) => {
    setPanels(panels.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button onClick={addPanel} className="add-button">
          Add Panel
        </button>
        <Avatar src="path/to/your/profile/photo.jpg" alt="Profile Photo" />
      </div>
      <div className="dashboard">
        {panels.map((panel, index) => (
          <Panel
            key={index}
            title={panel.title}
            content={panel.content}
            onRemove={() => removePanel(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
