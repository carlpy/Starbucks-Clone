///------ Creating the elements ------///

// Navbar
const navbarContainer = document.querySelector('.nav__mobile');

// First navbar

const burgerButton = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile-menu');
const mobileBlackScreen = document.querySelector('nav__mobile-black-screen');

// Second navbar after click on menu button
const menuButton = document.querySelector('.btn-menu');
const backMenuButton = document.querySelector('.nav__back-btn');
const coffeeMenu = document.querySelector('.nav__mobile-menu2');

///---- Events ----///

burgerButton.addEventListener('click', () => {
    coffeeMenu.classList.remove('show-menu');
    mobileMenu.classList.toggle('show-menu');
});

menuButton.addEventListener('click', () => {
    coffeeMenu.classList.toggle('show-menu');
});

backMenuButton.addEventListener('click', () => {
    coffeeMenu.classList.toggle('show-menu');
});


