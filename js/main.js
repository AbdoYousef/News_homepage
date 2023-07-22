const menuIcon = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {

    nav.style.display = 'flex';
})

closeMenu.addEventListener('click', () => {

    nav.style.display = 'none';
})

