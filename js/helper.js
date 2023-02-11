//template
/**
 *
 * @param {*} openId
 * @param {*} menuId
 * @returns
 */
const showMenu = (openId, menuId) => {
	const menu = document.querySelector(`.${menuId}`)
	const openBtn = document.querySelector(`#${openId}`)
	const mainMenu = document.querySelector('#menu')

	if (openBtn && menu) {
		openBtn.addEventListener("click", () => {
			menu.classList.add("active");
			mainMenu.classList.add('main-menu')
		})
	}

	return (closeId) => {
		const closeBtn = document.querySelector(`.${closeId}`)
		closeBtn.addEventListener('click', () => {
			menu.classList.remove('active')
		})
	}
}

const ShowDropDown = (dropId, dropBtn) => {
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



function openCardForm(form, overflow) {
	form.classList.remove("hidden");
	overflow.classList.remove("hidden");
}


const ShowCardForm = (btnId, formId, overFlowId, closeId) => {
	const openBtn = document.querySelector(`.${btnId}`);
	const closeBtn = document.querySelector(`.${overFlowId} .${closeId}`);
	const cardForm = document.querySelector(`.${formId}`);
	const overflow = document.querySelector(`.${overFlowId}`);

	openBtn.addEventListener("click", () => {
		openCardForm(cardForm, overflow);

		document.getElementById('save-card-btn').style.display = 'none';
		document.getElementById('add-card-btn').style.display = 'block';

	});

	closeBtn.addEventListener("click", (event) => {
		event.target.parentElement.classList.add('hidden')
		cardForm.classList.add('hidden');
	});
}

export default showMenu
export { ShowDropDown, ShowCardForm }

