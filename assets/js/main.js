const swiperHero = new Swiper('.home-hero-swiper', {
   // Optional parameters
   loop: true,
   speed: 2000,
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
   },
   // Navigation arrows
   navigation: {
      nextEl: '.hero .swiper-btn-next',
      prevEl: '.hero .swiper-btn-prev',
   },
});

