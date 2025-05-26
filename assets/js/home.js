/* ===========================
   Circle Progress Initialization
   - Calculates stroke offset and dot position
   - Based on data-percentage attribute
   =========================== */
document.querySelectorAll('.progress-circle').forEach(el => {
  const percent = parseInt(el.getAttribute('data-percentage'), 10);
  const circle = el.querySelector('.progress');
  const dot = el.querySelector('.dot');

  const cx = 50;  // SVG center X coordinate
  const cy = 50;  // SVG center Y coordinate
  const radius = 45; // Radius of the circular progress path

  // Calculate circumference of the circle (2πr)
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;

  // Calculate stroke offset based on percent completion
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  // Calculate angle in degrees for dot position
  // 0% = -90deg (top center), 100% = 270deg (full circle)
  const angleDeg = (percent / 100) * 360;
  const angleRad = angleDeg * (Math.PI / 180);

  // Calculate dot's x,y coordinates on circumference
  const dotX = cx + radius * Math.cos(angleRad);
  const dotY = cy + radius * Math.sin(angleRad);

  // Position dot on SVG circle
  dot.setAttribute('cx', dotX);
  dot.setAttribute('cy', dotY);
});


/* ===========================
   Navbar Auto Collapse on Outside Click
   - Collapses navbar if clicking outside toggler or navbar itself
   =========================== */
document.addEventListener('click', function(event) {
  const navbarCollapse = document.getElementById('navbarNavDropdown');
  const toggler = document.querySelector('.navbar-toggler');

  // Only proceed if navbar is currently expanded
  if (navbarCollapse.classList.contains('show')) {
    // If click is outside navbar and toggler button, trigger collapse
    if (!navbarCollapse.contains(event.target) && !toggler.contains(event.target)) {
      toggler.click(); // Triggers Bootstrap collapse toggle
    }
  }
});


/* ===========================
   Slick Slider Initialization
   =========================== */


$(document).ready(function () {
  const $carousel = $('.slick-carousel');
  const $current = $('.current-slide');
  const $total = $('.total-slides');

  // Set total slides on init
  $carousel.on('init', function (event, slick) {
    $total.text(slick.slideCount);
    $current.text(1);
  });

  // Update current slide number after change
  $carousel.on('afterChange', function (event, slick, currentSlide) {
    $current.text(currentSlide + 1);
  });

  // Initialize slick with custom arrows
  $carousel.slick({
    dots: false,
    arrows: true,
    prevArrow: $('#carousel-prev'), // use ID selector
    nextArrow: $('#carousel-next'), // use ID selector
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  });
});




/* Data-Driven Slick Slider
   - Only initialize on screens smaller than 768px
*/
$(document).ready(function() {
  if (window.innerWidth < 768) {
    $('.slick-progress').slick({
      dots: true,
      arrows: false,
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2
    });
  }
});
//market leader slider
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".review-card");
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "flex" : "none";
    });
  }

  // Initial display
  showCard(currentIndex);

  // Handle arrow clicks inside each card
  cards.forEach((card, index) => {
    const leftArrow = card.querySelector(".review-card__arrow--left");
    const rightArrow = card.querySelector(".review-card__arrow--right");

    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    });
  });
});


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

/* Market Leaders Review Slider */
$(document).ready(function() {
  $('.review-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.review-card__arrow--left'),
    nextArrow: $('.review-card__arrow--right'),
  });
});
