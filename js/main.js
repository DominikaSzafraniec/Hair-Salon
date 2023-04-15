const mobileNav = document.querySelector('.nav__mobile')
const mobileBars = document.querySelector('.nav__menu-bars')

function navigation() {
    mobileNav.classList.toggle('show')
}

mobileBars.addEventListener('click', navigation)

// mobile navigation - links

const menuLinks = document.querySelectorAll('.nav__menu-link')

for (const menuLink of menuLinks) {
        mobileNav.classList.remove('show')
        menuLink.addEventListener('click', navigation) 
}



