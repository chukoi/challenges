/**
 Test Case 1
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [1, 6, -1, 10]
 }
 Test Case 2
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 25, 6, -1, 8, 10]
 }
 Test Case 3
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 6, -1, 8, 10]
 }
 Test Case 4
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [22, 25, 6]
 }
 Test Case 5
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [1, 6, 10]
 }
 Test Case 6
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 10]
 }
 Test Case 7
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, -1, 8, 10]
 }
 Test Case 8
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [25]
 }
 Test Case 9
 {
 "array": [1, 1, 1, 1, 1],
 "sequence": [1, 1, 1]
 }
 Test Case 10
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12]
 }
 Test Case 11
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [4, 5, 1, 22, 25, 6, -1, 8, 10]
 }
 Test Case 12
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 23, 6, -1, 8, 10]
 }
 Test Case 13
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 22, 25, 6, -1, 8, 10]
 }
 Test Case 14
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 22, 6, -1, 8, 10]
 }
 Test Case 15
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [1, 6, -1, -1]
 }
 Test Case 16
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [1, 6, -1, -1, 10]
 }
 Test Case 17
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [1, 6, -1, -2]
 }
 Test Case 18
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [26]
 }
 Test Case 19
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 25, 22, 6, -1, 8, 10]
 }
 Test Case 20
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 26, 22, 8]
 }
 Test Case 21
 {
 "array": [1, 1, 6, 1],
 "sequence": [1, 1, 1, 6]
 }
 Test Case 22
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [1, 6, -1, 10, 11, 11, 11, 11]
 }
 Test Case 23
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 10]
 }
 Test Case 24
 {
 "array": [5, 1, 22, 25, 6, -1, 8, 10],
 "sequence": [1, 6, -1, 5]
 }
 */
function isValidSubsequence(array: number[], sequence: number[]) {
  // Write your code here.
  let l1 = 0;
  let l2 = 0;
  let r1 = array.length - 1;
  let r2 = sequence.length - 1;

  while (l1 < r1 || l2 < r2) {
    if (sequence[r2] === array[r1]) {
      r2--;
    }

    if (sequence[l2] === array[l1]) {
      l2++;
    }

    r1--;
    l1++;

    if (l1 === array.length - 1 || r1 === 0) {
      break;
    }
  }

  return r2 < l2;
}

// function isValidSubsequence(array, sequence) {
//  for (let i = array.length - 1; i >= 0; i--) {
//   if (array[i] === sequence[sequence.length - 1]) {
//    sequence.pop();
//   }
//  }
//
//
//  return sequence.length === 0;
// }

const program = require("./program");
const chai = require("chai");

it("Test Case #1", function () {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  chai.expect(isValidSubsequence(array, sequence)).to.deep.equal(true);
});
