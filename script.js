hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".navbar");
  // header = document.querySelector(".header");
  navBar.classList.toggle("active")
  // header.classList.toggle("active")
}


  let redirected = false;
  function redirectBasedOnLocation() {
    // Make a request to the Geolocation API
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const country = data.country_code;
  
        // Check if the visitor is from India (country code: IN)
        if (country === 'IN' && !redirected) {
          redirected = true;
          // Redirect to the India-specific page
          window.location.href = 'indexi.html';
          console.log("Hello")

        }
      })
      .catch(error => {
        
      });
  }
  
window.onload = redirectBasedOnLocation;

  // Call the function when the page loads



const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000
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



