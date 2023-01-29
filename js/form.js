import showMenu, { ShowDropDown } from "./helper.js";
import { CardStore } from "./AppLocalStore.js";

const form = document.querySelector(' form');
const numberInput = document.querySelector('#number');
const nameInput = document.querySelector('#name');
const expireInput = document.querySelector('#expire');
const secureInput = document.querySelector('#security');

const numberField = document.querySelector('.card-number');
const nameField = document.querySelector('.card-name');
const expireField = document.querySelector('.expire');
const secureField = document.querySelector('.security-code');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	(numberInput.value === '') ? numberField.classList.add('shake', 'error') : (event) => { handleNumberValidation(event, numberField) };
	(nameInput.value === '') ? nameField.classList.add('shake', 'error') : (event) => { handleNameValidation(event, nameField) };
	(expireInput.value === '') ? expireField.classList.add('shake', 'error') : (event) => { handleNumberValidation(event, expireField) };
	(secureInput.value === '') ? secureField.classList.add('shake', 'error') : (event) => { handleSecureValidation(event, secureField) };

	CardStore(numberInput, nameInput, expireInput, secureInput);

	setTimeout(() => {
		numberField.classList.remove('shake');
		nameField.classList.remove('shake');
		expireField.classList.remove('shake');
		secureField.classList.remove('shake');
	}, 2500);

	numberInput.addEventListener('keyup', (event) => { handleNumberValidation(event, numberField) });
	nameInput.addEventListener('keyup', (event) => { handleNameValidation(event, nameField) });
	expireInput.addEventListener('keyup', (event) => { handleNumberValidation(event, expireField) });
	secureInput.addEventListener('keyup', (event) => { handleSecureValidation(event, secureField) })
})


addEventListener('load', () => {
	document.body.classList.add('loaded');
});

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

const handleNumberValidation = (event, nField) => {
	let outputValue = event.target.value.replaceAll(' ', ' ');
	if (event.target.value.value === '') {
		nField.classList.add('error');
		nField.classList.remove('valid');
	} else {
		nField.classList.add('valid');
		nField.classList.remove('error');

		if (event.target.value > 14) {
			event.target.value = outputValue.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
		} else if (event.target.value > 9) {
			event.target.value = outputValue.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3")
		} else if (event.target.value > 9) {
			event.target.value = outputValue.replace(/(\d{4})(\d{0,4})/, "$1 $2")
		}
	}
}

const handleNameValidation = (event, nField) => {
	let pattern = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
	if (!event.target.value.match(pattern)) {
		nField.classList.add('error');
		nField.classList.remove('valid');

		let errorTxt = nField.querySelector('.error-txt');
		(event.target.value != "") ? errorTxt.textContent = "Username can only start with an Uppercase followed by a Lowercase, a digit and Underscore" : errorTxt.textContent = "Card name cannot be blanked"

	} else {
		nField.classList.remove('error');
		nField.classList.add('valid');
	}
}

const handleExpireThroughValidation = (event, eField) => {

}

const handleSecureValidation = (event, sField) => {

}
