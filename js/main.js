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

// accordion

// const priceHeading = document.querySelector('.price__heading')

// const priceInfo = document.querySelector('.price__info')

// const showAcc = () => {
//     priceInfo.classList.toggle('showAcc')
// }

// priceHeading.addEventListener('click', showAcc)

const priceHeadings = document.querySelectorAll('.price__heading') 

const priceInfos = document.querySelectorAll('.price__info')

for (const priceHeading of priceHeadings) {
    
    for (const priceInfo of priceInfos) {
        priceHeading.addEventListener('click', addClass = () => {
            priceInfo.classList.toggle('showAcc')
        })
    }
    // function addClass() {
    //     priceInfo.classList.toggle('showAcc')
    // }

}

