import React, { useState } from "react";
import "./Avatar.css";

const Avatar = ({ initialSrc, alt }) => {
  const [src, setSrc] = useState(initialSrc);
  const [editMode, setEditMode] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSrc(e.target.result);
      setEditMode(false);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="avatar">
      <img src={src} alt={alt} className="avatar-img" />
      {editMode ? (
        <div className="avatar-edit">
          <input type="file" onChange={handleImageChange} />
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setEditMode(true)} className="edit-button">
          Edit Profile Picture
        </button>
      )}
    </div>
  );
};

export default Avatar;
