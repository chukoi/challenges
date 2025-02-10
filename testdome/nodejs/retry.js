async function retryRequest(promiseFunc, nrOfRetries) {
  return new Promise((res, rej) => {
    const promise = promiseFunc();
    promise.then(result => {
      // console.log("results", result);
      res(result);
    }).catch(error => {
      rej(false);
      if (nrOfRetries > 0) {
        retryRequest(promiseFunc, nrOfRetries - 1);
      }
    });
  });
}

let failedAttempts = 0;
let attempts = 0;

function getUserInfo() {
  return new Promise((resolve, reject) => {
    if (attempts < failedAttempts) {
      // hasFailed = true;
      attempts++;
      reject('Exception!');
    } else {
      resolve('Fetched user!');
    }
  });
}

let promise = retryRequest(getUserInfo, 3);
if (promise) {
  promise.then((result) => console.log(result))
    .catch((error) => console.log('Error!'));
}
module.exports.retryRequest = retryRequest;
