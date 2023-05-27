// Q1 give me a sum of sum(1)(2)(3)(4) ..... () -> 10

// const sum = (a) => {
//   return (b) => {
//     if (b !== undefined) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

// console.log(sum(1)(2)(0)(4)());

const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;
console.log(sum(1)(2)(0)(4)());
