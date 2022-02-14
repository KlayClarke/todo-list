document.addEventListener("DOMContentLoaded", () => {
  const todos = document.querySelectorAll(".todo");

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

  const projects = document.querySelectorAll("i");

  icons.forEach((icon) => {
    console.log(icon);
    icon.addEventListener("dragenter", dragEnter);
    icon.addEventListener("dragover", dragOver);
    icon.addEventListener("dragleave", dragLeave);
    icon.addEventListener("drop", drop);
  });

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  function drop(e) {
    e.target.classList.remove("drag-over");

    // get the draggable element
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.querySelector(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove("hide");
  }
});

// want to be able to drag todo into project
// if user drags todo to project, place todo id into projects local sto
// if user drags todo out of project, take todo id out of projects local sto
