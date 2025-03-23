import React from "react";
import "./AnalogClock.css";
import { useTime } from "../hooks/useTime";

type HandProps = {
  className: string;
  rotation: number;
};

const Hand = ({ className, rotation }: HandProps) => {
  return (
    <div
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

function AnalogClock() {
  const { hours, minutes, seconds } = useTime();

  const hourRotation = ((hours % 12) / 12) * 360;
  const minuteRotation = (minutes / 60) * 360;
  const secondRotation = (seconds / 60) * 360;

  return (
    <div className="wrapper">
      <div className="clock">
        <Hand className="hour-hand" rotation={hourRotation}></Hand>
        <Hand className="minute-hand" rotation={minuteRotation}></Hand>
        <Hand className="second-hand" rotation={secondRotation}></Hand>
      </div>
    </div>
  );
}

export default AnalogClock;
