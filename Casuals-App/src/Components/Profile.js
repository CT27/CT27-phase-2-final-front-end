import React from "react";

const Profile = ({ profile }) => {
  if (!profile) {
    return <p>No profile data available.</p>;
  }

  return (
    <div className="card mb-4">
      <div className="card-body d-flex align-items-center">
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
      </div>
    </div>
  );
};

export default Profile;
