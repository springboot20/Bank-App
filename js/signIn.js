import { getUsers } from "./AppLocalStore.js";

const form = document.querySelector('form')
const email = document.querySelector('#username')
const password = document.querySelector('#password')
const signButton = form.querySelector('button');

const eField = document.querySelector('.email');
const pField = document.querySelector('.password');

let users = getUsers();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    (email.value == '') ? eField.classList.add('shake', 'error') : checkEmailHandler(eField);
    (password.value == '') ? pField.classList.add('shake', 'error') : checkPasswordHandler(pField);

    setTimeout(() => {
        eField.classList.remove('shake', 'error');
        pField.classList.remove('shake', 'error');
    }, 1500);

    email.addEventListener('keyup', () => { checkEmailHandler(eField) });
    password.addEventListener('keyup', () => { checkPasswordHandler(pField) });

    if (!(eField.classList.contains('error')) && !(pField.classList.contains('error'))) {

        const span = document.createElement('span')
        span.className = 'loader';
        signButton.textContent = `Signing In..........`;
        signButton.disabled = true;
        signButton.append(span);
        setTimeout(() => window.location.href = form.getAttribute('action'), 4500);
    }
})

/**
 *
 * @param {*} emailField
 */
const checkEmailHandler = (emailField) => {
    let emailExist = users.some((user) => (user.userEmail === email.value));
    if (!emailExist) {
        emailField.classList.add('error');
        emailField.classList.remove('valid');

        let errorTxt = emailField.querySelector('.error-txt');
        (email.value != "") ? errorTxt.textContent = "User email does not exist" : errorTxt.textContent = "Email cannot be blanked"
    } else {
        console.log(emailExist)
        emailField.classList.remove('error');
        emailField.classList.add('valid');
    }
}

/**
 *
 * @param {*} passField
 */
const checkPasswordHandler = (passField) => {
    let passwordExist = users.some((user) => (user.userPassword === password.value));
    if (!passwordExist) {
        passField.classList.add('error');
        passField.classList.remove('valid');

        let errorTxt = passField.querySelector('.error-txt');
        (password.value != "") ? errorTxt.textContent = "Password does not exit sign up to continue" : errorTxt.textContent = "Password cannot be blanked"
    } else {
        console.log(passwordExist)
        passField.classList.remove('error');
        passField.classList.add('valid');
    }
}
