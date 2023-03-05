const navbarToggle = document.querySelector('.navbar-toggle');
const sidebarCloser = document.querySelector('.sidebar-closer');
const main = document.querySelector('main');

const sidebarExpandedClass = 'sidebar-expanded';

const isMobile = () => window.matchMedia("screen and (max-width: 576px)").matches;

navbarToggle.addEventListener('click', () => document.body.classList.toggle(sidebarExpandedClass));
sidebarCloser.addEventListener('click', () => document.body.classList.remove(sidebarExpandedClass));
main.addEventListener('click', () => {
    if (isMobile())
        document.body.classList.remove(sidebarExpandedClass);
});

window.onload = () => {
    if (!isMobile())
        document.body.classList.add(sidebarExpandedClass);
}