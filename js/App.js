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
    closeBtn.addEventListener('click', event => {
      event.target.parentElement.classList.remove('active')
    })
  }
}
/**
 * 
 * @param {*} dropId 
 * @param {*} dropBtn 
 * @param {*} dropDown 
 */

const showDropDown = (dropId, dropBtn, dropDown) => {
  const menu = document.getElementById(`${dropId}`)
  const dropB = document.querySelector(`span.${dropBtn}`)
  const dropButton = document.querySelector(`.${dropDown}`)
  console.log(dropB)

  dropButton.addEventListener('click', () => {
    if (dropB.classList.contains('fa-plus')) {
      menu.classList.add('show')
      dropB.classList.replace('fa-plus', 'fa-minus')
    } else {
      menu.classList.remove('show')
      dropB.classList.replace('fa-minus', 'fa-plus')
    }
  })
}

(() => {
  showMenu('open-btn', 'nav-menu-container')('close-icon')
  showDropDown('dropMenu', 'drop-icon', 'dropdown')
})()

const navLinks = document.querySelectorAll(".nav-item a.nav-link");
function linkAction() {
  navLinks.forEach((n) => n.classList.remove("active-link"));
  this.classList.add("active-link");

  const navMenu = document.querySelector(`.nav-menu-container`);
  navMenu.classList.remove("show");
}
navLinks.forEach((m) => m.addEventListener("click", linkAction));
