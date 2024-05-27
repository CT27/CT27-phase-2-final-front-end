import React from "react";
import "./App.css";
import LoginBox from "./Components/LoginBox";
import NewUser from "./Components/NewUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Casuals Pro</h1>
        <LoginBox></LoginBox>
        <NewUser></NewUser>
      </header>
    </div>
  );
}

export default App;
