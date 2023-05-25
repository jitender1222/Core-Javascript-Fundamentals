// object

const name = {
  firstName: "Jitender",
  secondName: "Singh",
  printFullName: function (state, homeTown) {
    console.log(
      this.firstName +
        " " +
        this.secondName +
        " " +
        "state" +
        " " +
        state +
        " " +
        "hometown" +
        " " +
        homeTown
    );
  },
};

// console.log(this.printFullName());

const name2 = {
  firstName: "Karan",
  secondName: "Singh",
};

// console.log(printFullName);

name.printFullName.call(name2, "Delhi", "Uttrakhand");

// Call method with arguements
