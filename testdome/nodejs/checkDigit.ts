function createCheckDigit(membershipId: string): number {
  // Write the code that goes here.
  const digit = membershipId.split("").reduce((x, y) => +x + +y, 0);

  while (digit.toString().length > 1) {
    return createCheckDigit(digit.toString());
  }

  return digit;
}

console.log(createCheckDigit("55555"));
