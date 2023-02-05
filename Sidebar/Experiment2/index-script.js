const sideNavToggle = document.querySelector('.side-nav-toggle');
const sideNav = document.querySelector('.side-nav');
const mainContent = document.querySelector('.main-content');

sideNavToggle.addEventListener('click', () => {
    sideNav.classList.add('toggled')
});
mainContent.addEventListener('click', () => {
    sideNav.classList.remove('toggled');
});