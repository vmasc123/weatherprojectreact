import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 id="change-city">
          <strong>Toronto</strong>
        </h1>
        <h2>
          Last Updated: <span id="date"> 13:00 </span>
        </h2>
        <div>
          <div className="temperature">
            <img
              className="icon"
              id="icon"
              src="https://openweathermap.org/img/wn/01d@2x.png"
            />
            <span id="temperature"> 0 </span>
            <span className="units" />
            <a href="#" id="celsius-link">
              °C
            </a>{" "}
            |
            <a href="#" id="fahrenheit-link">
              °F
            </a>
          </div>
        </div>
      </div>
      <div className="weather">
        <div>
          Weather: <span id="description">Cloudy</span>
        </div>
        <div>
          Wind: <span id="wind">1 km/h</span>
        </div>
        <div>
          Humidity: <span id="humidity">68%</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row" id="forecast">
        <div className="col">
          <strong>12:00</strong>
          <br />
          <img src="https://openweathermap.org/img/wn/02d@2x.png" />
          <br />3 °C /<em> -4°C</em>
        </div>

        <div className="col">
          <strong>15:00</strong>
          <br />
          <img src="https://openweathermap.org/img/wn/03d@2x.png" />
          <br />
          -3°C /<em> -6°C</em>
        </div>

        <div className="col">
          <strong>18:00</strong>
          <br />
          <img src="https://openweathermap.org/img/wn/04d@2x.png" />
          <br />
          -2°C /<em> -6°C</em>
        </div>

        <div className="col">
          <strong>21:00</strong>
          <br />
          <img src="https://openweathermap.org/img/wn/09d@2x.png" />
          <br />
          -3°C /<em> -6°C</em>
        </div>

        <div className="col">
          <strong>24:00</strong>
          <br />
          <img src="https://openweathermap.org/img/wn/11d@2x.png" />
          <br />
          0°C /<em> -1°C</em>
        </div>
      </div>
      <br />
      <br />
      <br />
      <form className="search">
        <input
          className="enterCity"
          id="search-city"
          type="text"
          autofocus="on"
          placeholder="Enter a city here"
          className="border"
        />
        <br />
        <br />
        <input
          className="searchButton"
          id="submit"
          type="submit"
          value="Search"
        />
        <br />
        <br />
        <button button type="button" className="currentLocation">
          Current Location
        </button>
      </form>

      <footer>
        <small>
          <a href="https://github.com/vmasc123/weatherprojectreact" target="_blank">
            Open-source code{" "}
          </a>
          by Victoria Mascarenhas
        </small>
      </footer>
      </div>
  );
}

