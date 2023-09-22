var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".swiperDocumentsContent", {
  loop: true,
  
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      
    }
  }
});  