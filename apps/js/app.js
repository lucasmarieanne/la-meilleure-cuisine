const menuHamburger = document.querySelector(".logo-menu")
const navLinks = document.querySelector(".nav-link")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})