document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const todos = document.querySelectorAll(".todo");

  projects.forEach((project) => {
    project.addEventListener("dragenter", dragEnter);
    project.addEventListener("dragover", dragOver);
    project.addEventListener("dragleave", dragLeave);
    project.addEventListener("drop", drop);
  });

  todos.forEach((todo) => todo.addEventListener("dragstart", dragStart));
  todos.forEach((todo) => todo.addEventListener("dragend", dragEnd));

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  }

  function dragEnd(e) {
    e.target.classList.remove("hide");
  }

  function dragEnter(e) {
    if (!e.target.classList.contains("todo")) {
      e.preventDefault();
      e.target.classList.add("drag-over");
    }
  }

  function dragOver(e) {
    if (!e.target.classList.contains("todo")) {
      e.preventDefault();
      e.target.classList.add("drag-over");
    }
  }

  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  function drop(e) {
    e.target.classList.remove("drag-over");

    // get the draggable element
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    console.log(draggable);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove("hide");

    ///////////////////

    function addTodoToProject() {}
  }
});

// want to be able to drag todo into project
// if user drags todo to project, place todo id into projects local sto
// if user drags todo out of project, take todo id out of projects local sto
