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

// Logo
const logoImg = document.querySelector("#loho img")

logoImg.addEventListener("DOMContentLoaded", () => {
  console.log = document.querySelector("#logo img");

  setTimeout(() => {
  document.querySelector("#logo img").classList.add("Show");
  }, 300);

  setTimeout(() => {
    if (localStorage.getItem("mostrarElemento" === "true")) {
      document.querySelector("#logo img").classList.add("Show");
    }
  }, 300);
});
