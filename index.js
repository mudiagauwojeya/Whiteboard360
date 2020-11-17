const navButton = document.querySelector(".navigation__bg");
const menuOpenButton = document.querySelector(".navigation__menu");
const menuCloseButton = document.querySelector(".navigation__menu-close");


//open menu button on mobile
navButton.addEventListener("click", function (e) {
    menuOpenButton.style.transform = "translateX(0)";
});

//close menu button on mobile
menuCloseButton.addEventListener("click", function (e) {
   menuOpenButton.style.transform = "translateX(100%)";
});
