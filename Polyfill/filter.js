const arr = [1, 2, 3, 4, 5];

// result number greater then 2

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const result = arr.myFilter((a) => {
  return a > 2;
});

console.log(result);
