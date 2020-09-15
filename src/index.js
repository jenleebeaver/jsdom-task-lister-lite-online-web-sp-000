//GOALS:
// click submit event on <form> element
// use preventDefault() method


// DOMContentLoaded is used to make sure our code waits for page to run
document.addEventListener("DOMContentLoaded", () => {

    //grabbing form and input field
    const newTaskForm = document.getElementById("create-task-form")
    const newTaskDescription = document.getElementById("new-task-description")
    const newTaskPriority = document.getElementById("new-task-priority")

    //ul of new tasks
    const newTaskUl = document.getElementById("tasks")

    //initialize taskList
    const taskList = new TaskList();

    //attaching event listener
    newTaskForm.addEventListener("submit", createNewTask)

    //delete event
    newTaskUl.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON"){
        taskList.deleteTask(e.target.dataset.description);
        newTaskUl.innerHTML = taskList.renderTasks();
      }
    });
});

const createNewTask = event => {
  event.preventDefault()
  //using preventDefault to stop form from submitting before task is logged
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li")
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset()
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
