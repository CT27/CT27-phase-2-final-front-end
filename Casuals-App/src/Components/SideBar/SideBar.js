import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const SideBar = ({ profile }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user data (for example, from local storage)
    localStorage.removeItem("user");
    // Redirect to the login page
    navigate("/login");
  };

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
      <button
        className="btn btn-link mt-4"
        onClick={handleSignOut}
        style={{ display: "flex", alignItems: "center" }}
      >
        <FaSignOutAlt className="me-2" />
        Sign Out
      </button>
    </div>
  );
};

export default SideBar;
