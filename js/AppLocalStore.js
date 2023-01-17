let getUsers = () => {
    let userArray;
    if (localStorage.getItem('user-login') === null) {
        userArray = []
    } else {
        userArray = JSON.parse(localStorage.getItem('user-login'))
    }

    return userArray
}

/**
 *
 * @param {string} username
 * @param {*} email
 * @param {*} passWord
 * @param {*} confirmPassword
 */
let LocalStore = (username, email, passWord, confirmPassword) => {
    const users = getUsers()

    let userLogin = {
        username: username.value,
        userEmail: email.value,
        userPassword: passWord.value,
        userConfirmPass: confirmPassword.value
    }

    users.push(userLogin)
    localStorage.setItem('user-login', JSON.stringify(users))
}
export default LocalStore
