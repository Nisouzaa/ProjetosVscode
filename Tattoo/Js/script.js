// Menu responsivo
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Formulário de cadastro
document.getElementById("cadastroForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("msg-sucesso").style.display = "block";
  this.reset();
});
