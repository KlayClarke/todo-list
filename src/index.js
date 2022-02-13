import "./modals";
import "./draggable";
import { compareAsc, format } from "date-fns";
import { storageAvailable } from "./storage";

const createTodo = () => {
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

const completeTodo = (id) => {
  if (!localStorage.getItem("projects")) {
    localStorage.setItem("project", JSON.stringify({}));
  }
  // complete todo, but keep it in local until entire project is complete
  // display vis representation of completed todo vs uncompleted todo
};

const updateTodo = (id) => {
  // update todo in local
};

const trashTodo = (id) => {
  // delete todo from local
  delete todo[id];
};

const updateDisplay = () => {
  // check for todos - if none, do nothing
  if (!document.querySelectorAll(".todo")) {
    return;
  } else {
    if (localStorage.getItem("todos")) {
      // parse local storage todos
      let todos = JSON.parse(localStorage.getItem("todos"));
      // for each todo, display them on page
      for (const [key, value] of Object.entries(todos)) {
        let newTodo = document.createElement("div");
        newTodo.draggable = "true";
        newTodo.classList.add("todo");
        newTodo.setAttribute("id", key);
        newTodo.innerText = `${JSON.stringify(value.title)}, ${JSON.stringify(
          value.description
        )}`;
        document.querySelector("#todos").appendChild(newTodo);
      }
    }
  }
};

document.querySelector(".create-todo").addEventListener("click", function () {
  if (
    document.querySelector("input[name='title']").value &&
    document.querySelector("textarea[name='description']").value
  )
    createTodo();
});

// update displayed list of todos after every refresh
updateDisplay();
