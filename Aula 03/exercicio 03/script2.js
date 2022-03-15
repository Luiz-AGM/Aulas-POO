console.log ("===Exercicio 3 - 02 ===")


// // Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta 
// // utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() 
// // que reseta os passos para 0.

class smartWhach {
    constructor (contador, dia) {
        this.contador = contador
        this.dia = dia
}
get passos () {
    return this.contador
}
set passos (x) {
    this.contador = i++
}
verificaDia(diaAtual) {
    if (diaAtual !== this.dia) {
        contador = 0
    }
}
}

