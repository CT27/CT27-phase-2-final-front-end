// src/components/Header.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-light py-3 mb-3 border-bottom">
      <div className="container d-flex align-items-center">
        <img
          src="../Components/Assets/EVSPLwordlogo.png"
          alt="Logo"
          className="mr-3"
          style={{ height: "50px" }}
        />
        <h1 className="m-0">Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
