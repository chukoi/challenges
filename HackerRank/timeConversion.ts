function timeConversion(s: string): string {
  let arr = s.split("");

  // take first two as numbers
  let hour = Number(s.substring(0, 2));

  // take last two as time of day
  const timeOfDay = s.substring(8, 10);

  // if 12 and AM
  // set 00 and add at front
  if (hour === 12 && timeOfDay === "AM") {
    arr[0] = "0";
    arr[1] = "0";
  }

  // if < 12 time of day is PM
  // add 12 and add at front
  if (hour < 12 && timeOfDay === "PM") {
    hour = hour + 12;
    const arr2 = hour.toString().split("");
    arr = arr2.concat(arr.slice(2));
  }

  // remove time of day
  return arr.join("").substring(0, 8);
}

console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("05:00:00AM"));
console.log(timeConversion("07:00:00PM"));
console.log(timeConversion("12:00:00PM"));
