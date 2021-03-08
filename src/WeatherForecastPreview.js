import React from "react";
import "./App.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="colRow">
        <h3 className="time">{hours()}</h3>
        <img
          className="forecastIcons"  
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={[props.data.main.temp]}
        />
        <p className="forecastTemperature"> {temperature()} </p>
      </div>
    );
  } else {
    return (
      <div className="colRow">
        <h3 className="time">{hours()}</h3>
        <img
          className="forecastIcons"   
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={[props.data.main.temp]}
        />
      </div>
    );
  }
}