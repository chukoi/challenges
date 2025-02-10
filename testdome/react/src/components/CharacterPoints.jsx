import React, {useEffect, useState} from 'react';

function CharacterPoints({totalPoints}) {

  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(health + stamina + speed);
  }, [health, stamina, speed]);

  const handleChange = function (e) {
    const withinRange = score <= totalPoints;
    if (!withinRange) return;

    const inputName = e.target.name;
    const inputValue = Number(e.target.value);

    let difference;
    if (totalPoints === score) {
      switch (inputName) {
        case 'health': {
          difference = health - inputValue;
          break;
        }
        case 'stamina':
          difference = stamina - inputValue;
          break;
        case 'speed':
          difference = speed - inputValue;
          break;
        default:
          break;
      }
      if (difference < 0) return;
    }

    switch (inputName) {
      case 'health':
        setHealth(inputValue);
        break;
      case 'stamina':
        setStamina(inputValue);
        break;
      case 'speed':
        setSpeed(inputValue);
        break;
      default:
        break;
    }
  };

  return (<div>
    Character stats: <span
    id="points">{Number(totalPoints) - score}</span> points
    left.
    <div>
      <input name="health" type="range" id="health" min="0" max={totalPoints}
             value={health}
             step="1" onChange={handleChange}/>Health
    </div>
    <div>
      <input name="stamina" type="range" id="stamina" min="0"
             max={totalPoints}
             value={stamina}
             step="1" onChange={handleChange}/>Stamina
    </div>
    <div>
      <input name="speed" type="range" id="speed" min="0" max={totalPoints}
             value={speed}
             step="1" onChange={handleChange}/>Speed
    </div>
  </div>);
};

export default CharacterPoints;

