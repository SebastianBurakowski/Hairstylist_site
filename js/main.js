const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const burgerBtn = document.querySelector('.burger-btn')
const navBtnBars = document.querySelector('.burger-btn__bars')
const footerYear = document.querySelector('.footer__year')
const sectionHeader = document.querySelector('.header')
const sectionContact = document.querySelector('.contact')
const sectionOffers = document.querySelector('.offers')

const submitBtn = document.querySelector('.contact__form-btn')
const checkbox = document.getElementById('privacy')

const aboutPhoto = document.querySelector('.aboutphoto')


function showNav() {
    nav.classList.toggle('nav--active')
    navBtnBars.classList.remove('black-bars-color')

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })

    })

}

function showYear() {
    const year = (new Date).getFullYear()
    footerYear.innerText = year
}


function showItems() {
    let scroll = window.scrollY
    const headerHeight = sectionHeader.offsetHeight


    const offerFromTop = sectionOffers.offsetTop;
    const contactFromTop = sectionContact.offsetTop


    if (headerHeight - 13 < scroll) {
        navBtnBars.classList.add('black-bars-color')
    }


    if (scroll > offerFromTop - 13) {
        navBtnBars.classList.add('black-bars-color')
    }

    if (scroll > contactFromTop - 13) {
        navBtnBars.classList.remove('black-bars-color')
    }

    if (scroll > headerHeight - 50) {

        aboutPhoto.classList.add('activeAboutPhoto')
    }



    else {
        navBtnBars.classList.remove('black-bars-color')
    }


    if(scroll < 100){
        aboutPhoto.classList.remove('activeAboutPhoto')
    }

}





showYear()
window.addEventListener('scroll', showItems)
burgerBtn.addEventListener('click', showNav)


