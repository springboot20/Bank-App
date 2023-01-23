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
        closeBtn.addEventListener('click',()=> {
           menu.classList.remove('active')
        })
    }
}


export default showMenu
