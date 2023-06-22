// const add = (a, b) => {
//   console.log(a + b);
// };

// // function currying with bind

// let sum = add.bind(this, 2, 3);
// console.log(sum());

// function currying with closures

// const multiply = (a) => {
//   return function (b) {
//     console.log(a * b);
//   };
// };

// const ans = multiply(2);
// console.log(ans(8));

// currying vs Partial Application

// currying is basically depend upon the number of arguement lets say we have 3 arguements so in currying we have to make 3 functions to use those arguements

// Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. The curried function takes the first argument and returns a new function that takes the second argument, and so on, until all arguments are consumed and the final result is returned.

// Example of currying

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

// Partial Application

// Partial Application inside this if we have 3 arguments so we can make 2 functions and do the particular task it did not depend upon the number of arguement

//  Partial application is a technique where you create a new function by fixing (or "partially applying") some of the arguments of an existing function. The new function is specialized and can be called with the remaining arguments later.

// Same example for Partial Application

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// console.log(sum(1)(2, 3));
