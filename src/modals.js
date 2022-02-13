const chestIcon = document.querySelector("#chest");
const chestModal = document.querySelector("#chest-modal");
const trashIcon = document.querySelector("#trash");
const trashModal = document.querySelector("#trash-modal");
const closeButtons = document.querySelectorAll(".close-button");

function windowOnClick(e) {
  if (e.target === chestModal) {
    toggleChestModal();
  } else if (e.target === trashModal) {
    toggleTrashModal();
  }
}

function toggleChestModal() {
  chestModal.classList.toggle("show-modal");
}

function toggleTrashModal() {
  trashModal.classList.toggle("show-modal");
}

closeButtons.forEach((closeButton) => {
  if (closeButton.classList.contains("for-chest")) {
    closeButton.addEventListener("click", toggleChestModal);
  } else {
    closeButton.addEventListener("click", toggleTrashModal);
  }
});

chestIcon.addEventListener("click", toggleChestModal);
trashIcon.addEventListener("click", toggleTrashModal);
window.addEventListener("click", windowOnClick);
