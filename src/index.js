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

const updateDisplay = () => {
  // parse local storage todos
  // for each todo, display em
};

document.querySelector(".create-todo").addEventListener("click", function () {
  createNewTODO();
});
