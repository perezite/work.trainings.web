const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarCloser = document.querySelector('.sidebar-closer');

const sidebarExpandedClass = 'sidebar-expanded';

sidebarToggle.addEventListener('click', () => document.body.classList.toggle(sidebarExpandedClass));
sidebarCloser.addEventListener('click', () => document.body.classList.remove(sidebarExpandedClass));

window.onload = () => {
    const isNonMobile = window.matchMedia("screen and (min-width: 576px)").matches;
    if (isNonMobile)
        document.body.classList.add(sidebarExpandedClass);
}