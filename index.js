const navButton = document.querySelector(".navigation__bg");
const menuOpenButton = document.querySelector(".navigation__menu");
const menuCloseButton = document.querySelector(".navigation__menu-close");
const videos = document.querySelectorAll(".studio__file");
const contactLink = document.getElementById("contact");

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

//make video fullscreen and play it
const videoControl = (event) => {
	const video = event.target;
	if (!document.fullscreenElement) {
		video.requestFullscreen();
		screen.orientation.lock("landscape-primary").catch((error) => {
			if (error) {
				return;
			}
		});
		video.play();
	}
	video.onfullscreenchange = () => {
		if (!document.fullscreenElement) {
			video.pause();
		}
	};
	video.onended = () => {
		document.exitFullscreen();
	};
};

// add event listeners to video elements
const addVideoListener = () => {
	let i;
	for (i = 0; i < videos.length; i++) {
		videos[i].addEventListener("click", videoControl);
	}
};

addVideoListener();

contactLink.addEventListener("click", closeMenuBtn);
