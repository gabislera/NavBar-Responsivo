const mobileIcon = document.querySelector('.mobile-icon')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-list a')
const activeClass = 'active'

function animateLinks() {

    navLinks.forEach((link) => {
        link.style.animation ? (link.style.animation = '') : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
        // console.log(link.style)
    })
}

function handleClick() {
    navList.classList.toggle(activeClass)
    animateLinks()
}

mobileIcon.addEventListener('click', handleClick)