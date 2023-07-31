const input = document.getElementById("input");
const submit = document.getElementById("submit");
let addItem = document.getElementById("addItem");
let addedHere = document.getElementById("addedHere");
let edit = document.getElementById("edit");
let editBox = document.getElementById("editBox");
let editSubmit = document.getElementById("editSubmit");
var selectedTask = null;

// if the input field is empty

submit.addEventListener("click", function () {
  if (input.value === "") {
    alert("Please write somehthing");
  } else {
    // add a new list item

    const newListItem = document.createElement("li");
    newListItem.textContent = input.value;
    addedHere.appendChild(newListItem);
    addedHere.appendChild(editSubmit);
    input.value = "";

    // edit todo button
    var editTodoBtn = document.createElement("button");
    editTodoBtn.appendChild(document.createTextNode("Edit"));
    editTodoBtn.onclick = function () {
      openModal(newListItem);
    };

    var deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.appendChild(document.createTextNode("Delete"));
    deleteTodoBtn.onclick = function () {
      console.log("click");
      newListItem.innerText = "";
      deleteTodoBtn.remove();
    };
  }

  addedHere.appendChild(deleteTodoBtn);
});

// function deleteTodoBtn() {
//   console.log("delete");
// }

// editSubmit.addEventListener("click", function () {
//   console.log("helo");
// });

// function openModal(task) {
//   selectedTask = task;
//   editTaskInput.value = task.firstChild.textContent;
//   editModal.style.display = "block";
// }
