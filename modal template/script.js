const button = document.querySelector(".btn"),
  modal = document.querySelector(".modal"),
  modalContent = document.querySelector(".modal-content"),
  closeButton = document.querySelector(".close");

const openModal = (e) => {
  e.preventDefault();
  modal.style.display = "block";
};
function closeModal() {
  modalContent.classList.add("slide-up");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}

button.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modal.addEventListener("mousedown", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
