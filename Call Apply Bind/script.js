// object

const name = {
  firstName: "Jitender",
  secondName: "Singh",
  printFullName: function () {
    console.log(this.firstName + " " + this.secondName);
  },
};

// console.log(this.printFullName());

const name2 = {
  firstName: "Karan",
  secondName: "Singh",
};

// console.log(printFullName);

name.printFullName.call(name2);
