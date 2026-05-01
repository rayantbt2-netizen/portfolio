const text = "Bienvenue sur mon portfolio";
const title = document.getElementById("title");

let i = 0;

function type() {
  if (i < text.length) {
    title.innerHTML += text[i];
    i++;
    setTimeout(type, 60);
  }
}

type();
