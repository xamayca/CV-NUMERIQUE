// Get the id for the navigation menu animation //
const navLinksHtml = document.getElementById('navigation-links');
const menuOpenHtml = document.getElementById('menu-open');
const menuCloseHtml = document.getElementById('menu-close');

// On click, use its classes on the menu button and links //
menuOpenHtml.addEventListener('click', () => {
    navLinksHtml.classList.toggle('d-initial');
    menuOpenHtml.classList.toggle('d-none');
    menuCloseHtml.classList.toggle('d-none');
});

menuCloseHtml.addEventListener('click', () => {
    navLinksHtml.classList.toggle('d-initial');
    menuOpenHtml.classList.toggle('d-none');
    menuCloseHtml.classList.toggle('d-none');
});

const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', appHeight)
appHeight()