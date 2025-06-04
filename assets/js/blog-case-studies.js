const tocItems = document.querySelectorAll(".toc-item");

// Smooth scroll on click
tocItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// IntersectionObserver options
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -70% 0px",
  threshold: 0,
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      tocItems.forEach((item) => {
        if (item.getAttribute("data-target") === id) {
          item.classList.add("active-toc");
          item.classList.add("active"); // If you want bootstrap active style too
        } else {
          item.classList.remove("active-toc");
          item.classList.remove("active");
        }
      });
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

tocItems.forEach((item) => {
  const targetId = item.getAttribute("data-target");
  const targetElem = document.getElementById(targetId);
  if (targetElem) {
    observer.observe(targetElem);
  }
});
