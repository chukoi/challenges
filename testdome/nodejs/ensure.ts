function ensure(value: any) {
  // Your code goes here
  if (value !== undefined) return value;
  throw new Error();
}

try {
  console.log(ensure(undefined));
} catch (err) {
  console.log(err);
}
