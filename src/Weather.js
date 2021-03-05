import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData ({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl:"http://openweathermap.org/img/wn/10d@2x.png",
      date: new Date(response.data.dt * 1000),
      ready: true
    });
  }
  if (weatherData.ready) {
  return (
    <div className="Weather"> 
    <body>
        <h1 id="change-city">
          <strong>{weatherData.city}</strong>
        </h1>
        <h2>
        <FormattedDate date={weatherData.date}/>
        </h2>
        <div>
          <div className="temperature">
            <img
              className="icon"
              id="icon"
              src={weatherData.iconUrl}
            />
            <span id="temperature"> {Math.round(weatherData.temperature)} </span>
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
      <div className="weather">
        <div>
          Weather: <span id="description" className="text-capitalize"> {weatherData.description}</span>
        </div>
        <div>
          Wind: <span id="wind"> {Math.round(weatherData.wind * 8/5)}km/h </span>
        </div>
        <div>
          Humidity: <span id="humidity">{Math.round(weatherData.humidity)}%</span>
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
      </body> 
      </div>
);
} else {
  const apiKey = "374252187c262a7fb1ad4bdc00cf1626";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;  
  axios.get(apiUrl).then(handleResponse);

  return "Loading"
}
} 