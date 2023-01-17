import { setErrorMessage, setSuccessMessage } from "./helper.js"

const form = document.querySelector('form')
const emailInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    chekInputsHandler()
})


const chekInputsHandler = () => {
    const emailValue = emailInput.value.trim()
    const passwordValue = passwordInput.value.trim()

    // Function Calls
    checkEmailHandler(emailValue, emailInput)
    checkPasswordHandler(passwordValue, passwordInput)
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
