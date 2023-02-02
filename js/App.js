import showMenu from "./helper.js"

/**
 *
 * @param {*} dropId
 * @param {*} dropBtn
 */

const showDropDown = (dropId, dropBtn) => {
  const menu = document.getElementById(`${dropId}`)
  const dropB = document.querySelector(`span.${dropBtn}`)

  dropB.addEventListener('click', () => {
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
  showDropDown('dropMenu', 'drop-icon')
})()

const navLinks = document.querySelectorAll(".nav-item a.nav-link");
function linkAction() {
  navLinks.forEach((n) => n.classList.remove("active-link"));
  this.classList.add("active-link");

  const navMenu = document.querySelector(`.nav-menu-container`);
  navMenu.classList.remove("show");
}
navLinks.forEach((m) => m.addEventListener("click", linkAction));

addEventListener('load', () => {
  document.body.classList.add('loaded')
})


/**
 * Amount and other transaction scopes
 */

const amountInDollar = document.querySelector('.amount-in-dollar');
const amountInNaira = document.querySelector('.amount-in-naira');

const formatDollar = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency'
})

const formatNaira = new Intl.NumberFormat('en-NG', {
  currency: 'NGN',
  style: 'currency'
})

function formatNumber(amountInN, amountInD) {
  let numberInN = formatNaira.format(parseInt(amountInN.innerHTML));
  let numberInD = formatDollar.format(parseInt(amountInD.innerHTML));

  amountInN.innerHTML = numberInN;
  amountInD.innerHTML = numberInD;
}

formatNumber(amountInNaira, amountInDollar)

