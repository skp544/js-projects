// Without Local Storage

// Variables

const input = document.querySelector("#item");
const addBtn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear");

// ADD LIST ITEM

const addTask = (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");

  const delBtn = document.createElement("button");

  delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  if (input.value !== "") {
    newLi.textContent = input.value;

    newLi.appendChild(delBtn);

    todoList.appendChild(newLi);

    input.value = "";
  } else {
    alert("Please Enter a Task");
  }

  // Delete ITEM

  delBtn.addEventListener("click", function () {
    const del = confirm("You are about to delete this task!!!");
    if (del == true) {
      const parent = this.parentNode;
      parent.remove();
    }
  });
};

addBtn.addEventListener("click", addTask);

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todoList.innerHTML = "";
});
