import React, { useState } from "react";
import "./Dashboard.css";
import TimeLogForm from "../TimeLogForm/TimeLogForm";
import Avatar from "../Avatar/Avatar";
import { BsPersonCircle } from "react-icons/bs";

const Panel = ({ title, content, onRemove }) => (
  <div className="panel">
    <h2>{title}</h2>
    <div>{content}</div>
    <button onClick={onRemove}>Remove Panel</button>
  </div>
);

const Dashboard = () => {
  const [panels, setPanels] = useState([
    { title: "Panel 1", content: "Content of Panel 1" },
    { title: "Panel 2", content: "Content of Panel 2" },
  ]);

  const addPanel = () => {
    const newPanel = {
      title: `Panel ${panels.length + 1}`,
      content: <TimeLogForm />, // Insert the TimeLogForm component here
    };
    setPanels([...panels, newPanel]);
  };

  const removePanel = (index) => {
    setPanels(panels.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Avatar src=<BsPersonCircle /> alt="Profile Photo" />
      </div>
      <button onClick={addPanel}>Add Panel</button>

      {panels.map((panel, index) => (
        <Panel
          key={index}
          title={panel.title}
          content={panel.content}
          onRemove={() => removePanel(index)}
        />
      ))}
    </div>
  );
};

export default Dashboard;
