const nome = document.getElementById("nome");
const email = document.getElementById("email");

// let frutas = ['pitaya', 'banana', 'morango', 'tangirina', 'kiwi', 'caqui', 'ciriguela', 'macaiba', 'ameixa', 'goiaba', 'maracuja', 'melancia']
// let personagens= ['naruto', 'goku', 'hulk', 'batman', 'aquaman', 'thor', 'popay', 'chapolim', 'levi', 'sasuke', 'pan', 'sakura']
// let cor= ['rosa', 'azul', 'branco', 'amarelo', 'anil', 'vermelho', 'laranja', 'vinho', 'roxo', 'verde', 'preto', 'laranja']
// let paises= ['brasil', 'argentina', 'uruguai', 'paraguai', 'chile', 'canada', 'frança', 'ucrania', 'russia', 'argelia', 'cuba', 'inglaterra']
const tecnologias = [ "java", "react", "node", "python", "php"];
const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];
const letrasErradas = [];
const letrasCorretas = [];

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode;
    if (isLetra(codigo)) {
        const letra = evento.key;
        if (letrasErradas.includes(letra)) {
            alert ("Você já digitou essa letra.");
        } else {
            if (palavraSecreta.includes(letra)) {
                letrasCorretas.push(letra);
            } else {
                letrasErradas.push(letra);
            }
        }
        atualizarJogo();
    }
})

function atualizarJogo() {
    mostrarLetrasErradas();
    mostrarLetrasCertas();
    checarJogo();
    }

function mostrarLetrasErradas() {
const div = document.querySelector(".letras-erradas-container");
div.innerHTML = "<h3>Letras erradas</h3>";
letrasErradas.forEach(letra => {
    div.innerHTML += `<span>${letra}</span>`;
});
}

function mostrarLetrasCertas() {
    const container = document.querySelector(".palavra-secreta-container");
    container.innerHTML = "";
    palavraSecreta.split("").forEach((letra) => {
      if (letrasCorretas.includes(letra)) {
        container.innerHTML += `<span>${letra}</span>`;
      } else {
        container.innerHTML += `<span>_</span>`;
      }
    });
  }

function checarJogo(){
    // const vitoria = 0;
    // const derrota = 0;
     chances = 7;
    const container = document.querySelector(".palavra-secreta-container");

    if(letrasErradas.length === chances) {
        alert("Fim de jogo! Você perdeu!");
    }
    if (palavraSecreta === container.innerText) {
        alert("Parabens! Você ganhou!");
    }
}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
    window.location.reload();
  }