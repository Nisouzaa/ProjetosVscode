document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    document.getElementById("dropbtn").addEventListener("click", function(event) {
        event.stopPropagation(); // Impede o fechamento imediato ao clicar
        document.getElementById("dropdown-content").classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        var dropdown = document.getElementById("dropdown-content");
        if (!event.target.matches(".dropbtn")) {
            dropdown.classList.remove("show");
        }
    });
});