const navButton = document.querySelector(".navigation__bg");
const menuOpenButton = document.querySelector(".navigation__menu");
const menuCloseButton = document.querySelector(".navigation__menu-close");
const mediaControls = document.querySelectorAll(".media__file");
const contactLink = document.querySelector("a[href='#contact']");

//open menu button on mobile
const openMenuBtn = () => {
	menuOpenButton.style.transform = "translateX(0)";
};
navButton.addEventListener("click", openMenuBtn);

//close menu button on mobile
const closeMenuBtn = () => {
	menuOpenButton.style.transform = "translateX(100%)";
};
menuCloseButton.addEventListener("click", closeMenuBtn);

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

contactLink.addEventListener("click", closeMenuBtn);
