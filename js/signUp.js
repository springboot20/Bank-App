import LocalStore from "./AppLocalStore.js"

const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const signButton = form.querySelector('button');

const uField = document.querySelector('.username');
const eField = document.querySelector('.email');
const pField = document.querySelector('.password');
const cField = document.querySelector('.confirm-password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    (username.value == '') ? uField.classList.add('shake', 'error') : checkUsernameHandler(username, uField);
    (email.value == '') ? eField.classList.add('shake', 'error') : checkEmailHandler(email, eField);
    (passWord.value == '') ? pField.classList.add('shake', 'error') : checkPasswordHandler(passWord, pField);
    (confirmPassword.value == '') ? cField.classList.add('shake', 'error') : confirmHandler(confirmPassword, passWord, cField);

    setTimeout(() => {
        uField.classList.remove('shake', 'error');
        eField.classList.remove('shake', 'error');
        pField.classList.remove('shake', 'error');
        cField.classList.remove('shake', 'error');
    }, 1500);

    if (!uField.classList.contains('error') && !eField.classList.contains('error') && !pField.classList.contains('error') && !cField.classList.contains('error')) {
        setTimeout(() => window.location.href = form.getAttribute('action'), 4500);
        LocalStore(username, email, passWord, confirmPassword);

        const span = document.createElement('span');
        span.className = 'loader';
        signButton.textContent = `Signing Up..........`;
        signButton.disabled = true;
        signButton.append(span);
    }

    username.addEventListener('keyup', () => { checkUsernameHandler(username, uField) });
    email.addEventListener('keyup', () => { checkEmailHandler(email, eField) });
    passWord.addEventListener('keyup', () => { checkPasswordHandler(passWord, pField) });
    confirmPassword.addEventListener('keyup', () => { confirmHandler(confirmPassword, passWord, cField) });
})

/**
 *
 * @param {*} usernameInput
 * @param {*} userField
 */
const checkUsernameHandler = (usernameInput, userField) => {
    let pattern = /^[A-Za-z][A-Za-z0-9_ ]{7,29}$/;
    if (!usernameInput.value.match(pattern)) {
        userField.classList.add('error');
        userField.classList.remove('valid');

        let errorTxt = userField.querySelector('.error-txt');
        (username.value != "") ? errorTxt.textContent = "Username can only start with an Uppercase followed by a Lowercase, a digit and Underscore" : errorTxt.textContent = "Username cannot be blanked"

    } else {
        userField.classList.remove('error');
        userField.classList.add('valid');
    }
}

/**
 *
 * @param {*} emailInput
 * @param {*} emailField
 */
const checkEmailHandler = (emailInput, emailField) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        emailField.classList.add('error');
        emailField.classList.remove('valid');

        let errorTxt = emailField.querySelector('.error-txt');
        (email.value != "") ? errorTxt.textContent = "Enter a valid email address" : errorTxt.textContent = "Email cannot be blanked"
    } else {
        emailField.classList.remove('error');
        emailField.classList.add('valid');
    }
}

/**
 *
 * @param {*} passwordInput
 * @param {*} passField
 */
const checkPasswordHandler = (passwordInput, passField) => {
    let pattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\_\@]+)(?=.*[a-zA-Z]).{8,16}$/;
    if (!passwordInput.value.match(pattern)) {
        passField.classList.add('error');
        passField.classList.remove('valid');

        let errorTxt = passField.querySelector('.error-txt');
        (passWord.value != "") ? errorTxt.textContent = "Password can only contains digits, special characters e.g (-,_,@) , _lower and upper case and should not less than 8" : errorTxt.textContent = "Password cannot be blanked"
    } else {
        passField.classList.remove('error');
        passField.classList.add('valid');
    }
}

/**
 *
 * @param {*} confirmInput
 * @param {*} passwordInput
 * @param {*} conField
 */
const confirmHandler = (confirmInput, passwordInput, conField) => {
    if (confirmInput.value !== passwordInput.value) {
        conField.classList.add('error');
        conField.classList.remove('valid');

        let errorTxt = conField.querySelector('.error-txt');
        (confirmInput.value !== passwordInput.value) ? errorTxt.textContent = "Confirm password must be the same with password" : errorTxt.textContent = "Confirm password cannot be blanked"
    } else {
        conField.classList.remove('error');
        conField.classList.add('valid');
    }
}
