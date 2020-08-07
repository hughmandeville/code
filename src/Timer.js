import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ isActive }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <footer id="timer">
      {Math.floor(seconds / 60)}.{seconds % 60 < 10 ? "0" : ""}
      {seconds % 60}
    </footer>
  );
};

export default Timer;
