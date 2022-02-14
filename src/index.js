import "./modal";
import "./draggable";
import { compareAsc, format } from "date-fns";
import { storageAvailable } from "./storage";

const createProject = () => {
  if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", JSON.stringify({}));
  }
  let id = Date.now();
  let project = {
    [id]: {
      title: document.querySelector("input[name='project-title']").value,
      todos: [],
    },
  };
  let projects = JSON.parse(localStorage.getItem("projects"));
  let newProjects = Object.assign(projects, project);
  localStorage.setItem("projects", JSON.stringify(newProjects));
};

const createTodo = () => {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify({}));
  }
  let id = Date.now();
  let todo = {
    [id]: {
      title: document.querySelector("input[name='todo-title']").value,
      description: document.querySelector("textarea[name='todo-description']")
        .value,
    },
  };
  let todos = JSON.parse(localStorage.getItem("todos"));
  let newTodos = Object.assign(todos, todo);
  localStorage.setItem("todos", JSON.stringify(newTodos));
};

// const completeTodo = (id) => {
//   if (!localStorage.getItem("projects")) {
//     localStorage.setItem("project", JSON.stringify({}));
//   }
//   // complete todo, but keep it in local until entire project is complete
//   // display vis representation of completed todo vs uncompleted todo
// };

// const updateTodo = (id) => {
//   // update todo in local
// };

// const trashTodo = (id) => {
//   // delete todo from local
//   delete todo[id];
// };

const updateDisplay = () => {
  displayProjects();
  displayTodos();
};

function displayProjects() {
  if (localStorage.getItem("projects")) {
    let projects = JSON.parse(localStorage.getItem("projects"));
    for (const [key, value] of Object.entries(projects)) {
      console.log(key, value);
      let newProject = document.createElement("div");
      newProject.classList.add("project");
      newProject.innerText = value.title;
      document.querySelector("#projects").appendChild(newProject);
    }
  }
}

function displayTodos() {
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
}

// to create projects - only if title field is populated

document
  .querySelector(".project-create-button")
  .addEventListener("click", function () {
    if (document.querySelector("input[name='project-title']").value)
      createProject();
  });

// to create todos - only if title field and description field are populated

document
  .querySelector(".todo-create-button")
  .addEventListener("click", function () {
    if (
      document.querySelector("input[name='todo-title']").value &&
      document.querySelector("textarea[name='todo-description']").value
    )
      createTodo();
  });

// update displayed list of todos after every refresh
updateDisplay();
