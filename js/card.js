import { getUserCards } from "./AppLocalStore.js";
import showMenu, { ShowDropDown, ShowCardForm, handleDelete } from "./helper.js";

(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown('dropMenu', 'drop-icon');
	ShowCardForm('add-card');
	setTimeout(() => appendNewCards(), 4000);
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

const cardContainer = document.querySelector('.cards');
const appendNewCards = () => {
	let cards = getUserCards();
	let output = '';

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
			let deleteBtn = card.querySelectorAll('.delete-btn');
			let editBtn = card.querySelectorAll('.edit-btn')

			deleteBtn.forEach((btn) => {
				btn.addEventListener('click', () => {
					handleDelete(index, cards);
					appendNewCards();
				});
			});

			editBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					console.log(index)
					setTimeout(() => {
						window.location.href = './edit.html'
					}, 2000)
				})
			});
		});
	});
}
