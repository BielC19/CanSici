document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navbarMenu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', function () {
        navbarMenu.classList.toggle('is-active');
        console.log('Elemento burger clickeado.'); // Agregado
    });
});