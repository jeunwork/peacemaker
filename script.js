const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });