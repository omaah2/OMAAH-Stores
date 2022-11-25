let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');

    if (menu.classList.contains("fa-bars")) {
       menu.className = 'fa fa-times'
    } else {
        menu.className ='fa fa-bars'
    }
});


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.screenY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}