const sideNavCloseToggle = document.querySelector('.side-nav-close-toggle');
const sideNavOpenToggle = document.querySelector('.side-nav-open-toggle');
const sideNav = document.querySelector('.side-nav');
const mainContent = document.querySelector('.main-content');

sideNavOpenToggle.addEventListener('click', () => {
    sideNav.classList.add('toggled')
});

mainContent.addEventListener('click', () => {
    sideNav.classList.remove('toggled');
});

sideNavCloseToggle.addEventListener('click', () => {
    sideNav.classList.remove('toggled');
})
