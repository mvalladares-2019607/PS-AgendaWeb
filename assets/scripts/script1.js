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
    priorityInput.value = "alta";
  }
}

function editTask(index) {
  const newTask = prompt("Editar tarea:", tasks[index].task);
  if (newTask !== null) {
    tasks[index].task = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index){
  const confirmDelete = confirm("¿Deseas eliminar esta tarea?"); 
  if(confirmDelete){
    tasks.splice(index, 1);
    renderTasks();
  }
}

function renderTasks() {
  const taskListContainer = document.getElementById('task-list');
  taskListContainer.innerHTML = "";

  tasks.sort((a, b) => {
    const priorityOrder = { 'alta': 1, 'baja': 2, 'media': 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  tasks.forEach((task, index) => { 
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskText = document.createElement('input');
    taskText.type = 'text';
    taskText.value = task.task;
    taskText.readOnly = true;

    const priorityText = document.createElement('span');
    priorityText.textContent = `Prioridad: ${task.priority}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editTask(index); 

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => deleteTask(index);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(priorityText);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);
    taskListContainer.appendChild(taskDiv); 
  });
}

renderTasks();