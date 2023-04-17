// Selecting class elements in html
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

// Applying events to selected elements
toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});
