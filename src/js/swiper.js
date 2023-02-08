const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  breakpoints: {
    768: {
      enabled: false
    }
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: 'true'
  }
})