import showMenu from './helper.js'

  (() => {
    showMenu('open-btn', 'nav-menu-container')('close-icon')

    const creatbtn = document.querySelector('button.create')
    creatbtn.addEventListener('click', () => {
      window.location.href = './signup.html'
    })
  })()
