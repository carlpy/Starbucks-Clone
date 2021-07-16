// Creating the elements

const burgerButton = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile-menu');
const mobileBlackScreen = document.querySelector('nav__mobile-black-screen');

burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
});