const navButton = document.querySelector(".navigation__bg");
const menuOpenButton = document.querySelector(".navigation__menu");
const menuCloseButton = document.querySelector(".navigation__menu-close");
const mediaControls = document.querySelectorAll(".media__file");


//open menu button on mobile
navButton.addEventListener("click", function (e) {
    menuOpenButton.style.transform = "translateX(0)";
});

//close menu button on mobile
menuCloseButton.addEventListener("click", function (e) {
   menuOpenButton.style.transform = "translateX(100%)";
});

//add and remove video controls
function toggleControls() {
    for (i = 0; i < mediaControls.length; i++) {
        if (mediaControls[i].hasAttribute("controls")) {
            mediaControls[i].removeAttribute("controls");
        } else {
            mediaControls[i].setAttribute("controls", "controls");
        }
    }
}

