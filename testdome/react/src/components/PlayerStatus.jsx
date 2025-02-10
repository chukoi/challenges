import React from "react";

function PlayerStatus() {
  const [status, setStatus] = React.useState("online");
  const [counter, setCounter] = React.useState(1);

  const toggleStatus = function () {
    setStatus(status === "online" ? "away" : "online");
    setCounter((p) => p + 1);
  };

  return (
    <div>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={toggleStatus}>Toggle status</button>
    </div>
  );
}

export default PlayerStatus;
