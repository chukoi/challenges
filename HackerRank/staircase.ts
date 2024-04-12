function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    let step = "";
    // let numSpaces = Math.ceil(n - i / 2);
    // console.log("numSpaces", numSpaces);
    for (let j = i; j <= n - 1; j++) {
      step += " ";
    }
    for (let k = 1; k <= i; k++) {
      step += "#";
    }
    console.log(step);
  }
}

staircase(4);
staircase(6);
