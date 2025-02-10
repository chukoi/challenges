function pipeline(...funcs: any[]) {
  return (arg: any) => {
    // Your code goes here
    return funcs.reduce((acc: any, f: any) => f(acc), arg);
  };
}

let fun = pipeline(
  (x: any) => x * 3,
  (x: any) => x + 1,
  (x: any) => x / 2
);
console.log(fun(3)); // Should print 5
