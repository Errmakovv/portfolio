import './scss/base.scss';

let mobileBtn = document.getElementById('mobile-btn');
let desktopBtn = document.getElementById('desktop-btn');


mobileBtn.addEventListener('click', () => {
    let iframe = document.getElementById('iframe');

    mobileBtn.style.display = 'none';
    desktopBtn.style.display = 'block';
    iframe.style.width = 375 + 'px';
})

desktopBtn.addEventListener('click', () => {
    let iframe = document.getElementById('iframe');

    desktopBtn.style.display = 'none';
    mobileBtn.style.display = 'block';
    iframe.style.width = 100 + '%';
})