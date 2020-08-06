import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <footer id="timer">{seconds}s</footer>;
};

export default Timer;
