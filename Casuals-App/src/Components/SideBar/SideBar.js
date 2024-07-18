// Sidebar.js
import React from "react";
import "./SideBar.css";

const SideBar = ({ profile }) => {
  return (
    <div className="sidebar">
      <img src={profile.picture} alt="Profile" className="profile-picture" />
      <h2>{profile.name}</h2>
      <p>{profile.phone}</p>
      <p>{profile.address}</p>
    </div>
  );
};

export default SideBar;
