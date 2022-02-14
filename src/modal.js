const chestIcon = document.querySelector("#chest");
const chestModal = document.querySelector("#chest-modal");
const closeButton = document.querySelector(".close-button");

function windowOnClick(e) {
  if (e.target === chestModal) {
    toggleChestModal();
  }
}

function toggleChestModal() {
  chestModal.classList.toggle("show-modal");
}

chestIcon.addEventListener("click", toggleChestModal);
closeButton.addEventListener("click", toggleChestModal);
window.addEventListener("click", windowOnClick);

//

const projectForm = document.querySelector(".project-form");
const todoForm = document.querySelector(".todo-form");
const formToggleButton = document.querySelector(".form-toggle");

function toggleForm() {
  if (projectForm.classList.contains("hide-form")) {
    formToggleButton.innerText = "Add Todo";
    todoForm.classList.add("hide-form");
    projectForm.classList.remove("hide-form");
  } else {
    formToggleButton.innerText = "Add Project";
    todoForm.classList.remove("hide-form");
    projectForm.classList.add("hide-form");
  }
}

formToggleButton.addEventListener("click", toggleForm);
