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

// create two new local storage instances - chest and trash

// if user places todo in chest / trash, append div to chest / trash modal and update local storage ---

/////////////// take todo out of regular storage and place it into appropriate instance
