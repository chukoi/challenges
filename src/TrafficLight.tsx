import React, { useEffect, useState } from "react";

const config = {
  red: {
    duration: 4000,
    next: "green",
  },
  yellow: {
    duration: 500,
    next: "red",
  },
  green: {
    duration: 3000,
    next: "yellow",
  },
};

interface IProps {}

export default function TrafficLight(): React.ReactElement<IProps> {
  const [currentColour, setCurrentColour] = useState<string>("green");

  useEffect(() => {
    // @ts-ignore
    const { duration, next } = config[currentColour];

    const timerId = setTimeout(() => setCurrentColour(next), duration);

    return () => clearTimeout(timerId);
  }, [currentColour]);

  return (
    <div
      style={{
        height: 50,
        width: 50,
        borderRadius: "50%",
        backgroundColor: currentColour,
      }}
    ></div>
  );
}
