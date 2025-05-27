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

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Criar estrelas
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speedY: Math.random() * 0.5 + 0.2,
    opacity: Math.random()
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();

    // Atualiza a posição
    star.y += star.speedY;
    star.opacity += (Math.random() - 0.5) * 0.05;
    star.opacity = Math.max(0.1, Math.min(1, star.opacity));

    // Se sair da tela, volta para cima
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animateStars);
}

animateStars();