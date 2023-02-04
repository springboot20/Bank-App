import showMenu, { ShowDropDown, ShowCardForm } from "./helper.js";
import { getUserCards, CardStore } from "./AppLocalStore.js";

const form = document.querySelector('form');
const numberInput = document.querySelector('#number');
const nameInput = document.querySelector('#name');
const expireInput = document.querySelector('#expire-thru');
const secureInput = document.querySelector('#security');
const display = document.querySelector('#display-list');

const saveInd = document.getElementById('save-index');
const saveBtn = document.getElementById('save-card-btn');

const numberField = document.querySelector('.card-number');
const nameField = document.querySelector('.card-name');
const expireField = document.querySelector('.expire-thru');
const secureField = document.querySelector('.security-code');

const handleOperation = () => {
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
		CardStore(numberInput, nameInput, expireInput, secureInput);
		setTimeout(() => {
			numberInput.value = '';
			nameInput.value = '';
			expireInput.value = '';
			secureInput.value = '';

			document.querySelector(`.card-form`).classList.add('hidden');
			document.querySelector(`.over-flow`).classList.add('hidden');
		}, 2500)
	}
	appendNewCards();
	document.getElementById('save-card-btn').style.display = 'none';
	document.getElementById('add-card-btn').style.display = 'block';
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	handleOperation();
});

numberInput.addEventListener('keyup', (event) => { handleNumberValidation(event, numberField) });
nameInput.addEventListener('keyup', (event) => { handleNameValidation(event, nameField) });
expireInput.addEventListener('keyup', (event) => { handleExpireThroughValidation(event, expireField) });
secureInput.addEventListener('keyup', (event) => { handleSecureValidation(event, secureField) })


const handleNumberValidation = (event, nField) => {
	let outputValue = event.target.value.replaceAll(' ', '');
	if (event.target.value.value === '') {
		nField.classList.add('error');
		nField.classList.remove('valid');
	} else {
		nField.classList.add('valid');
		nField.classList.remove('error');

		if (event.target.value.length > 14) {
			event.target.value = outputValue.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
		} else if (event.target.value.length > 9) {
			event.target.value = outputValue.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3")
		} else if (event.target.value.length > 4) {
			event.target.value = outputValue.replace(/(\d{4})(\d{0,4})/, "$1 $2")
		}
	}
}

const handleNameValidation = (event, nField) => {
	let pattern = /^[A-Za-z][A-Za-z0-9 ]{7,29}$/
	if (!event.target.value.match(pattern)) {
		nField.classList.add('error');
		nField.classList.remove('valid');

		let errorTxt = nField.querySelector('.error-txt');
		(event.target.value != "") ? errorTxt.textContent = "Card name can only start with an uppercase followed by a lowercase, a digit and a space between" : errorTxt.textContent = "Card name cannot be blanked"

	} else {
		nField.classList.remove('error');
		nField.classList.add('valid');
	}
}

const handleExpireThroughValidation = (event, eField) => {
	let patternInput = event.target.value.replaceAll('/', '');
	if (event.target.value === '') {
		eField.classList.add('error');
		eField.classList.remove('valid');

	} else {
		eField.classList.remove('error');
		eField.classList.add('valid');

		if (event.target.value.length > 2) {
			event.target.value = patternInput.replace(/(\d{2})(\d{0,2})/, "$1/$2");
		}
	}
}

const handleSecureValidation = (event, sField) => {
	let pattern = /^[0-9]{1,10}$/;
	if (!pattern.test(event.target.value)) {
		sField.classList.add('error');
		sField.classList.remove('valid');

		let errorTxt = sField.querySelector('.error-txt');
		(event.target.value != "") ? errorTxt.textContent = "Secure should only contain a maxlength of 10" : errorTxt.textContent = "Secure code cannot be blanked"

	} else {
		sField.classList.add('valid')
		sField.classList.remove('error');
	}
}

(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown('dropMenu', 'drop-icon');
	ShowCardForm('add-card', 'card-form', 'over-flow', 'close-icon');
})();

const appendNewCards = () => {
	let cardsObj = getUserCards();
	cardsObj.forEach(({ cardnumber, cardname, cardexpire }, index) => {
		const row = document.createElement("tr");
		const ind = document.createElement("td");
		const number = document.createElement("td");
		const name = document.createElement("td");
		const expire = document.createElement("td");
		const action = document.createElement("td");
		action.className = 'actions';

		const editBtn = document.createElement("button");
		const deleteBtn = document.createElement("button");

		ind.appendChild(document.createTextNode(`${index}`));
		number.appendChild(document.createTextNode(`${cardnumber}`));
		name.appendChild(document.createTextNode(`${cardname}`));
		expire.appendChild(document.createTextNode(`${cardexpire}`))

		editBtn.innerHTML = `<span class="fas fa-edit edit-icon"></span>`;
		deleteBtn.innerHTML = `<span class="fas fa-trash delete-icon"></span>`;

		action.appendChild(editBtn);
		action.appendChild(deleteBtn);

		row.append(ind);
		row.append(number);
		row.append(name);
		row.append(expire);
		row.append(action);

		display.appendChild(row);

		editBtn.addEventListener('click', () => {
			alert('clicked');
		});

		deleteBtn.addEventListener('click', () => {
			handleDelete(`${index}`);
		})
	});
	console.log(cardsObj)
}

function handleDelete(ind) {
	let cardsObj;
	const del = confirm("Are You sure you want to delete");
	if (del) {
		if (localStorage.getItem("user-cards") === null) {
			cardsObj = [];
		} else {
			cardsObj = JSON.parse(localStorage.getItem("user-cards"));
		}
	}
	cardsObj.splice(ind, 1);
	localStorage.setItem("user-cards", JSON.stringify(cardsObj));
	display.innerHTML = ''
	appendNewCards();
}

function edit(ind) {

}

window.addEventListener('load', () => {
	appendNewCards();
	document.body.classList.add('loaded');
})
