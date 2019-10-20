import './scss/base.scss'


const arrowEducation = document.getElementById('arrowEducation');

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

});

arrowEducation.addEventListener('click', () => {
    const list = document.getElementById('education-list');

    if(list.style.display == '' ){
        list.style.display = 'none';
        arrowEducation.style.transform = 'rotate(180deg)';
    }
    else {
        list.style.display = '';
        arrowEducation.style.transform = 'rotate(-90deg)';
    }

});

window.onload = () => {
    let descriptions = document.querySelectorAll('.projects__slide__description');
    
    descriptions.forEach(el => {
        let arrow = el.querySelector('.projects__slide__arrow-top');
        let showHide = el.querySelector('.projects__slide__show-hide-desc');

        arrow.addEventListener('click', () => {
            if (arrow.classList.contains('down')) {
                showHide.innerHTML = 'show description';
            } else {
                showHide.innerHTML = 'hide description';
            }
            arrow.classList.toggle('down');
            el.querySelector('.projects__slide__list').classList.toggle('visible');
        })
    });
}