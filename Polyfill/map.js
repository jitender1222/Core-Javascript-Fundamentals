const arr = [1, 2, 3, 4];

//  result -> arr[3,6,9,12]

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const result = arr.myMap((arr) => {
  return arr * 3;
});

console.log(result);
