const sideNavToggle = document.querySelector('.side-nav-toggle');
const sideNavCloseToggle = document.querySelector('.side-nav-close-toggle');
const sideNav = document.querySelector('.side-nav');
const mainContent = document.querySelector('.main-content');

sideNavToggle.addEventListener('click', () => {
    sideNav.classList.toggle('toggled')
});

sideNavCloseToggle.addEventListener('click', () => {
    sideNav.classList.remove('toggled');
});

mainContent.addEventListener('click', () => {
    const isMobile = window.matchMedia("(max-width: 576px)").matches;
    
    if (isMobile) 
        sideNav.classList.remove('toggled');
});
