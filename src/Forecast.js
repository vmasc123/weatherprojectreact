import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";


export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        <WeatherForecastPreview data={forecast.list[0]} unit="celsius" />
        <WeatherForecastPreview data={forecast.list[1]} unit="celsius" />
        <WeatherForecastPreview data={forecast.list[2]} unit="celsius" />
        <WeatherForecastPreview data={forecast.list[3]} unit="celsius" />
        <WeatherForecastPreview data={forecast.list[4]} unit="celsius" />
      </div>
    );
  } else {
    let apiKey = "4235c1e76fa14f9f8542da028429e01a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}