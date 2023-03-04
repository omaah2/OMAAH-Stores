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

let countDate = new Date('june 1,2021 00:00:00').getTime();

function CountDown() {
    
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}
setInterval(function(){
    CountDown();
},1000)