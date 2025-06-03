document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.25,
    rootMargin: "0px 0px -40px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});