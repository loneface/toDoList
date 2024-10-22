let tasks = [];

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    updateTasksList();
  }
};

const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTasksList();
};

const editTask = (index) => {
  const taskInput = document.getElementById("newItem");
  taskInput.value = tasks[index].text;

  tasks.splice(index, 1);
  updateTasksList();
};

const updateTasksList = () => {
  const taskList = document.getElementById("list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
    <div class="taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
            <input type="checkbox" class="checkbox" ${
              task.completed ? "checked" : ""
            }/>
            <p>${task.text}</p>
        </div>
        <div class="icons">
            <img src="/img/edit.png" onClick="editTask(${index})"/>
            <img src="/img/bin.png" onClick="deleteTask(${index})"/>
        </div>
    </div>
    `;
    listItem.addEventListener("change", () => toggleTaskComplete(index));
    taskList.append(listItem);
  });
};

document.getElementById("newItem").addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
