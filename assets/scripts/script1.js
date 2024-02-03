let tasks = [];
 
function addTask() {
  const taskInput = document.getElementById('task');
  const priorityInput = document.getElementById('priority');
 
  const task = taskInput.value.trim();
  const priority = priorityInput.value;
 
  if (task !== "") {
    tasks.push({ task, priority });
    renderTasks();
    taskInput.value = "";
    priorityInput.value = "importante";
  }
}
