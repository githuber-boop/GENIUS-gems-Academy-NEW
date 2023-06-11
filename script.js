hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".navbar");
  // header = document.querySelector(".header");
  navBar.classList.toggle("active")
  // header.classList.toggle("active")
}

var country = "" 
function detectCountry(){

fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    country =data.country;
    if(country == "IN")
    window.location.replace("indexi.html")
    
  });
 
}

window.onload = function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
      detectCountry();
      localStorage.setItem("hasCodeRunBefore", true);
  }
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

