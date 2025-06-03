// client testimonials slider
$(document).ready(function () {
  function toggleSlick() {
    const $slider = $('.testimonials__list');

    if ($(window).width() < 768) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: false,
          adaptiveHeight: true,
        });
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  }

  toggleSlick(); // Initialize

  $(window).on('resize', toggleSlick); // Reinitialize on resize
});
