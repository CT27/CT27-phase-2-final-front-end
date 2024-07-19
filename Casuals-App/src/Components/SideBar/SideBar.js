import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const SideBar = ({ profile }) => {
  return (
    <div className="sidebar d-flex flex-column align-items-center py-4">
      <img
        src={profile.picture}
        alt="Profile"
        className="profile-picture mb-3"
      />
      <h2 className="h5">{profile.name}</h2>
      <p className="mb-1">{profile.phone}</p>
      <p>{profile.address}</p>
    </div>
  );
};

export default SideBar;
