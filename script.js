let iconHamburger = document.querySelector("#icon-hamburger");
let iconClose = document.querySelector("#icon-close");
let menuMobile = document.querySelector("#menu-mobile");

iconHamburger.addEventListener("click", (e) => {
  e.preventDefault();

  menuMobile.classList.add("slide-down");
  menuMobile.classList.remove("slide-up");
});

iconClose.addEventListener("click", (e) => {
  e.preventDefault();

  menuMobile.classList.add("slide-up");
  menuMobile.classList.remove("slide-down");
});
