const navbarToggle = document.querySelector('.navbar-toggle');
const sidebarCloser = document.querySelector('.sidebar-closer');

const sidebarExpandedClass = 'sidebar-expanded';

navbarToggle.addEventListener('click', () => document.body.classList.toggle(sidebarExpandedClass));
sidebarCloser.addEventListener('click', () => document.body.classList.remove(sidebarExpandedClass));