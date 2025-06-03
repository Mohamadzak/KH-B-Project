document.querySelectorAll(".toc-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all
    document
      .querySelectorAll(".toc-item")
      .forEach((i) => i.classList.remove("active-toc"));

    // Add active class to clicked
    item.classList.add("active-toc");

    // Scroll smoothly to the target heading
    const targetId = item.getAttribute("data-target");
    const targetElem = document.getElementById(targetId);

    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
