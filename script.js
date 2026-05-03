<script>

// animation texte
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

type(); // IMPORTANT pour lancer

// filtre veille
function filterSelection(category) {
  const items = document.querySelectorAll(".veille-item");

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

</script>
