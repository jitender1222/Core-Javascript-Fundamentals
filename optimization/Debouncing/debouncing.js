let count = 0;
const onKeyPress = () => {
  count++;
  console.log("Calling an api", count);
};

// debouncing

const debouncing = (fn, dl) => {
  let store;
  return function () {
    let context = this;
    args = arguments;
    clearInterval(store);
    store = setTimeout(() => {
      fn.apply(context, arguments);
    }, dl);
  };
};

const ondeboucing = debouncing(onKeyPress, 300);
