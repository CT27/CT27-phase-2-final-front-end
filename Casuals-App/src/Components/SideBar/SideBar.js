import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#timesheets">Timesheets</a>
        </li>
        <li>
          <a href="#reports">Reports</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
