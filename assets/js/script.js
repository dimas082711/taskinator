// DOM elements
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// creates listItems in ul with a new task
var createTaskHandler = function () {
  // prevent browser to refresh
  event.preventDefault();
  
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};
//on button click, create a task
formEl.addEventListener("submit", createTaskHandler);
