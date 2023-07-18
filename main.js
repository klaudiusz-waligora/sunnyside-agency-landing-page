const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu=document.querySelector('.mobile-navbar-links')
const navLinks=document.querySelectorAll('.nav-link')

const navToggleFunc = function (){
  hamburgerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden')
}
hamburgerMenu.addEventListener('click', navToggleFunc)
for(let i=0; i<navLinks.length; i++){
  navLinks[i].addEventListener('click', navToggleFunc)
}

