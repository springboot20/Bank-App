import { setErrorMessage, setSuccessMessage } from "./helper.js"

const form = document.querySelector('form')
const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const confirmInput = document.querySelector('#confirm-password')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    chekInputsHandler()
})


const chekInputsHandler = () => {
    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confrimValue = confirmInput.value.trim();

    // Function calls
    checkUsernameHandler(usernameValue, usernameInput)
    checkEmailHandler(emailValue, emailInput)
    checkPasswordHandler(passwordValue, passwordInput)
    confirmHandler(confrimValue, passwordValue, confirmInput)
}

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
 * @param {string} usernameValue
 * @param {string} usernameInput
 * @returns
 */
const checkUsernameHandler = (usernameValue, usernameInput) => {
    return (usernameValue === "") ? setErrorMessage(usernameInput, 'Username input cannot be blank') : setSuccessMessage(usernameInput)
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
const confirmHandler = (confrimValue, passwordValue, confirmInput) => {
    if (confrimValue === "") {
        setErrorMessage(confirmInput, 'Confirm password input cannot be blank')
    } else if (confrimValue !== passwordValue) {
        setErrorMessage(confirmInput, 'Check confirm password it is not valid')
    } else {
        setSuccessMessage(confirmInput)
    }
}
