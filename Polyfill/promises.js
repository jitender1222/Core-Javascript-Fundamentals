//  Write a polyfill for a promise

function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    iscalled = false,
    value;

  console.log("resolveeee");
  function resolve(val) {
    isFullfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      iscalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onResolve === "function") {
      onReject(val);
      iscalled = true;
    }
    onReject(val);
  }

  // resolve
  this.then = function (callback) {
    onResolve = callback;

    if (isFullfilled && !iscalled) {
      iscalled = true;
      onResolve(value);
    }
    return this;
  };

  // reject
  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !iscalled) {
      iscalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// polyfill
const examplePolyfill = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve("It will be executed");
  }, 1000);

  // resolve("2");
});

examplePolyfill
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// polyfill for resolve

PromisePolyFill.resolve = (val) => {
  return new PromisePolyFill(function executor(resolve, reject) {
    resolve(val);
  });
};

// polyfill for reject

PromisePolyFill.reject = (val) => {
  return new PromisePolyFill(function executor(resolve, reject) {
    reject(val);
  });
};
