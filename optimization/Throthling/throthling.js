let counter = 0;
const eventFire = () => {
  console.log(counter++, "event fire");
};

// throthling
const throthling = (fn, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      fn();
    }
    flag = false;

    setTimeout(() => {
      flag = true;
    }, limit);
  };
};

const throttle = throthling(eventFire, 5000);
