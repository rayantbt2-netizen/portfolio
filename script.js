document.addEventListener("DOMContentLoaded", () => {

  /* ✨ TYPEWRITER */
  const title = document.querySelector(".title");

  const text = "Bienvenue sur mon portfolio";
  let i = 0;

  function type() {
    if (i < text.length) {
      title.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }

  type();

  /* 📜 SCROLL ANIMATION */
  const elements = document.querySelectorAll(".card");

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
