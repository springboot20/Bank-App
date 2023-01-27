import showMenu from "./helper.js"
import { CardStore, getUserCards } from "./AppLocalStore.js";
import { ShowDropDown, ShowCardForm } from "./helper.js";


const form = document.querySelector('form');
const number = document.querySelector('#number');
const name = document.querySelector('#name');
const expire = document.querySelector('#expire');
const secure = document.querySelector('#security');


form.addEventListener('submit', (event) => {
	event.preventDefault()


	CardStore(number, name, expire, secure)
});

/**
 * Function Calls import from Helper js
 */

(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown('dropMenu', 'drop-icon');
	ShowCardForm('add-card', 'card-form', 'overlay')('close-icon');
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


const cards = getUserCards();
const cardContainer = document.querySelector('.cards');
const creditCard = cardContainer.querySelectorAll('.credit-card');
console.log(creditCard)

let result = '';

const appendNewCards = () => {
	cards.forEach((card, index) => {
		result += `
				<div class="credit-card">
					<div class="card-content">
						<img src="./img/chip-1.svg" alt="" class="chip-image">
						<div class="card-details">
							<div class="credit-number">
								<span class="number-label">Credit Number</span>
								<span class="number">${card.number}</span>
							</div>
							<div class="credit-valid">
								<div class="credit-name">
									<span class="name-label">Credit Name</span>
									<span class="name">${card.name}</span>
								</div>
								<div class="card-exp">
									<span class="expire-label">Valid Through</span>
									<span class="expire">${card.expire}</span>
								</div>
							</div>
						</div>
						<img src="img/visa-10.svg" alt="" class="visa-image">
						<img src="img/mastercard-2.svg" alt="" class="master-image">
					</div>
					<div class="edit-buttons">
						<button type="button" id="edit-btn"><span class="fa fa-edit"></span></button>
						<button type="button" class="delete-btn" id="delete-btn"><span class="fa fa-trash-can"></span></button>
					</div>
				</div>
			`;
	})
	cardContainer.innerHTML = result;
}
appendNewCards();
