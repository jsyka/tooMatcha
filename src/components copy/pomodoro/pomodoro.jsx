import React, { useEffect, useState } from "react";
import "./pomodoro.css";

function PomodoroTimer() {
  const initialSeconds = 25 * 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(interval);
            alert("Timer's up!");
            return 0;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [isActive]);

  function handleStartPause() {
    setIsActive((prev) => !prev);
  }

  function handleReset() {
    setSeconds(initialSeconds);
    setIsActive(false);
  }

  function displayTime(seconds) {
    let minuteCd = Math.floor(seconds / 60);
    let secondCd = seconds % 60;
    return `${padZero(minuteCd)}:${padZero(secondCd)}`;
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  return (
    <div className="pomodoro-container">
        <h1 className="pomo-title">pomodoro timer</h1>
      <div className="timer">{displayTime(seconds)}</div>
      <div className="button-container">
        <button className="timerbutton" onClick={handleStartPause}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="timerbutton" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
