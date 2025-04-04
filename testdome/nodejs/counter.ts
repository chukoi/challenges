function startTimer(callback: (...args: any) => boolean, interval: number) {
  var count = 0;
  var id = setInterval(function () {
    count++;
    if (!callback(count)) {
      clearInterval(id);
    }
  }, interval);
}

function callback(counter: number) {
  console.log(counter);
  return counter < 5;
}

// Expected: 1, 2, 3, 4, 5 with 50ms interval.
startTimer(callback, 50);
