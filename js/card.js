import showMenu, { ShowDropDown, ShowCardForm } from "./helper.js";
import { getUserCards } from './AppLocalStore.js'
(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown('dropMenu', 'drop-icon');
	ShowCardForm('add-card');
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

addEventListener('DOMContentLoaded', () => {
	appendNewCards()
})
const cardContainer = document.querySelector('.cards');

const appendNewCards = () => {
	let cards = getUserCards();
	let output = '';
	console.log(cards)
	cards.forEach(({ cardnumber, cardname, cardexpire }, index) => {
		output += `
		<div class="credit-card">
			<div class="card-content">
				<img src="./img/chip-1.svg" alt="" class="chip-image">
				<div class="card-details">
					<div class="credit-number">
						<span class="number-label">Credit Number</span>
						<span class="number">${cardnumber}</span>
					</div>
					<div class="credit-valid">
						<div class="credit-name">
							<span class="name-label">Credit Name</span>
							<span class="name">${cardname}</span>
						</div>
						<div class="card-exp">
							<span class="expire-label">Valid Through</span>
							<span class="expire">${cardexpire}</span>
						</div>
					</div>
				</div>
				<img src="img/visa-10.svg" alt="" class="visa-image">
				<img src="img/mastercard-2.svg" alt="" class="master-image">
			</div>
			<div class="edit-buttons">
				<button type="button" id="edit-btn" class="edit-btn"><span class="fa fa-edit"></span></button>
				<button type="button" id="delete-btn" class="delete-btn"><span class="fa fa-trash-can"></span></button>
			</div>
		</div>
		`;

		cardContainer.innerHTML = output;

		let creditCards = cardContainer.querySelectorAll('.credit-card');
		creditCards.forEach((card) => {
			let deleteBtn = card.querySelector('.delete-btn');
			let editBtn = card.querySelector('.edit-btn')

			deleteBtn.addEventListener('click', () => {
				handleDelete(index)
			});

			editBtn.addEventListener('click', () => {
				console.log(cards)
				setTimeout(() => {
					window.location.href = './edit.html'
				}, 2000)
			});
		});
	});
}

function handleDelete(ind) {
	let cards = getUserCards();
	cards.splice(ind);
	localStorage.setItem('user-cards', JSON.stringify(cards));
	appendNewCards();
}

export default appendNewCards
