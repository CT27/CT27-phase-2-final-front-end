import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const handleSignOut = () => {
    // Add your sign-out logic here, e.g., clear user session, redirect to login page, etc.
    console.log("User signed out");
    // Example: Redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="row h-100">
      <div className="col-md-12 main-content p-4">
        <div className="card mb-4">
          <div className="card-body d-flex align-items-center">
            <img
              src="path/to/default/profile/photo.jpg" // Default profile photo
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={handleSignOut}
              >
                <FaSignOutAlt className="me-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
