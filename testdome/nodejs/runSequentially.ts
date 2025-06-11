async function runSequentially(functions: any) {
  return new Promise(async (res, rej) => {
    let results = [];
    for (let i = 0; i < functions.length; i++) {
      try {
        const result = await functions[i]();
        results.push(result);
      } catch (e) {
        rej(e);
      }
    }
    res(results);
  });
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log("Error: " + error));
}
