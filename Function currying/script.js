// const add = (a, b) => {
//   console.log(a + b);
// };

// // function currying with bind

// let sum = add.bind(this, 2, 3);
// console.log(sum());

// function currying with closures

const multiply = (a) => {
  return function (b) {
    console.log(a * b);
  };
};

const ans = multiply(2);
console.log(ans(8));
