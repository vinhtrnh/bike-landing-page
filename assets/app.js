
const header = document.querySelector('header')
// nav bar
const mobileMenu = document.querySelector('.mobile-menu')
const toggleBtn = document.querySelector('.menu-bars')
const mobileNav = document.querySelector('.mobile-menu')
const closeBtn = document.querySelector('.header-close')
// slide
const heroSlide = document.querySelector('#hero-slide')
const slideItem = document.querySelectorAll('.slide')
const slidePrev = document.querySelector('.slide-prev')
const slideNext = document.querySelector('.slide-next')
const slideQuantity = document.querySelectorAll('.slide-quantity')

// header nav bar 
toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active')

})

mobileMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active')
})


// header change style on scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
})

// hero slide logic

let slideIndex = 0

const slidePlay = true

showSlide = (index) => {
    heroSlide.querySelector('.slide.active').classList.remove('active')
    heroSlide.querySelector('.slide-quantity.active').classList.remove('active')
    slideQuantity[index].classList.add('active')
    slideItem[index].classList.add('active')
}

nextSlide = () => {
    slideIndex = slideIndex + 1 === slideItem.length ? 0 : slideIndex + 1
    showSlide(slideIndex)
}

prevSlide = () => {
    slideIndex = slideIndex - 1 < 0 ? slideItem.length - 1 : slideIndex - 1
    showSlide(slideIndex)
}

slideNext.addEventListener('click', nextSlide)
slidePrev.addEventListener('click', prevSlide)

slideQuantity.forEach((slideItem, index) => {
    slideItem.addEventListener('click', () => showSlide(index))
})

setTimeout(() => {
    slideItem[0].classList.add('active')
}, 200)

setInterval(() => {
    if (!slidePlay) return
    nextSlide()
}, 2000)
