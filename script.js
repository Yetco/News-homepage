const hamburgerMenu = document.querySelector(".hamburger-menu");
const hide = document.querySelector(".hide");
const navExpand = document.querySelector(".nav-expand");

document.addEventListener("DOMContentLoaded", () => {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM
  navExpand.style.display = "none";
});

hamburgerMenu.addEventListener("click", () => {
  /* Make the body opacity color a see-through black color */
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  hamburgerMenu.style.display = "none";
  hide.classList.remove("hide");
  navExpand.style.display = "block";
  //   navExpand.style.display = "block";
  navExpand.classList.add("show"); // Toggle class to show the menu
});

const closeMenu = document.querySelector("#close-menu");

closeMenu.addEventListener("click", () => {
  // Switch the body opacity color back to normal
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
  hide.classList.add("hide");
  navExpand.style.display = "none";
  navExpand.classList.remove("show"); // Toggle class to show the menu
  //   navExpand.style.display = "none";
  hamburgerMenu.style.display = "block";
});
