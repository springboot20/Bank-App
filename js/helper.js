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
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('active')
        })
    }
}

const ShowDropDown = (dropId, dropBtn) => {
    const menu = document.getElementById(`${dropId}`);
    const dropB = document.querySelector(`span.${dropBtn}`);

    dropB.addEventListener('click', () => {
        if (dropB.classList.contains('fa-plus')) {
            menu.classList.add('show');
            dropB.classList.replace('fa-plus', 'fa-minus');
        } else {
            menu.classList.remove('show');
            dropB.classList.replace('fa-minus', 'fa-plus');
        }
    });
}


const ShowCardForm = (btnId, formId, overlayId) => {
    const cardBtn = document.querySelector(`.${btnId}`);
    const cardForm = document.querySelector(`.${formId}`);
    const overlay = document.querySelector(`.${overlayId}`);

    cardBtn.addEventListener('click', () => {
        cardForm.classList.add('active');
        overlay.classList.replace('hidden', 'active');
    })

    return (closeId) => {
        const closeIcon = document.querySelector(`#${closeId}`);
        closeIcon.addEventListener('click', () => {
            cardForm.classList.remove('active');
            overlay.classList.replace('active', 'hidden');
        })
    }
}
export default showMenu
export { ShowDropDown ,ShowCardForm}
