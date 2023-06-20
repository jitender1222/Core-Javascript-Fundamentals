const arr = [1, 2, 3, 4, 5];

// result sum of all numbers -> 15

// arr.reduce((acc,curr,i,arr)=>{},0)  syntax

Array.prototype.myReduce = function (cb, initialvalue) {
  let accumulator = initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const result = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(result);
