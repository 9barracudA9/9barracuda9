'use strict'

const menuLinks = document.querySelectorAll('.nav-link[data-goto]')

if (menuLinks.length > 0) {
    menuLinks.forEach(element => {
        element.addEventListener('click', onMenuLinkClick)

    })

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto)
            const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight
            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock')
                iconMenu.classList.remove('active')
                bodyMenu.classList.remove('active')
            }

            window.scrollTo(
                {
                    top: goToBlockValue,
                    behavior: "smooth"
                }
            )
            e.preventDefault();
        }
    }
}

const inputActive = document.querySelectorAll('.input')

if (inputActive.length > 0) {
    inputActive.forEach(item => {
        item.addEventListener('input', function (event) {
            if (item.value.length > 0) {
                item.style.border = 'green 1px solid'
                item.style.transition = 'all 0.3s'
            } else {
                item.style.border = '1px rgb(110 102 102) solid'
            }
        })
    })
}

const iconMenu = document.querySelector('.menu-icon')
const bodyMenu = document.querySelector('.nav-list')
if (iconMenu) {
    iconMenu.addEventListener('click', function (ev) {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active')
        bodyMenu.classList.toggle('active')
    })
}

