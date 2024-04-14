import React, { useEffect, useState } from "react";
import moment from "moment";

function currentTime(): string {
  return moment.unix(Math.floor(Date.now() / 1000)).format("HH:mm:ss");
}

interface IProps {}

export default function Clock(): React.ReactElement<IProps> {
  const [time, setTime] = useState<string>(currentTime());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(currentTime), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p style={{ fontSize: "24pt", fontWeight: "bold" }}>{time}</p>;
}
