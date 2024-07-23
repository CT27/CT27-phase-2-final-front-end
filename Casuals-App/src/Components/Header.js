// src/components/Header.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Assets/EVSPLwordnologo.png";

const Header = () => {
  return (
    <header
      className="bg-light border rounded py-2 mb-3 d-flex align-items-center"
      style={{ height: "165x", width: "100%" }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </header>
  );
};

export default Header;
