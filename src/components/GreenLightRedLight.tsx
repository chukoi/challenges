import React, { useEffect, useState } from "react";
import styled from "styled-components";

function GreenLightRedLight() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(0);
  const [boxColor, setBoxColor] = useState("red");

  const handleStartGame = () => {
    if (gameStarted) {
      return;
    }

    setGameStarted(true);
    setGameFinished(false);
    setScore(0);
    setTimeLeft(15);
    setBoxColor("green");
  };

  const handleBoxClick = () => {
    if (boxColor === "green") {
      setScore((prevScore) => prevScore + 1);
    } else {
      setGameStarted(false);
      setGameFinished(true);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBoxColor(boxColor === "green" ? "red" : "green");
    }, Math.floor(Math.random() * 1000) + 1000);

    return () => clearInterval(intervalId);
  }, [boxColor]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameFinished(true);
      setGameStarted(false);
      return;
    }
    const timeoutId = setTimeout(() => {
      setTimeLeft((prevState) => prevState - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [gameStarted, gameFinished, timeLeft]);

  return (
    <Wrapper>
      {(!gameStarted || gameFinished) && (
        <Button onClick={handleStartGame}>Start Game</Button>
      )}
      {gameStarted && !gameFinished && (
        <Timer>
          Time left: {timeLeft}s {gameFinished && " - Game Over!"}
        </Timer>
      )}
      <Scoreboard>Score: {score}</Scoreboard>
      {gameStarted && !gameFinished && (
        <Box onClick={handleBoxClick} color={boxColor}></Box>
      )}
      {gameFinished && (
        <Outcome>{score < 15 ? "Game Over!" : "You win!"}</Outcome>
      )}
    </Wrapper>
  );
}

export default GreenLightRedLight;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Scoreboard = styled.h1`
  font-size: 36px;
`;

const Outcome = styled.h2`
  font-size: 28px;
`;

const Timer = styled.p`
  font-size: 24px;
  margin-bottom: 36px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 28px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
