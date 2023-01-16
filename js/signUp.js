
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

    (usernameValue === "") ? setErrorMessage(usernameInput, 'Username input cannot be blank') : setSuccessMessage(usernameInput)

    if (emailValue === "") {
        setErrorMessage(emailInput, 'Email input cannot be blank')
    } else if (!isEmail(emailValue)) {
        setErrorMessage(emailInput, 'Email is not valid')
    } else {
        setSuccessMessage(emailInput)
    }

    if (passwordValue === "") {
        setErrorMessage(passwordInput, 'Password input cannot be blank')
    } else if (!(isPassword(passwordValue))) {
        setErrorMessage(passwordInput, 'Password must contains atleast a special character,a number,a lowercase & a uppercase')
    } else {
        setSuccessMessage(passwordInput)
    }

    if (confrimValue === "") {
        setErrorMessage(confirmInput, 'Confirm password input cannot be blank')
    } else if (confrimValue !== passwordValue) {
        setErrorMessage(confirmInput, 'Check confirm password it is not valid')
    } else {
        setSuccessMessage(confirmInput)
    }
}

const setErrorMessage = (input, message) => {
    const formField = input.parentElement;
    const small = formField.querySelector('small')

    small.innerText = `${message}`
    formField.className = 'input-container error'
}

const setSuccessMessage = (input) => {
    const formField = input.parentElement;
    formField.className = 'input-container success'
}

const isPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\*]+)(?=.*[a-zA-Z]).{8,16}$/g.test(password)
}

const isEmail = (email) => {
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)
}
