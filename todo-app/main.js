// With Local Storage

window.onload = function () {
  displayTask();
};

// Variables

const input = document.querySelector("#item");
const addBtn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear");
let tasks;

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value !== "") {
    addTaskToLS();
    todoList.innerHTML = "";
    displayTask();
  } else {
    alert("Please Enter a Task");
  }
}

// Get Task from local storage

function getTasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}

// Save Task to local storage

function addTaskToLS() {
  getTasks();

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
}

// Display Task on page
function displayTask() {
  getTasks();
  tasks.forEach((task, index) => {
    const newLi = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onClick="deleteTask(this.id)"></i>  `;

    newLi.appendChild(document.createTextNode(task));
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
  });
}

// function delete tasks

function deleteTask(index) {
  const del = confirm("You are about to delete this task!!!");
  if (del == true) {
    getTasks();
  }
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoList.innerHTML = "";

  displayTask();
}

// clear tasks
clearBtn.addEventListener("click", clearTasks);

function clearTasks() {
  const delTasks = confirm("Delete All Task");

  if (delTasks) {
    localStorage.clear();
    todoList.innerHTML = "";

    displayTask();
  }
}
