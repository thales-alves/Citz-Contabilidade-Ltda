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
};

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

function escondidoFAQ1() {
  var text = document.getElementById("escondidoFAQ1");
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    text.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondidoFAQ2() {
  var text = document.getElementById("escondidoFAQ2");
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    text.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondidoFAQ3() {
  var text = document.getElementById("escondidoFAQ3");
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    text.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondidoFAQ4() {
  var text = document.getElementById("escondidoFAQ4");
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    text.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondidoFAQ5() {
  var text = document.getElementById("escondidoFAQ5");
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    text.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}

function escondidoFAQ6() {
  var text = document.getElementById("escondidoFAQ6");
  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block"; // Exibe o conteúdo quando clicar no texto
  } else {
    text.style.display = "none"; // Oculta o conteúdo se já estiver visível
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const nomes = ['info1', 'info2', 'info3', 'info4', 'info5', 'info6', 'info7', 'info8'];

  nomes.forEach(nome => {
    const nomeElement = document.getElementById(nome);
    const infoElement = document.getElementById(`info${nome.charAt(nome.length - 1)}`);

    nomeElement.addEventListener('mouseenter', function () {
      // Esconder todas as infos
      document.querySelectorAll('.info').forEach(info => {
        info.style.display = 'none';
      });

      // Mostrar a info correspondente
      infoElement.style.display = 'block';
    });
  });
});


