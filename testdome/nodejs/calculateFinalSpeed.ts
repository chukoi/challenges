function calculateFinalSpeed(initialSpeed, inclinations) {
  let speed = initialSpeed;
  inclinations.forEach((inclination) => {
    speed -= inclination;
    if (speed <= 0) speed = 0;
  });
  return speed;
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));
