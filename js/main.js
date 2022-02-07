let tasks = [];
let addTaskButtons = document.getElementById("addTask");
let task = document.getElementById("task").value;

tasks = JSON.parse(
  localStorage.getItem("tasks") ? localStorage.getItem("tasks") : "[]"
);

function addTask() {
  let task = document.getElementById("task").value;
  if (task != "") {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    listTask();
  }
  task = "";
}

function deleteTask(id) {
  tasks.splice(id, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  listTask();
}

function listTask() {
  let list = document.getElementById("taskList");
  list.innerHTML = `<p class="panel-heading">
      Tasks
    </p>`;
  tasks.forEach((item, id) => {
    list.innerHTML =
      list.innerHTML +
      `
      <p class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        ${id + 1}) ${item} <a class="delete" onclick="deleteTask(${id})">SİL</a>
      </p>`;
  });
}

(function () {
  listTask();
})();
