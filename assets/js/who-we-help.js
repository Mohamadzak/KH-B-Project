/* Featured Case Studies Slick Slider
   - Responsive toggle: initialize on small screens, destroy on large screens
*/
$(document).ready(function () {
  function toggleSlick() {
    const $list = $('.featured-case-studies__list');

    if ($(window).width() < 768) {
      if (!$list.hasClass('slick-initialized')) {
        $list.slick({
          slidesToShow: 1.1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: false,
          adaptiveHeight: true,
        });
      }
    } else {
      if ($list.hasClass('slick-initialized')) {
        $list.slick('unslick');
      }
    }
  }

  // Initial call
  toggleSlick();

  // Recheck on window resize
  $(window).on('resize', toggleSlick);
});


//challenges slicck slider
 $(document).ready(function () {
  function setEqualHeight() {
    var maxHeight = 0;
    $('.khb-challenge-card').css('height', 'auto'); // reset height

    $('.khb-challenge-card').each(function () {
      var thisHeight = $(this).outerHeight();
      if (thisHeight > maxHeight) {
        maxHeight = thisHeight;
      }
    });

    $('.khb-challenge-card').css('height', maxHeight + 'px');
  }

  function slickify() {
    if ($(window).width() <= 900) {
      if (!$('.khb-challenges-listing').hasClass('slick-initialized')) {
        $('.khb-challenges-listing').slick({
          dots: false,
          arrows: true,
          infinite: true,           // Loop slides infinitely
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,    // Disable adaptiveHeight to fix height manually
          prevArrow: '<button type="button" class="slick-prev">‹</button>',
          nextArrow: '<button type="button" class="slick-next">›</button>',
        });

        setEqualHeight(); // Set equal height after init

        // Also set equal height after each slide change (to handle dynamic content if any)
        $('.khb-challenges-listing').on('afterChange', function () {
          setEqualHeight();
        });
      }
    } else {
      if ($('.khb-challenges-listing').hasClass('slick-initialized')) {
        $('.khb-challenges-listing').slick('unslick');
        $('.khb-challenge-card').css('height', 'auto'); // reset height when slick is destroyed
      }
    }
  }

  slickify(); // Run on page load

  $(window).on('resize', function () {
    slickify();
  });
});
