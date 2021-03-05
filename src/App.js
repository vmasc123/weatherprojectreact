import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
return ( 
  <div className="App">
      <div className="container">
      <Weather defaultCity="Toronto"/>
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
);
}




