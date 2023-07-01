hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".navbar");
  // header = document.querySelector(".header");
  navBar.classList.toggle("active")
  // header.classList.toggle("active")
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000
    },
    grabCursor: true,
    pagination: {
      el: ".pagination-container",
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next-container',
      prevEl: '.swiper-button-prev-container',
    },
  
    breakpoints: {
      1000: {
        slidesPerView: 2,
        spaceBetween: 20
    }
  }
  });
  
  
  