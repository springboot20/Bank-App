
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

    if (emailValue === "") {
        setErrorMessage(emailInput, 'Email input cannot be blank')
    } else if (isEmail(emailValue)) {
        setErrorMessage(emailInput, 'Email is not valid')
    } else {
        setSuccessMessage(emailInput)
    }

    if (passwordValue === "") {
        setErrorMessage(passwordInput, 'Password input cannot be blank')
    } else {
        setSuccessMessage(passwordInput)
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


const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))@/.test(email)
}
