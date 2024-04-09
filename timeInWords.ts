/**
 * five o'clock
 * one minute past five
 * ten minutes past five
 * quarter past five
 * half past five
 * twenty minutes to six
 * quarter to six
 * thirteen minutes to six
 * twenty eight minutes past five
 * */
function timeInWords(hour: number, minutes: number): string {
  if (!(hour >= 0 && hour <= 24) || !(minutes >= 0 && minutes <= 59)) {
    throw new Error("must provide a valid time");
  }

  // handle 24 hour time
  if (hour > 12) {
    hour = hour - 12;
  }

  // map index to hours and minutes
  const numText = [
    "o'clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
  ];

  let str = "";

  // 0 minutes special case
  if (minutes === 0) {
    str += numText[hour] + " " + numText[minutes];
    return str;
  }

  // initialise
  str += numText[minutes] + " minutes past " + numText[hour];

  // create array as strings are immutable
  let arr = str.split(" ");

  // minutes past 30 are special
  // need to handle minutes to next hour
  if (minutes > 30) {
    arr[0] = numText[60 - minutes];
    arr[2] = "to";
    arr[arr.length - 1] = numText[hour + 1];
  }

  // quarter and half don't include minute(s) in string
  if (minutes % 15 === 0) {
    arr = arr.filter((s) => s !== "minutes");
  }

  // first 9 minutes are not plural
  if (minutes < 10) {
    arr[1] = "minute";
  }

  // return string
  return arr.join(" ");
}

console.log(timeInWords(5, 0));
console.log(timeInWords(5, 1));
console.log(timeInWords(5, 10));
console.log(timeInWords(5, 15));
console.log(timeInWords(5, 30));
console.log(timeInWords(5, 40));
console.log(timeInWords(5, 45));
console.log(timeInWords(5, 47));
console.log(timeInWords(5, 28));
