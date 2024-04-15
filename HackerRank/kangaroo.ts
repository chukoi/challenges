function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  if (x2 >= x1 && v2 > v1) {
    return "NO";
  }

  if (x1 >= x2 && v1 > v2) {
    return "NO";
  }

  if (v1 === v2 && x1 !== x2) {
    return "NO";
  }

  let jump = 1;
  let samePos = false;

  // count jumps
  while (true) {
    const pos1 = x1 + jump * v1;
    const pos2 = x2 + jump * v2;

    if (pos1 === pos2) {
      samePos = true;
      break;
    }

    if (pos1 >= pos2 && v1 > v2) {
      samePos = false;
      break;
    }

    if (pos2 >= pos1 && v2 > v2) {
      samePos = false;
      break;
    }

    jump++;
  }

  return samePos ? "YES" : "NO";
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
