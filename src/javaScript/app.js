import "../sass/app.scss";
const header = document.querySelector(".header");
const hamburger = header.querySelector(".header .hamburger");
hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});
