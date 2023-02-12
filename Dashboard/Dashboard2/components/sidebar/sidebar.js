const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarCloser = document.querySelector('.sidebar-closer');

const sidebarExpandedClass = 'sidebar-expanded';

sidebarToggle.addEventListener('click', () => sidebar.classList.toggle(sidebarExpandedClass));
sidebarCloser.addEventListener('click', () => sidebar.classList.remove(sidebarExpandedClass));
