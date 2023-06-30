const div = document.getElementById("div");
const form = document.getElementById("form");
const button = document.getElementById("button");

// event Propogation

div.addEventListener("click", function () {
  alert("div Triggered");
});

form.addEventListener("click", function () {
  alert("form Triggered");
});

button.addEventListener("click", function () {
  alert("button Triggered");
});

// event target vs this.tagName vs currentTarget

// div.addEventListener("click", func);

// form.addEventListener("click", func);

// button.addEventListener("click", func);

// function func(event) {
//   alert(
//     "Current Target =" +
//       event.currentTarget.tagName +
//       ", target =" +
//       event.target.tagName +
//       ", this =" +
//       this.tagName
//   );
// }
