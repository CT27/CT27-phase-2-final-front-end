// AuthContext.js
import React, { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
