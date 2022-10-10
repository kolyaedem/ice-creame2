const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    grabCursor: true,
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  
    // mousewheel: {
    //   sensitivity: 1,
    //   eventsTarget: ".swiper-slide"
    // },
  
    slidesPerGroup: 1,
    centeredSlides: true,
    loop:true,
  
    autoplay: {
      delay: 3000,
  
    }
  });
  