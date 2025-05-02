// Quando a animação acabar, mostra o conteúdo
setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
  }, 4000); // Tempo total da animação: 2s de exibição + 2s de fade  

// Espera o site carregar completamente
window.addEventListener("load", function () {
    // Esconde a tela de loading
    document.getElementById("loading").style.display = "none";
    // Mostra o conteúdo
    document.getElementById("conteudo").style.display = "block";
  });