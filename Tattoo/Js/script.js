// Menu responsivo
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Formulário de cadastro
document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("msg-sucesso").style.display = "block";
    this.reset();
  });

// Logo Animado
const logoImg = document.querySelector("#logo img");

document.addEventListener("DOMContentLoaded", () => {
  let logoImg = document.querySelector("#logo img");

  setTimeout(() => {
    logoImg.classList.add("Show");
  }, 300);

  if (localStorage.getItem("mostrarElemento") === "true") {
    logoImg.classList.add("Show");
  }
});

// Script da galeria
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-ampliada");
const fechar = document.querySelector(".fechar");
const imagens = document.querySelectorAll(".galeria-item img");

document.addEventListener("DOMContentLoaded", () => {
  // abrir modal
  imagens.forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.style.display = "grid";
      requestAnimationFrame(() => modal.classList.add("show"));
      modal.setAttribute("aria-hidden", "false");
    });
  });
});

// fechar modal
function fecharModal() {
  modal.classList.remove("show");
  modal.addEventListener(
    "transitionend",
    () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      modalImg.src = "";
    },
    { once: true }
  );
}

fechar?.addEventListener("click", fecharModal);

// fechar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});

// fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
});
