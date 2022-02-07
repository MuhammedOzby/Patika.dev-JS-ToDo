# Javascript ile To-Do App uygulaması

Yazmış olduğum uygulama görevleri `tasks` adlı dizide tutar ve oradan yönetir. Yapılan işlemlerin (ekleme/silme) ardından dizi _local storage_ üzerine kaydedilir.

Görevlerin yönetileceği diziyi oluşturma:

```javascript
let tasks = [];
tasks = JSON.parse(
  localStorage.getItem("tasks") ? localStorage.getItem("tasks") : "[]"
);
```

Diziye görevin eklenerek local storage güncellemesi.

```javascript
function addTask() {
  let task = document.getElementById("task").value;
  if (task != "") {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    listTask();
  }
  task = "";
}
```

Bir görevin silinmesi:

```javascript
function deleteTask(id) {
  tasks.splice(id, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  listTask();
}
```

Görev listesinin ekrana verilmesi:

```javascript
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
```
