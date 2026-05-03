// =======================
// ANIMATION TEXTE HERO
// =======================

const text = "Bienvenue sur mon portfolio";
const title = document.getElementById("title");

let i = 0;

function type() {
  if (title && i < text.length) {
    title.innerHTML += text[i];
    i++;
    setTimeout(type, 60);
  }
}

type();


// =======================
// FILTRE VEILLE TECHNO
// =======================

function filterSelection(category) {
  const items = document.querySelectorAll(".veille-card");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}
