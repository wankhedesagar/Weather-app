import React from "react";
import "./App.css";
import { MapPin } from "react-feather";

function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter City Name" />
<button></button>
      </div>

      <div className="content">
        <div className="location d-flex">
          <MapPin></MapPin>
          <h2>London <span>(GB)</span> </h2>
        </div>
          <p className="datetext">2 October 2023</p>
      </div>
    </div>
  );
}

export default App;
