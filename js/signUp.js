import LocalStore from "./AppLocalStore.js"
import { setErrorMessage, setSuccessMessage } from "./helper.js"

const form = document.querySelector('form'),
    uField = form.querySelector('.username'),
    usernameInput = document.querySelector('#username'),
    eField = form.querySelector('.email'),
    emailInput = document.querySelector('#email'),
    pField = form.querySelector('.password'),
    passwordInput = document.querySelector('#password'),
    cField = form.querySelector('.confirm-password'),
    confirmInput = document.querySelector('#confirm-password')

console.log(pField)
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmValue = confirmInput.value.trim();



    (usernameInput.value == '') ? uField.classList.add('error') : checkUsernameHandler(usernameValue, usernameInput);
    (emailInput.value == '') ? eField.classList.add('error') : checkEmailHandler(emailValue, emailInput);
    (passwordInput.value == '') ? pField.classList.add('error') : checkPasswordHandler(passwordValue, passwordInput);
    (confirmInput.value == '') ? cField.classList.add('error') : confirmHandler(confirmValue, passwordValue, confirmInput);


    usernameInput.addEventListener('keyup', () => { checkUsernameHandler(usernameValue, usernameInput) })
    emailInput.addEventListener('keyup', () => { checkEmailHandler(emailValue, emailInput) })
    passwordInput.addEventListener('keyup', () => { checkPasswordHandler(passwordValue, passwordInput) })
    confirmInput.addEventListener('keyup', () => { confirmHandler(confirmValue, passwordValue, confirmInput) })
})


/**
 *
 * @param {string} password
 * @returns
 */
const isPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\*]+)(?=.*[a-zA-Z]).{8,16}$/g.test(password)
}

/**
 *
 * @param {string} email
 * @returns
 */
const isEmail = (email) => {
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)
}

/**
 *
 * @param {} username
 * @returns
 */
const isUsername = (username) => {
    return /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username)
}

/**
 *
 * @param {string} usernameValue
 * @param {string} usernameInput
 * @returns
 */
const checkUsernameHandler = (usernameValue, usernameInput) => {
    if (usernameValue === "") {
        setErrorMessage(usernameInput, 'Username input cannot be blank')
    } else if (!isUsername(usernameValue)) {
        setErrorMessage(usernameInput, 'Username must only start an uppercase follow by, a lowercase, digits and  an underscore')
    } else {
        setSuccessMessage(usernameInput)
    }
}

/**
 *
 * @param {string} emailValue
 * @param {string} emailInput
 */
const checkEmailHandler = (emailValue, emailInput) => {
    if (emailValue === "") {
        setErrorMessage(emailInput, 'Email input cannot be blank')
    } else if (!isEmail(emailValue)) {
        setErrorMessage(emailInput, 'Email is not valid')
    } else {
        setSuccessMessage(emailInput)
    }
}

/**
 *
 * @param {string} passwordValue
 * @param {string} passwordInput
 */
const checkPasswordHandler = (passwordValue, passwordInput) => {
    if (passwordValue === "") {
        setErrorMessage(passwordInput, 'Password input cannot be blank')
    } else if (!isPassword(passwordValue)) {
        setErrorMessage(passwordInput, 'Password must contains atleast a special character,a number,a lowercase & a uppercase')
    } else {
        setSuccessMessage(passwordInput)
    }
}

/**
 *
 * @param {string} confrimValue
 * @param {string} passwordValue
 * @param {string} confirmInput
 */
const confirmHandler = (confirmValue, passwordValue, confirmInput) => {
    if (confirmValue === "") {
        setErrorMessage(confirmInput, 'Confirm password input cannot be blank')
    } else if (confirmValue !== passwordValue) {
        setErrorMessage(confirmInput, 'Check confirm password it is not valid')
    } else {
        setSuccessMessage(confirmInput)
    }
}

let regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/g;
let usernameOne = '!Young18';
let usernameTwo = 'Young_109';

let resultOne = regex.test(usernameOne),
    resultTwo = regex.test(usernameTwo);
console.log(resultOne)
console.log(resultTwo)
