// call method

const name = {
  firstName: "Jitender",
  lastName: "Singh",
};

const printFullName = function (age, num) {
  console.log(this.firstName + " " + this.lastName + " " + age + " " + num);
};

const name2 = {
  firstName: "Karan",
  lastName: "Singh",
};

// printFullName.call(name2, "delhi");

// our call method

// Function.prototype.myCall = function (obj, ...args) {
//   let obj1 = this;
//   obj.obj1 = obj1;
//   obj.obj1(...args);
// };

// printFullName.myCall(name2);

// apply method

// printFullName.apply(name2);

// our apply method

Function.prototype.myapply = function (obj, args) {
  let obj1 = this;
  obj.obj1 = obj1;
  obj.obj1(...args);
};

printFullName.myapply(name2, ["100", "9823"]);
