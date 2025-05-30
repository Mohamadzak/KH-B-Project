const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeBtn = document.getElementById("closeModalBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from submitting normally
  modal.style.display = "flex"; // show modal
  form.reset(); // reset the form fields
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; // hide modal
});
