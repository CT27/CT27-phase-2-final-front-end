import React, { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId"); // Get the user ID from local storage
      console.log(`User ID retrieved from local storage: ${userId}`);

      if (userId) {
        try {
          console.log(`Fetching user data for user ID: ${userId}`);
          // Update the URL to include the /api prefix
          const response = await axios.get(
            `http://localhost:3000/api/users/${userId}`
          );
          console.log("User data fetched successfully:", response.data);
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setError(
            "Error fetching user data: " +
              (error.response ? error.response.statusText : error.message)
          );
        } finally {
          setLoading(false); // Set loading to false when data is fetched
        }
      } else {
        console.error("User ID not found in local storage");
        setError("User ID not found in local storage");
        setLoading(false); // Set loading to false if user ID is not found
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("userId"); // Clear the user ID from local storage
    console.log("User signed out");
    window.location.href = "/login";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Display the error message
  }

  return (
    <div className="row h-100">
      <div className="col-md-12 main-content p-4">
        <div className="card mb-4">
          <div className="card-body d-flex align-items-center">
            <img
              src={
                userData.profilePicture || "path/to/default/profile/photo.jpg"
              } // Use user's profile picture if available
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <h4>{userData.name}</h4> {/* Display the user's name */}
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
