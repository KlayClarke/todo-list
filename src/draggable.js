// document.addEventListener("DOMContentLoaded", () => {
//   const todos = document.querySelectorAll(".todo");

//   todos.forEach((todo) => todo.addEventListener("dragstart", dragStart));
//   todos.forEach((todo) => todo.addEventListener("dragend", dragEnd));

//   function dragStart(e) {
//     e.dataTransfer.setData("text/plain", e.target.id);
//     setTimeout(() => {
//       e.target.classList.add("hide");
//     }, 0);
//   }

//   function dragEnd(e) {
//     e.target.classList.remove("hide");
//   }

//   const icons = document.querySelectorAll("i");

//   icons.forEach((icon) => {
//     console.log(icon);
//     icon.addEventListener("dragenter", dragEnter);
//     icon.addEventListener("dragover", dragOver);
//     icon.addEventListener("dragleave", dragLeave);
//     icon.addEventListener("drop", drop);
//   });

//   function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add("drag-over");
//   }

//   function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add("drag-over");
//   }

//   function dragLeave(e) {
//     e.target.classList.remove("drag-over");
//   }

//   function drop(e) {
//     e.target.classList.remove("drag-over");

//     // get the draggable element
//     const id = e.dataTransfer.getData("text/plain");
//     const draggable = document.querySelector(id);

//     // add it to the drop target
//     e.target.appendChild(draggable);

//     // display the draggable element
//     draggable.classList.remove("hide");
//   }
// });

// // must connect each icon to modals in html
// // when hover, open modal??
// // allow user to drag and drop todo in each modal
// // if user drags todo to chest, mark todo as complete (put in complete object in localstorage)
// // if user drags todo to trash, mark todo as trash (put in trash object in localstorage)

// // allow user to view these,
// // have a button where user can clear both
