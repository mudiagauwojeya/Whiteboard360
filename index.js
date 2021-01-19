const navButton = document.querySelector(".navigation__bg");
const menuOpenButton = document.querySelector(".navigation__menu");
const menuCloseButton = document.querySelector(".navigation__menu-close");
const videos = document.querySelectorAll(".studio__file");
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

//disable video controls on page load
const disableControls = () => {
	let i;
	for (i = 0; i < videos.length; i++) {
		if (videos[i].hasAttribute("controls")) {
			videos[i].removeAttribute("controls");
		}
	}
};

videos.onload = disableControls();

contactLink.addEventListener("click", closeMenuBtn);
