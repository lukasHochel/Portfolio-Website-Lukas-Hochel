const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    menuToggle.classList.toggle('toggle-active');

    const menuIcon = menuToggle.querySelector('.material-symbols-outlined');

    if (menu.classList.contains('active')) {
        menuIcon.textContent = 'close';
        menuIcon.style.color = 'white';
    } else {
        menuIcon.textContent = 'menu';
        menuIcon.style.color = 'black';
    }
});

const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');

        menuToggle.classList.remove('toggle-active');

        const menuIcon = menuToggle.querySelector('.material-symbols-outlined');
        menuIcon.textContent = 'menu';
        menuIcon.style.color = 'black';
    });
});