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

/***** Call Method ****/

// name.printFullName.call(name2);

// name.printFullName.call(name2, "Delhi", "Uttrakhand");   //Call method with arguements

/***** Apply Method ****/

// name.printFullName.apply(name2, ["delhi", "uttrakhand"]);

/****** Bind Method *****/
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const anotherPerson = {
  name: "Jane",
};

const greetPerson = person.greet.bind(anotherPerson);
console.log(greetPerson); // returns a function

greetPerson();
