// DOM elements
var buttonEl = document.querySelector('#save-task');
var tasksToDoEl = document.querySelector('#tasks-to-do');

// creates listItems in ul with a new task
var createTaskHandler = function(){ 
var listItemEl = document.createElement('li');
listItemEl.className = 'task-item' ;
listItemEl.textContent ='This is a new task.';
tasksToDoEl.appendChild(listItemEl);
}
//on button click, create a task
buttonEl.addEventListener('click' , createTaskHandler);
