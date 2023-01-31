import { handleNumberValidation, handleNameValidation, handleExpireThroughValidation, handleSecureValidation } from './form.js'
import { CardStore } from './AppLocalStore.js';
const form = document.querySelector('form');
const numberInput = document.querySelector('#number');
const nameInput = document.querySelector('#name');
const expireInput = document.querySelector('#expire');
const secureInput = document.querySelector('#security');

const numberField = document.querySelector('.card-number');
const nameField = document.querySelector('.card-name');
const expireField = document.querySelector('.expire');
const secureField = document.querySelector('.security-code');

const editBtn = document.querySelector('.edit-btn');
const saveBtn = document.querySelector('.save-btn');



const editCards = (number, name, expire, secure) => {
	numberInput.value = number
	nameInput.value = name
	expireInput.value = expire
	secureInput.value = secure
}

saveBtn.addEventListener('click', () => {
	(numberInput.value === '') ? numberField.classList.add('shake', 'error') : (event) => { handleNumberValidation(event, numberField) };
	(nameInput.value === '') ? nameField.classList.add('shake', 'error') : (event) => { handleNameValidation(event, nameField) };
	(expireInput.value === '') ? expireField.classList.add('shake', 'error') : (event) => { handleExpireThroughValidation(event, expireField) };
	(secureInput.value === '') ? secureField.classList.add('shake', 'error') : (event) => { handleSecureValidation(event, secureField) };


	setTimeout(() => {
		numberField.classList.remove('shake');
		nameField.classList.remove('shake');
		expireField.classList.remove('shake');
		secureField.classList.remove('shake');
	}, 2500);

	if (!numberField.classList.contains('error') && !nameField.classList.contains('error') && !expireField.classList.contains('error') && !secureField.classList.contains('error')) {
		setTimeout(() => {
			window.location.href = form.getAttribute('action')
		}, 4500);
		CardStore(numberInput, nameInput, expireInput, secureInput);
		setTimeout(() => {
			window.location.href = form.getAttribute('action')
		}, 1000)
	}

});

numberInput.addEventListener('keyup', (event) => { handleNumberValidation(event, numberField) });
nameInput.addEventListener('keyup', (event) => { handleNameValidation(event, nameField) });
expireInput.addEventListener('keyup', (event) => { handleExpireThroughValidation(event, expireField) });
secureInput.addEventListener('keyup', (event) => { handleSecureValidation(event, secureField) })

editBtn.addEventListener('click', () => {
	let cards = JSON.parse(localStorage.getItem('user-cards'));
	console.log(cards)
	cards.map(({ cardnumber, cardname, cardexpire, cardSecure }, index) => {
		editCards(cardnumber, cardname, cardexpire, cardSecure);
		cards.splice(index, 1);
		console.log(cards.splice(index, 1));
	});
	localStorage.setItem('user-cards', JSON.stringify(cards));
})

addEventListener('load', () => {
	document.body.classList.add('loaded');
});
