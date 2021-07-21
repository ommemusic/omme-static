/*=============================================
=            Navbar                           =
=============================================*/
/*const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", () => {
  menu.classList.add("menu-open");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu-open");
});
=====  End of Navbar                 ======*/

/*=============================================
=            Swiper                           =
=============================================*/
/* Top */
const swiperTop = new Swiper(".swiper-top", {
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Lombardia */
const swiperLombardia = new Swiper(".swiper-lombardia", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  reverseDirection: true,
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Veneto */
const swiperVeneto = new Swiper(".swiper-veneto", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Extra */
const swiperExtra = new Swiper(".swiper-extra", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Cerimonia */
const swiperCerimonia = new Swiper(".swiper-cerimonia", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Ricevimento */
const swiperRicevimento = new Swiper(".swiper-ricevimento", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Animazione */
const swiperAnimazione = new Swiper(".swiper-animazione", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Intrattenimento */
const swiperIntrattenimento = new Swiper(".swiper-intrattenimento", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Effetti */
const swiperEffetti = new Swiper(".swiper-effetti", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Abbinamenti */
const swiperAbbinamenti = new Swiper(".swiper-pairings", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 4,
  spaceBetween: 6,
});

/* Video */
const swiperVideo = new Swiper(".swiper-video", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 4,
  spaceBetween: 6,
});

/* Artists */
const swiperArtists = new Swiper(".swiper-artists", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  reverseDirection: true,
  slidesPerView: 3,
  spaceBetween: 6,
});

/* Foto */
const swiperFoto = new Swiper(".swiper-foto", {
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 7,
  spaceBetween: 6,
});
/*=====  End of Swiper                 ======*/
