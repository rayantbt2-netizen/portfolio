document.addEventListener("DOMContentLoaded", () => {

  /* TYPEWRITER */
  const title = document.querySelector(".title");
  const text = "Bienvenue sur mon portfolio";

  let i = 0;
  title.innerHTML = "";

  function write() {
    if (i < text.length) {
      title.innerHTML += text[i];
      i++;
      setTimeout(write, 70);
    }
  }

  write();

  /* SCROLL ANIMATION */
  const elements = document.querySelectorAll(".card");

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  });

  elements.forEach(el => {
    el.classList.add("hidden");
    obs.observe(el);
  });

});
