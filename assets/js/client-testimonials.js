$(document).ready(function () {
  // Duplicate the slides so Slick has enough slides for infinite looping
  let $list = $(".testimonials__list");
  let $slides = $list.children().clone();
  $list.append($slides);

  // Initialize Slick slider
  $list.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev btn btn-outline-light">&#8592;</button>',
    nextArrow:
      '<button type="button" class="slick-next btn btn-outline-light">&#8594;</button>',
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
