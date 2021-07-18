/*=============================================
=            Navbar                           =
=============================================*/
const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", () => {
  menu.classList.add("menu-open");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
/*=====  End of Navbar                 ======*/
