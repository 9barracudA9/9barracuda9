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
    inputActive.forEach(e => {
        e.addEventListener('click', function (event) {
            if (e.value.textContent)
                e.style.border = 'green 1px solid'
            e.style.transition = 'all 0.3s'
        })
    })
}