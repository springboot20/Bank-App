//template
import showMenu, { ShowDropDown } from "./helper.js";


(() => {
	showMenu('open-btn', 'nav-menu-container')('close-icon');
	ShowDropDown('dropMenu', 'drop-icon');
})();

addEventListener('load', () => {
	document.body.classList.add('loaded');
})
