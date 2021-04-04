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
const modalContent = modal ? modal.querySelector(".modal__content") : null;
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
videoGridContainer
	? videoGridContainer.addEventListener("click", videoControl)
	: null;

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
	modalContent.style.display = "block";
	document.documentElement.scrollTo({ top: 180, behavior: "smooth" });
	document.body.append(backdrop);
	document.body.append(modalContent);
};

//Close modal function
const onCloseModal = (e) => {
	modalContent.style.display = "none";
	backdrop.style.display = "none";
};

//Add eventlistener to each get-a-quote button
if (getQuoteBtn) {
	for (const btn of getQuoteBtn) {
		btn.addEventListener("click", onGetQuote);
	}
}
if (backdrop) {
	backdrop.addEventListener("click", onCloseModal);
}

//modal form interactivity
modalForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let errorMessage;
	let errorEl;
	if (e.submitter.innerText === "CANCEL") {
		onCloseModal();
		return;
	}
	if (
		modalForm.name.value.length === 0 &&
		modalForm.name.value.trim() === ""
	) {
		errorMessage = "Please, enter your names to proceed";
		errorEl = modalForm.querySelector("#nameError");
		errorEl.textContent = errorMessage;
		return;
	}
	if (
		modalForm.email.value.length === 0 &&
		modalForm.email.value.trim() === ""
	) {
		console.log("Cannot be empty");
		return;
	}
	if (
		modalForm.phone.value.length === 0 &&
		modalForm.phone.value.trim() === ""
	) {
		console.log("Cannot be empty");
		return;
	}
	const formData = {
		project: modalForm.project.value.trim(),
		name: modalForm.name.value.trim(),
		email: modalForm.email.value.trim(),
		tel: modalForm.phone.value.trim(),
	};
	modalForm.reset();
	console.log(formData);
});

//Intersection observer section
document.addEventListener("DOMContentLoaded", () => {
	const options = {
		root: null,
		rootMargin: "0px 0px -5px",
		threshold: 0.01,
	};
	const slideIn = (elements) => {
		for (const element of elements) {
			if (element.isIntersecting) {
				element.target.classList.add("slideIn");
			} else {
				element.target.classList.remove("slideIn");
			}
		}
	};

	const observer = new IntersectionObserver(slideIn, options);
	const observedEl = document.getElementsByClassName("observe");
	for (const element of observedEl) {
		observer.observe(element);
	}
});
