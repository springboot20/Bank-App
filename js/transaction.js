import showMenu from "./helper.js"

/**
 *
 * @param {*} dropId
 * @param {*} dropBtn
 */

const showDropDown = (dropId, dropBtn) => {
	const menu = document.getElementById(`${dropId}`);
	const dropB = document.querySelector(`span.${dropBtn}`);

	dropB.addEventListener('click', () => {
		if (dropB.classList.contains('fa-plus')) {
			menu.classList.add('show');
			dropB.classList.replace('fa-plus', 'fa-minus');
		} else {
			menu.classList.remove('show');
			dropB.classList.replace('fa-minus', 'fa-plus');
		}
	});
}

(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	showDropDown('dropMenu', 'drop-icon');
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



class WalletBalance {

	_transactions = []

	showAccountBalance = () => {
		this._transactions.reduce((acc, item) => {
			if (item.type === 'in') {
				return acc + item.amount
			}
			return acc - item.amount

		}, 0)
	}
}
class Account extends WalletBalance {
	static getAccount() {
		let account;
		localStorage.getItem('account') === null ? account = [] : account = JSON.parse(localStorage.getIte('account'));
		return account;
	}

	static addToAccount(amount) {
		const transaction = { amount, date: new Date(), type: 'out' };

		this._transactions.push(transaction);
		//localStorage.setItem('account', JSON.stringify(account));
	}
}
