import showMenu from "./helper.js"
import { CardStore, getUserCards } from "./AppLocalStore.js";
import { ShowDropDown } from "./helper.js";


const form = document.querySelector('form');
const cardNumberInput = document.querySelector('#number');
const cardNameInput = document.querySelector('#name');
const cardExpireInput = document.querySelector('#expire');
const cardSecureInput = document.querySelector('#security');

console.log(cardNameInput)

form.addEventListener('submit', (event) => {
	event.preventDefault()

	const cards = getUserCards()

});
console.log(JSON.parse(localStorage.getItem('user-login')));
CardStore(cardNameInput, cardNumberInput, cardExpireInput, cardSecureInput)

console.log(cardNumberInput)
/**
 * Function Calls import from Helper js
 */

(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown('dropMenu', 'drop-icon');
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


/**
 * Card Script Scope
 */

const showCardForm = (btnId, formId, overlayId) => {
	const cardBtn = document.querySelector(`.${btnId}`);
	const cardForm = document.querySelector(`.${formId}`);
	const overlay = document.querySelector(`.${overlayId}`);

	console.log(cardBtn)
	cardBtn.addEventListener('click', () => {
		cardForm.classList.add('active');
		overlay.classList.replace('hidden', 'active');
	})

	return (closeId) => {
		const closeIcon = document.querySelector(`#${closeId}`);
		closeIcon.addEventListener('click', () => {
			cardForm.classList.remove('active');
			overlay.classList.replace('active', 'hidden');
		})
	}
}

showCardForm('add-card', 'card-form', 'overlay')('close-icon');
