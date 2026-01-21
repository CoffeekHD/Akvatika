const menuIcon = document.querySelector('.burger--icon');
const closeMenuIcon = document.querySelector('.burger-close-icon');
const menu = document.querySelector('.nav');
const headerSocial = document.querySelector('.social-list');
const headerSocialItems = document.querySelectorAll('.social__list-link');

menuIcon.addEventListener('click', openMenu);

function openMenu() {
    menu.classList.add('nav--open');
    headerSocial.classList.add('social-list--menu-open');
    document.body.classList.add('no-scroll');

    headerSocialItems.forEach(item => {
        item.classList.add('social__list-link-blue')
    })

    closeMenuIcon.addEventListener('click', closeMenu);
}

function closeMenu() {
    menu.classList.remove('nav--open');
    headerSocial.classList.remove('social-list--menu-open');
    document.body.classList.remove('no-scroll');

    headerSocialItems.forEach(item => {
        item.classList.remove('social__list-link-blue')
    })

    closeMenuIcon.removeEventListener('click', closeMenu);
}