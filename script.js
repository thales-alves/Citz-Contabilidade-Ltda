function escondido() {
  var texto = document.getElementById("escondido");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    texto.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondido2() {
  var texto = document.getElementById("escondido2");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    texto.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondido3() {
  var texto = document.getElementById("escondido3");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    texto.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondido4() {
  var texto = document.getElementById("escondido4");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    texto.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondido5() {
  var texto = document.getElementById("escondido5");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    texto.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondido6() {
  var texto = document.getElementById("escondido6");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    texto.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondido7() {
  var texto = document.getElementById("escondido7");
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    texto.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

// Função para verificar a posição de rolagem da página
function checkScroll() {
  var header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('smaller'); // Adiciona a classe 'smaller' quando a página é rolada para baixo
  } else {
    header.classList.remove('smaller'); // Remove a classe 'smaller' quando a página está no topo
  }
}

// Verifica a posição de rolagem quando a página é carregada e quando a página é rolada
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
