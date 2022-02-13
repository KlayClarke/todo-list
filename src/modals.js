const chestIcon = document.querySelector("#chest");
const chestModal = document.querySelector("#chest-modal");

const closeButton = document.querySelector(".close-button");

function toggleChestModal() {
  chestModal.classList.toggle("show-modal");
}

function windowOnClick(e) {
  if (e.target === chestModal) {
    toggleChestModal();
  }
}

chestIcon.addEventListener("click", toggleChestModal);
closeButton.addEventListener("click", toggleChestModal);
window.addEventListener("click", windowOnClick);
