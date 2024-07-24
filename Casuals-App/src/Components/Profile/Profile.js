import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="card mb-4">
      <div className="card-body d-flex align-items-center">
        <img
          src={user.profilePicture || "path/to/default/profile/photo.jpg"}
          alt="Profile"
          className="rounded-circle me-3"
          style={{ width: "80px", height: "80px" }}
        />
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>ID: {user.id}</p>
          <button className="btn btn-outline-danger" onClick={handleSignOut}>
            <FaSignOutAlt className="me-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
