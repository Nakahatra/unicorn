let burgerIcon = document.querySelector(".navbar-rightcol-burger");
let closeIcon = document.querySelector(".navbar-rightcol-close");
closeIcon.style.display = "none";
let navLinksUL = document.querySelector(".nav-bar .nav-links");

burgerIcon.addEventListener("click", () => {
  closeIcon.style.display = "block";
  burgerIcon.style.display = "none";
  navLinksUL.classList.add("active");
});
closeIcon.addEventListener("click", () => {
  burgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  navLinksUL.classList.remove("active");
});