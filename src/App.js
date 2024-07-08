import React from "react";
import "./App.css";
import { MapPin, Search } from "react-feather";

function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input type="text" placeholder="Enter City Name" />
        <button>
          <Search></Search>
        </button>
      </div>

      <div className="content">
        <div className="location d-flex">
          <MapPin></MapPin>
          <h2>
            London <span>(GB)</span>{" "}
          </h2>
        </div>
        <p className="datetext">2 October 2023</p>

        <div className="weatherdesc">
          <img src="" alt="" />
          <h3>Clear Sky</h3>
        </div>

        <div className="tempstatus d-flex flex-c">
          <h1>
            43 <span>&deg;c</span>{" "}
          </h1>
          <h3>
            Feels Like 44 <span>&deg;C</span>{" "}
          </h3>
        </div>

        <div className="windstatus d-flex">
          <Wind></Wind>
          <h3>Wind is 20 Knots in 45deg;</h3>
        </div>
      </div>

      <div className="content">
        <h4>No Data found !</h4>
      </div>
    </div>
  );
}

export default App;
