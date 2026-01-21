const heroSlider = new Swiper('.hero-slider', {
  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 40
    },
    865: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    1300: {
        slidesPerView: 3,
        spaceBetween: 40
    }
  },

  pagination: {
    el: '.hero__slider-pagination',
  },
});

const tourSlider = new Swiper('.tour__slider', {
  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 15
    },
    600: {
        slidesPerView: 2,
        spaceBetween: 15
    },
    1040: {
        slidesPerView: 3,
        spaceBetween: 15
    },
    1378: {
        slidesPerView: 4,
        spaceBetween: 15
    }
  },
});

const feedbackSlider = new Swiper('.feedback__slider', {
  slidesPerView: 3,
  spaceBetween: 58,
  centeredSlides: true,

  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 15
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 15,
        initialSlide: 1,
    },
    1040: {
        slidesPerView: 3,
        spaceBetween: 15,
        initialSlide: 1,
    },
    1378: {
        slidesPerView: 3,
        spaceBetween: 15,
        initialSlide: 1,
    }
  },

  pagination: {
    el: '.feedback__slider-pagination',
    clickable: true,
  },
});

const gallerySlider = new Swiper('.gallery__slider', {
  slidesPerView: 3,
  spaceBetween: 58,

  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 15
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    1040: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    1378: {
        slidesPerView: 4,
        spaceBetween: 15,
    }
  },
});