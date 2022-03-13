console.log ("=== Aula 2 - exercicios de fixação ===")

// Questão #1

// Crie um objeto do tipo curso que tenha os seguintes atributos:
// nome
// p1
// p2
// media
// Usando o setter insira o nome do curso, p1 e p2. Para a média considere a seguinte condição: Se, nota 
// da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" Se, nota 
// da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

// Crie um get que retorne uma mensagem informando o nome do curso e sua média.

let curso = {

    get nomeCurso (){
        return this.nome
    },
    set nomeCurso (n) {
        this.nome = n
    },
    get nota1 () {
        return this.p1
    },
    set nota1 (a) {
        this.p1 = a
    },
    get nota2 () {
        return this.p2
    },
    set nota2 (b) {
        this.p2 = b
    },
    get valorMedia() {
        if (this.p1 === 0) {
            return "A nota da p1 foi 0, não vai ser possível fazer uma média"
        }
        if (this.p1 > 0) {
            return (this.p1 + this.p2) / 2;
        }
    },
    get mensagem () {
        return " Curso : " + this.nome + " / Média : " + curso.valorMedia
    },
}
curso.nota1 = 8;
curso.nota2 = 6;
curso.nomeCurso = "POO";
console.log (curso.mensagem)


// // Questão #2

let TV = {
    canal : 0,
    volume : 0,
    ligada : true,    
}
liga = function () {
    return this.ligada = true;
}
desliga = function () {
    return this.ligada = false;
}
mudaDeCanal = function () {
    return this.canal+=1;
}
aumentaVolume = function () {
    return this.volume+=1;
}
diminuiVolume = function () {
    return this.volume-=1;
}


// Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, 
// mudaDeCanal e aumentaVolume, diminuiVolume.]


// Questão #3

// Refaça o exercício da TV utilizando uma função construtora
function constroiTv (canal, volume, ligada) {
this.canal = canal,
this.volume = volume,
this.ligada = ligada
}
constroiTv.liga = function () {
    console.log (this.ligada = true);
}
constroiTv.desliga = function () {
    console.log (this.ligada = false);
}
constroiTv.mudaDeCanal = function () {
    console.log ("mudando de canal");
}
constroiTv.aumentaVolume = function () {
    console.log ("aumentando volume");
}
constroiTv.diminuiVolume = function () {
    console.log ("diminuindo volume");
}

// Refaça o exercício da TV utilizando a sintaxe de classe (class).
class tv {
    constructor (canal, volume, ligada) {
        this.canal = canal,
        this.volume = volume,
        this.ligada = ligada 
    }
    liga = function (ligado) {
        this.ligada = ligado === true;
    }
    desliga = function (ligado) {
        this.ligado = ligado === false;
    }
    mudaDeCanal = function (canalAtual, novoCanal) {
        this.canal = canalAtual + novoCanal;
    }
    aumentaVolume = function (volumeAtual, novoVolume) {
        this.volume = volumeAtual + novoVolume;
    }
    diminuiVolume = function (volumeAtual, novoVolume) {
        this.volume = volumeAtual - novoVolume;
    }
}