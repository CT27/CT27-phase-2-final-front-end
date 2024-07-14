import React from "react";
import "./Avatar.css";

const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar">
      <img src={src} alt={alt} className="avatar-img" />
    </div>
  );
};

export default Avatar;
