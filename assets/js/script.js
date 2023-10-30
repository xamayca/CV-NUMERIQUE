// Get the id for the navigation menu animation //
const navLinksHtml = document.getElementById('navigation-links');
const menuOpenHtml = document.getElementById('menu-open');
const menuCloseHtml = document.getElementById('menu-close');

// On click add class to navLinks/menuOpen/menuClose & disable scroll //
menuOpenHtml.addEventListener('click', () => {
    navLinksHtml.classList.toggle('d-initial');
    menuOpenHtml.classList.toggle('d-none');
    menuCloseHtml.classList.toggle('d-none');

    document.body.style.overflow = 'hidden';
});

// On click remove class to navLinks/menuOpen/menuClose & enable scroll //
menuCloseHtml.addEventListener('click', () => {
    navLinksHtml.classList.toggle('d-initial');
    menuOpenHtml.classList.toggle('d-none');
    menuCloseHtml.classList.toggle('d-none');

    document.body.style.overflow = 'auto';
});

