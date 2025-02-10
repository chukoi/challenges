function ensure(value) {
  // Your code goes here
  if (value !== undefined) return value;
  throw new Error();
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}
