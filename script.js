function openModal(imgSrc, link) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal-link").href = link;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".open-modal").forEach(img => {
    img.addEventListener("click", () => {
      openModal(
        img.getAttribute("data-img"),
        img.getAttribute("data-link")
      );
    });
  });
});