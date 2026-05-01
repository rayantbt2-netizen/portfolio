document.addEventListener("DOMContentLoaded", () => {

  /* TEXT ANIMATION */
  const title = document.querySelector(".title");
  const text = "Bienvenue sur mon portfolio";

  let i = 0;

  function write() {
    if (i < text.length) {
      title.innerHTML += text[i];
      i++;
      setTimeout(write, 60);
    }
  }

  write();

  /* SCROLL ANIMATION */
  const elements = document.querySelectorAll(".timeline-item, .card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

});
