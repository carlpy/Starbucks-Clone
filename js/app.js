///------ Creating the elements ------///

// Navbar
const navbarContainer = document.querySelector('.nav__mobile');

// First navbar

const burgerButton = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile-menu');

// Second navbar after click on menu button
const menuButton = document.querySelector('.btn-menu');
const backMenuButton = document.querySelector('.nav__back-btn');
const coffeeMenu = document.querySelector('.nav__mobile-menu2');

// footer accordion
const accordionElements = document.querySelectorAll('.acordions');


///---- Events ----///

// header and mobile events

burgerButton.addEventListener('click', () => {
    coffeeMenu.classList.remove('show-menu');
    mobileMenu.classList.toggle('show-menu');
    navbarContainer.classList.toggle('show-menu');
    
    if (navbarContainer.classList.contains('show-menu')) {
        document.querySelector('body').style.overflowY = 'hidden';
        document.querySelector('body').style.maxHeight = '100vh';
    } else {
        document.querySelector('body').style.overflowY = 'visible';
        document.querySelector('body').style.maxHeight = 'auto';
    }
});

menuButton.addEventListener('click', () => {
    coffeeMenu.classList.toggle('show-menu');
});

backMenuButton.addEventListener('click', () => {
    coffeeMenu.classList.toggle('show-menu');
});


// footer elements

accordionElements.forEach( (acordion) => {
    acordion.addEventListener('click', function() {
        this.classList.toggle('show');
    });
});