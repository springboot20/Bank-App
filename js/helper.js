/**
 *
 * @param {*} openId
 * @param {*} menuId
 * @returns
 */
const showMenu = (openId, menuId) => {
    const menu = document.querySelector(`.${menuId}`)
    const openBtn = document.querySelector(`#${openId}`)
    const mainMenu = document.querySelector('#menu')

    if (openBtn && menu) {
        openBtn.addEventListener("click", () => {
            menu.classList.add("active");
            mainMenu.classList.add('main-menu')
        })
    }

    return (closeId) => {
        const closeBtn = document.querySelector(`.${closeId}`)
        closeBtn.addEventListener('click', event => {
            event.target.parentElement.classList.remove('active')
        })
    }
}

/**
 *
 * @param {string} input
 * @param {string} message
 */
const setErrorMessage = (input, message) => {
    const formField = input.parentElement.parentElement;
    const small = formField.querySelector('.error-txt')

    small.innerHTML = `${message}`
    formField.className = 'field error'
}

/**
 *
 * @param {string} input
 */
const setSuccessMessage = (input) => {
    const formField = input.parentElement.parentElement;
    formField.className = 'field success'
    console.log(formField)
}


export default showMenu
export { setErrorMessage, setSuccessMessage }
