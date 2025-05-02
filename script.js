    // Carrossel
    let slideIndex = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    function mostrarSlide(index) {
      if (index >= totalSlides) slideIndex = 0;
      else if (index < 0) slideIndex = totalSlides - 1;
      else slideIndex = index;

      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function avancarSlide() {
      mostrarSlide(slideIndex + 1);
    }

    function voltarSlide() {
      mostrarSlide(slideIndex - 1);
    }

    // Loop automático
    setInterval(() => {
      avancarSlide();
    }, 4000);

    // Modal
    const modal = document.getElementById("modalLogin");

    function abrirModal() {
      modal.style.display = "flex";
    }

    function fecharModal() {
      modal.style.display = "none";
    }

    window.onclick = function(e) {
      if (e.target === modal) fecharModal();
    }

    // Login
    function fazerLogin(e) {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      if (usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
        fecharModal();
      } else {
        alert("Usuário ou senha inválidos!");
      }
    }

    // === Tema Escuro ===
const botaoTema = document.getElementById("toggleTema");

// Aplica o tema salvo ao carregar
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
  botaoTema.textContent = "☀️ Tema Claro";
}

botaoTema.onclick = () => {
  document.body.classList.toggle("dark");
  const temaAtivo = document.body.classList.contains("dark");
  botaoTema.textContent = temaAtivo ? "☀️ Tema Claro" : "🌙 Tema Escuro";
  localStorage.setItem("tema", temaAtivo ? "dark" : "light");
};