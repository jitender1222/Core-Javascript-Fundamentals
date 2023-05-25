// bind method

const name = {
  firstName: "Jitender",
  lastName: "Singh",
};

const printFullName = function (state, homeTown) {
  console.log(
    this.firstName + " " + this.lastName + " " + state + " " + homeTown
  );
};

const name2 = {
  firstName: "Karan",
  lastName: "Singh",
};

// const getData = printFullName.bind(name2);
// console.log(getData);
// getData();

// our bind method

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let newFunc = printFullName.myBind(name2, "delhi");
newFunc("uttrakhand");
