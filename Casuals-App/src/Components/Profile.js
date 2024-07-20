import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ userId, onSignOut }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:3000/users/${userId}`
          );
          if (response.status === 200) {
            const user = response.data;
            setProfile(user);
          } else {
            console.log("User not found or server error.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <div className="card mb-4">
        <div className="card-body d-flex align-items-center">
          {loading ? (
            <p>Loading profile...</p>
          ) : profile ? (
            <>
              <img
                src={profile.picture || "path/to/default/profile/photo.jpg"}
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <h5 className="card-title mb-1">{profile.name}</h5>
                <p className="card-text mb-1">{profile.email}</p>
                <p className="card-text mb-2">User ID: {profile.id}</p>
              </div>
            </>
          ) : (
            <p>No profile data available.</p>
          )}
          <button
            className="btn btn-outline-danger ms-auto"
            onClick={onSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
