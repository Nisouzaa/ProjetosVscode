// Menu responsivo
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Formulário de cadastro
document
  .getElementById('cadastroForm')
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("msg-sucesso").style.display = 'block';
    this.reset();
  });  

// Logo Animad
const logoImg = document.querySelector("#logo img");

logoImg.addEventListener("DOMContentLoaded", () => {
  const logoImg = document.querySelector("#logo img");

  setTimeout(() => {
    logoImg.classList.add("Show");
  }, 300);

  setTimeout(() => {
    if (localStorage.getItem("mostrarElemento" === "true")) {
      logoImg.classList.add("Show");
    }
  }, 300);
});

// Script da galeria
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-ampliada");
const fechar = document.querySelector(".fechar");
const imagens = document.querySelectorAll(".galeria-item img");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("show");
    modalImg.src = img.src;
  });
});

fechar.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 400);
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => (modal.style.display = "none"), 400);
  }
});
