import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData ({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      ready: true
    });
}

function search() {
  const apiKey = "4235c1e76fa14f9f8542da028429e01a";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}
  

function handleCityChange(event) {
  setCity(event.target.value);
}

  if (weatherData.ready) {
  return (
      <div className= "weatherData">
       <h1>
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
     <WeatherTemperature celsius={weatherData.temperature}/> 
  </div>
<div className="weather">
  <div>
   <strong>Weather:</strong> <span id="description" className="text-capitalize"> {weatherData.description}</span>
  </div>
  <div>
   <strong>Wind:</strong> <span id="wind"> {Math.round(weatherData.wind * 8/5)}km/h </span>
  </div>
  <div>
   <strong>Humidity:</strong> <span id="humidity">{Math.round(weatherData.humidity)}%</span>
  </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row" id="forecast">
        <div className="col">
          <strong>12:00</strong>
          <br />
          <img src="https://openweathermap.org/img/wn/03d@2x.png" />
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="enterCity"
          id="search-city"
          type="text"
          autofocus="on"
          placeholder="Enter a city here"
          className="border"
          onChange = {handleCityChange}  
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        <small>
          <a href="https://github.com/vmasc123/weatherprojectreact" target="_blank">
            Open-source code{" "}
          </a>
          by Victoria Mascarenhas
        </small>
      </footer> 
      </div>
      </div>
      </div>
  );
} else {
  search();
  return "Loading"
}
}
