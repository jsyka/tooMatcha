import React, { useEffect, useState } from "react";
import Clock from './components copy/digital-clock/digital-clock.jsx'
import Music from './components copy/music/music.jsx'
import Pomodoro from "./components copy/pomodoro/pomodoro.jsx";
import Todo from "./components copy/todo/todo.jsx";
import WeatherApp from "./components copy/weather-widget.jsx";
import toast from './assets/toast.jpg';

const App = () => {
  return (
<>
<div className="container">
        {/* <h1>MATCHA</h1> */}
        <div className="img-container">
          <img className="img" src={toast} />
        </div>
        <h1 className="no-weather">Select a city</h1>
        <Clock />
        <WeatherApp />
        <Music />
        <Pomodoro />
        <Todo />
      </div>
</>
  );
};

export default App;