import React, { useState } from "react";


export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (      
            <div className="temperature">
            <span id="temperature"> {Math.round(props.celsius)} </span>
            <span className="unit">
            <a href="#">
             °C
            </a>{" "}
            |
            <a href="#" onClick={showFahrenheit}>
              °F
            </a>
            </span>
          </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9) /5 + 32;
        return (
            <div className ="temperature">
                <span id="temperature"> {Math.round(fahrenheit)} </span>
            <span className="unit">
            <a href="#" onClick={convertToCelsius}>
             °C
            </a>{" "}
            |
            <a href="#">
              °F
            </a>
            </span>
          </div>
        );    
}}