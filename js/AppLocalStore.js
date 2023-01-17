let LocalStore = (username, email, passWord, confirmPassword) => {
    const users = getUsers()

    let userLogin = {
        username: username.value,
        userEmail: email.value,
        userPassword: passWord.value,
        userConfirmPass: confirmPassword.value
    }

    username.focus()

    users.push(userLogin)
    localStorage.setItem('user-login', JSON.stringify(users))
}
