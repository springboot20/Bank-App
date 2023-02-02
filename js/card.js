import showMenu, { ShowDropDown, ShowCardForm } from "./helper.js";

const form = document.querySelector('form');
const numberInput = document.querySelector('#number');
const nameInput = document.querySelector('#name');
const expireInput = document.querySelector('#expire-thru');
const secureInput = document.querySelector('#security');


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


	let cardsObj;
	(localStorage.getItem('user-cards') === null) ? cardsObj = [] : cardsObj = JSON.parse(localStorage.getItem('user-cards'));

	let cardsDetail = {
		cardnumber: numberInput.value,
		cardname: nameInput.value,
		cardexpire: expireInput.value,
		cardSecure: secureInput.value
	}

	if (!numberField.classList.contains('error') && !nameField.classList.contains('error') && !expireField.classList.contains('error') && !secureField.classList.contains('error')) {
		cardsObj.push(cardsDetail);
		localStorage.setItem('user-cards', JSON.stringify(cardsObj));
		appendNewCards();
	}
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

addEventListener('load', () => {
	document.body.classList.add('loaded');
});

(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown('dropMenu', 'drop-icon');
	ShowCardForm('add-card', 'card-form', 'over-flow','close-icon');
})();


addEventListener('DOMContentLoaded', () => {
	appendNewCards()
})

const display = document.querySelector('#cards-container');

const appendNewCards = () => {
	let cardsObj;
	if (localStorage.getItem("user-cards") === null) {
		cardsObj = [];
	} else {
		cardsObj = JSON.parse(localStorage.getItem('user-cards'));;
	}
	let output = '';

	cardsObj.forEach(({ cardnumber, cardname, cardexpire }, index) => {
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

		display.innerHTML = output;

		let deleteBtn = display.querySelectorAll('.delete-btn');
		let editBtn = display.querySelectorAll('.edit-btn');

		deleteBtn.forEach((btn) => {
			btn.addEventListener('click', () => {
				handleDelete(index);
				console.log(index)
			});
		})

		editBtn.forEach((btn) => {
			btn.addEventListener('click', () => {
				setTimeout(() => {
					window.location.href = './edit.html'
				}, 2000)
			});
		})
	})

	return cardsObj;
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
	display.innerHTML = "";
	appendNewCards();
}
