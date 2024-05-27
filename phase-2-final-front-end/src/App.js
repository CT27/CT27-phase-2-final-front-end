import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Casuals Log-in</h1>

        <form className="Log-in">
          <div>
            <label>Email:</label>
            <input type="email"></input>
          </div>
          <label>Password:</label>
          <input type="password"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
