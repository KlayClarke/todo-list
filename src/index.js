import { compareAsc, format } from "date-fns";
import { storageAvailable } from "./storage";

const createNewTODO = () => {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify({}));
  }
  let id = Date.now();
  let todo = {
    [id]: {
      title: document.querySelector("input[name='title']").value,
      description: document.querySelector("textarea[name='description']").value,
    },
  };
  let todos = JSON.parse(localStorage.getItem("todos"));
  let newTodos = Object.assign(todos, todo);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

const editTODO = () => {
  // edit todo (delete todo and create another with same id)
};

const deleteTODO = () => {
  // delete todo
};

const updateDisplay = () => {
  // parse local storage todos
  let todos = JSON.parse(localStorage.getItem("todos"));
  // for each todo, display them on page
  for (const [key, value] of Object.entries(todos)) {
    let newTodo = document.createElement("div");
    newTodo.draggable = "true";
    newTodo.classList.add("todo");
    newTodo.innerText = `${JSON.stringify(value.title)}, ${JSON.stringify(
      value.description
    )}`;
    document.querySelector("#todos").appendChild(newTodo);
  }
};

document.querySelector(".create-todo").addEventListener("click", function () {
  if (
    document.querySelector("input[name='title']").value &&
    document.querySelector("textarea[name='description']").value
  )
    createNewTODO();
});

updateDisplay();
