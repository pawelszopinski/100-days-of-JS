const button = document.querySelector(".btn"),
  modal = document.querySelector(".modal"),
  closeButton = document.querySelector(".close");

const openModal = (e) => {
  e.preventDefault();
  modal.style.display = "block";
};
function closeModal() {
  modal.style.display = "none";
}

button.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modal.addEventListener("mousedown", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
