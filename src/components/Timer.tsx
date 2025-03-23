import React, { useEffect, useState } from "react";

const INITIAL_TIMER = 600;

const handleInitialState = () => {
  const timer = localStorage.getItem("timer");
  return timer ? parseInt(timer) : INITIAL_TIMER;
};

const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(handleInitialState());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => {
        if (prevElapsedTime <= 0) {
          return INITIAL_TIMER;
        } else {
          localStorage.setItem("timer", JSON.stringify(prevElapsedTime - 1));
          return prevElapsedTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <>{`${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`}</>
  );
};

export default Timer;
