const navButton = document.querySelector(".navigation__bg");
const menuOpenButton = document.querySelector(".navigation__menu");
const menuCloseButton = document.querySelector(".navigation__menu-close");
const videoGridContainer = document.querySelector(".studio__grid");
const contactLink = document.getElementById("contact-link");
const copyrightYear = document.querySelector(".footer__copyright span");
const getQuoteBtn = document.querySelectorAll(".quote");

//Modal DOM Elements
const modalTemplate = document.querySelector(".modal__template");
const modal = modalTemplate
	? document.importNode(modalTemplate.content, true)
	: null;
const backdrop = modal ? modal.querySelector(".modal__backdrop") : null;
const modalForm = modal ? modal.querySelector(".modal__form") : null;

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
	if (event.target.nodeName !== "VIDEO" || event.target.tagName !== "VIDEO") {
		return;
	}
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

// add event listener to the video grid container
videoGridContainer.addEventListener("click", videoControl);

// Add functionality to the hamburger menu for smaller screens
if (screen.width < 880) {
	if (!(contactLink === null)) {
		contactLink.addEventListener("click", closeMenuBtn);
	}
}

//Add copyright year to the footer
const d = new Date();
copyrightYear.textContent = `${d.getFullYear()}`;

//Get a quote function
const onGetQuote = (e) => {
	backdrop.style.display = "block";
	document.body.prepend(backdrop);
};

//Close modal function
const onCloseModal = (e) => {
	backdrop.style.display = "none";
};

//Add eventlistener to each get-a-quote button
for (const btn of getQuoteBtn) {
	if (getQuoteBtn) {
		btn.addEventListener("click", onGetQuote);
	}
}
if (backdrop) {
	backdrop.addEventListener("click", onCloseModal);
}
