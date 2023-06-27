//  Write a polyfill for a promise

function PromisePolyFill(executor) {
  let onResolve, onReject;

  function resolve(value) {
    onResolve(value);
  }

  function reject(value) {
    onReject(value);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

const examplePolyfill = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve("It will be executed");
  }, 1000);
});

examplePolyfill
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
