import showMenu, { ShowDropDown } from "./helper.js";

addEventListener('load', () => {
	document.body.classList.add('loaded');
});

(() => {
	showMenu ('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown ('dropMenu', 'drop-icon');
	})();

const navLinks = document.querySelectorAll(".nav-item a.nav-link");
function linkAction() {
	navLinks.forEach((n) => n.classList.remove("active-link"));
	this.classList.add("active-link");

	const navMenu = document.querySelector(`.nav-menu-container`);
	navMenu.classList.remove("show");
}
navLinks.forEach((m) => m.addEventListener("click", linkAction));

addEventListener('load', () => {
	document.body.classList.add('loaded');
});
