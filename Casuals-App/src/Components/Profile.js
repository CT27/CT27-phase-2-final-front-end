import React from "react";

const Profile = ({ user, onSignOut }) => {
  return (
    <div className="card mb-4">
      <div className="card-body d-flex align-items-center">
        {user ? (
          <>
            <img
              src={user.picture || "path/to/default/profile/photo.jpg"}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <h5 className="card-title mb-1">{user.name}</h5>
              <p className="card-text mb-1">{user.email}</p>
              <p className="card-text mb-2">User ID: {user.id}</p>
            </div>
          </>
        ) : (
          <p>No profile data available.</p>
        )}
        <button className="btn btn-outline-danger ms-auto" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
