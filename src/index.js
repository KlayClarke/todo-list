import { compareAsc, format } from "date-fns";
import { storageAvailable } from "./storage";

if (storageAvailable("localStorage") && !localStorage.getItem("data")) {
  // populate data on page
} else {
  // create new data object and store it empty
}

document.querySelector(".create-todo").addEventListener("click", function () {
  if (storageAvailable("localStorage")) createNewTODO();
});

const createNewTODO = () => {
  // create new todo in local storage db
  // assign new todo to a project (if no project, simply to main)
  // give todo description entered by user
  // give todo duedate entered by user
  // give todo priority entered by user
  if (document.querySelector("input[name='title']").value) {
    console.log("nice name");
    let todo = {
      id: Date.now(),
      title: document.querySelector("input[name='title']").value,
      description: document.querySelector("textarea[name='description']").value,
    };
    console.log(todo);
  } else {
    console.log("Please name your todo!");
  }
};

// const changeTODOPriority = (todoID) => {
//   // allow user to change priority of certain todo by clicking on option symbol, and change priority option
//   // provide options for change and append changes to local storage db
// };

// const setTODOAsComplete = (todoID) => {
//   // allow user to set certain todo as complete by clicking on a check box
//   // store 100 most recent completed todos in local storage
// };

// const createNewProject = (name) => {
//   // allow user to create new project by entering a project name
// };

// const addTODOToProject = (todoID, projectID) => {
//   // allow user to append a previously created todo to a project of their choosing
// };
