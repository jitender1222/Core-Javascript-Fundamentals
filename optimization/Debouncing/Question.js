/*

Q1-> Create a button UI and add Debounce as follows => 

          -> show Button Pressed <X> Times every time button is pressed
          -> Increase Triggered <Y> Times count after 800ms of debounce

*/

const increment = document.getElementById("increment_btn");
const btn_pressed = document.getElementById("btn_pressed");
const triggered = document.getElementById("triggered");

let count = 0;
let triggered_count = 0;

const debounce = (fn, dl) => {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, dl);
  };
};

const debounceCount = debounce(() => {
  triggered_count += 1;
  triggered.innerHTML = triggered_count;
}, 800);

const store = increment.addEventListener("click", () => {
  btn_pressed.innerHTML = ++count;

  debounceCount();
});
