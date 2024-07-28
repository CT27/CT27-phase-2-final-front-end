import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

const Profile = ({ user }) => {
  const handleSignOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userProfilePicture");
    window.location.href = "/login";
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log("User data in Profile component:", user);

  return (
    <div className="profile-card">
      <div className="profile-picture-container">
        <img
          src={user.profilePicture || "path/to/default/profile/photo.jpg"}
          alt="Profile"
          className="rounded-circle profile-picture"
        />
      </div>
      <div className="profile-details">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>ID: {user.id}</p>
        <button className="btn btn-outline-danger" onClick={handleSignOut}>
          <FaSignOutAlt className="me-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
