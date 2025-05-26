$(document).ready(function () {
  function initSlickIfNeeded() {
    const $slider = $('.category-container');

    if ($(window).width() < 768) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          centerMode: false, // No centering, so partial slide visible on edges
          slidesToShow: 3,   // Show 3 full slides (adjust if you want 2.5)
          initialSlide: 0,   // Start from first slide
          infinite: false,   // Prevent infinite loop if you want normal behavior
          responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2.2, // Show 2 full + partial slide on small screens
                infinite: false
              }
            }
          ]
        });
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  }

  // Initialize on load
  initSlickIfNeeded();

  // Re-check on window resize, but debounce to improve performance
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSlickIfNeeded, 250);
  });
});
