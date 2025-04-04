function numbersToLetters(stringOfNumbers: string) {
  // Your code here
  let str = "";
  const arrs = stringOfNumbers.split("+");
  for (let i = 0; i < arrs.length; i++) {
    const arr = arrs[i].split(" ");
    for (let j = 0; j < arr.length; j++) {
      const number = parseInt(arr[j]);
      const charCode = String.fromCharCode(number + 64);
      str += charCode;
    }
    if (i !== arrs.length) {
      str += " ";
    }
  }
  return str.trim();
}

console.log(numbersToLetters("20 5 19 20+4 15 13 5+20 5 19 20"));
