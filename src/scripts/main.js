'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

new Swiper('.swiper-container', {
  loop: true,
  loopedSlides: 3,
  slidesPerView: 2,

  breakpoints: {
    320: {
      initialSlide: 1,
      spaceBetween: 40,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },

    1100: {
      slidesPerView: 2,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
});
