import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputFields from "./components/InputFields";

function App() {
  return (
    <div className="app">
      <div className="app-title">Taskify</div>
      <InputFields />
    </div>
  );
}

export default App;
