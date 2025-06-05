/* Featured Case Studies Slick Slider
   - Responsive toggle: initialize on small screens, destroy on large screens
*/
$(document).ready(function () {

  function toggleSlick() {
    const $list = $(".featured-case-studies__list");

    if ($(window).width() < 768) {
      if (!$list.hasClass("slick-initialized")) {
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
      if ($list.hasClass("slick-initialized")) {
        $list.slick("unslick");
      }
    }
  }

  // Initial call
  toggleSlick();

  // Recheck on window resize
  $(window).on("resize", toggleSlick);
});

// Challenges Slick Slider (for all screen sizes)
$(document).ready(function () {
  function slickify() {
    if (window.innerWidth > 600) {
    if (!$(".khb-challenges-listing").hasClass("slick-initialized")) {
      // Inject arrows inside .khb-challenges-listing (if not already)
      if ($("#slick-prev").length === 0 && $("#slick-next").length === 0) {
        $(".khb-challenges-listing").append(`
          <img class="khb-arrow" id="slick-prev" src="images/dummy/who-we-help/Vector.png" alt="prev arrow" />
          <img class="khb-arrow" id="slick-next" src="images/dummy/who-we-help/Vector (1).png" alt="next arrow" />
        `);
      }

      $(".khb-challenges-listing").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        prevArrow: $("#slick-prev"), // Use injected arrows
        nextArrow: $("#slick-next"),
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      setEqualHeight();

      $(".khb-challenges-listing").on("afterChange", function () {
        setEqualHeight();
      });
    } }
  }

  slickify();

  $(window).on("resize", function () {
    if ($(".khb-challenges-listing").hasClass("slick-initialized")) {
      $(".khb-challenges-listing").slick("unslick");
    }
    slickify();
  });
});
