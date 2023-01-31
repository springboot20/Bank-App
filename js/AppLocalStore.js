let getUsers = () => {
    let userArray;
    (localStorage.getItem('user-login') === null) ? userArray = [] : userArray = JSON.parse(localStorage.getItem('user-login'));
    return userArray;
}

/**
 *
 * @param {string} username
 * @param {*} email
 * @param {*} passWord
 * @param {*} confirmPassword
 */
let LocalStore = (user, email, passWord, confirmPassword) => {
    const users = getUsers();

    let userLogin = {
        username: user.value,
        userEmail: email.value,
        userPassword: passWord.value,
        userConfirmPass: confirmPassword.value
    }

    users.push(userLogin);
    localStorage.setItem('user-login', JSON.stringify(users));
}


let getUserCards = () => {
    let cardsArray;
    (localStorage.getItem('user-cards') === null) ? cardsArray = [] : cardsArray = JSON.parse(localStorage.getItem('user-cards'));
    return cardsArray
}


let CardStore = (number, name, expire, secure) => {
    const cards = getUserCards();

    let cardsDetail = {
        cardnumber: number.value,
        cardname: name.value,
        cardexpire: expire.value,
        cardSecure: secure.value
    }

    cards.push(cardsDetail);
    localStorage.setItem('user-cards', JSON.stringify(cards));
}



export default LocalStore;
export { getUsers }
export { getUserCards, CardStore }
