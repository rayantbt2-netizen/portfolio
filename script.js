document.addEventListener("DOMContentLoaded", () => {
  const text = "Bienvenue sur mon portfolio";
  const title = document.querySelector(".title");

  let i = 0;

  function write() {
    if (i < text.length) {
      title.innerHTML += text[i];
      i++;
      setTimeout(write, 70);
    }
  }

  write();
});
