import React from "react";
import Dashboard from "./Dashboard";
import "../styles/App.css"

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Portfolio</h1>
      </div>
      <div className="app-body">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
