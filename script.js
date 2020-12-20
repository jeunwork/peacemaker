/* navbar toggle */
const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });

/* viewmore toggleBtn */
const toogleBtn = document.querySelector('.view_toggleBtn');
const viewmore = document.querySelector('.viewmore');

toogleBtn.addEventListener('click', function () {
        viewmore.classList.toggle('active');
    });