

const loader= document.querySelector(".loader-container");
    loader.classList.add("active");

    setTimeout(() => {
      loader.classList.remove("active");
    }, 2000); 


AOS.init();


const scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 6000 || document.documentElement.scrollTop > 6000) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none"; 
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
};



const swiper1 = new Swiper(' .my-swiper-1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },

  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});


const swiper2 = new Swiper(' .my-swiper-2', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },

  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});




