window.addEventListener("scroll", () => {
  const banners = document.querySelectorAll(".banner-span");

  const scrollY = window.scrollY;

  const bgPosY = Math.max(0, 70 - scrollY * 0.6);
  const bgSize = Math.min(200, 100 + scrollY * 0.2);
  // banner.style.backgroundPosition = `center 600px`;
  // banner.style.backgroundPosition = `center ${bgPosY}%`;

  banners.forEach(
    (banner) => (banner.style.backgroundPosition = `center ${bgPosY}%`)
  );
  //banner.style.backgroundSize = `${bgSize}%`;
});

window.addEventListener("scroll", () => {
  const container = document.querySelector(".innovators-section");
  const box = container.querySelector(".content-box");
  const rect = container.getBoundingClientRect();

  // Calculate progress of container entering viewport:
  // When container top is at bottom of viewport, progress = 0
  // When container top reaches top of viewport, progress = 1
  const viewportHeight = window.innerHeight;
  let progress = 1 - rect.top / viewportHeight;

  // Clamp progress between 0 and 1
  progress = Math.min(Math.max(progress, 0), 1);

  // Define movement range in px
  const startOffset = 350; // initial downward offset in px
  const endOffset = -200; // final upward offset in px

  // Calculate current offset based on progress
  const currentOffset = startOffset + (endOffset - startOffset) * progress;

  // Apply transform based on scroll progress
  box.style.transform = `translateY(${currentOffset}px)`;
});

function doScrollEffects() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY || window.pageYOffset;

  // Select all elements with class 'trans'
  const elements = document.querySelectorAll(".trans");

  elements.forEach((obj) => {
    // Get the top position of the element relative to the document
    const objTopPos =
      obj.getBoundingClientRect().top + scrollTop - windowHeight;

    if (scrollTop >= objTopPos) {
      if (!obj.classList.contains("ActiveItem")) {
        obj.classList.add("ActiveItem");
      }
    } else if (scrollTop < objTopPos - 50) {
      if (obj.classList.contains("ActiveItem")) {
        obj.classList.remove("ActiveItem");
      }
    }
  });
}

// You should call doScrollEffects on scroll and maybe on load:
window.addEventListener("scroll", doScrollEffects);
window.addEventListener("load", doScrollEffects);
window.addEventListener("load", () => {
  document.body.classList.add("load-content");
});

let lastScrollTop2 = 0;
const header2 = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop2) {
    // Scrolling down
    header2.classList.add("hide");
  } else {
    // Scrolling up
    header2.classList.remove("hide");
  }

  lastScrollTop2 = scrollTop <= 0 ? 0 : scrollTop;
});



document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.navbar-toggler');

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      // Your callback code here
    
      console.log('Menu button clicked');

      // Example: toggle class on body
      document.body.classList.toggle('menu-open');
    });
  }
});