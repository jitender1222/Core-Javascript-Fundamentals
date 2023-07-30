const input = document.getElementById("input");
const submit = document.getElementById("submit");
let addItem = document.getElementById("addItem");
let addedHere = document.getElementById("addedHere");
let edit = document.getElementById("edit");

// if the input field is empty

submit.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please write somehthing");
  } else {
    const newListItem = document.createElement("li");
    const edit = document.createElement("button");
    edit.id = "edit";
    edit.innerText = "Edit";

    newListItem.textContent = input.value;
    addedHere.appendChild(newListItem);
    addedHere.appendChild(edit);
    input.value = "";
  }
});

addedHere.addEventListener("click", function (event) {
  if (event.target.id === "edit") {
    input.innerHtml = addedHere.innerText;
    // addedHere.innerText = "";
  }
});

// submit.onclick(() => {
//   if (input.length === 0) {
//     alert("please add something");
//   }
// });
