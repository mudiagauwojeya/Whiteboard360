const navButton = document.querySelector(".navigation__bg");
const menuOpenButton = document.querySelector(".navigation__menu");
const menuCloseButton = document.querySelector(".navigation__menu-close");



navButton.addEventListener("click", function (e) {
    menuOpenButton.style.transform = "translateX(0)";
});

menuCloseButton.addEventListener("click", function (e) {
   menuOpenButton.style.transform = "translateX(100%)";
});
