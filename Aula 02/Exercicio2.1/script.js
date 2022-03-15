console.log ("=== Exercicio 2.1===")

// Questão #1

// Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou 
// igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. Se o país for BR deve 
// também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).

class CNH {
    constructor (pais, idade) {
        this.pais = pais,
        this.idade = idade   
    }
    verificaPaisIdade() {
        if (this.pais === "BR" && this.idade >= 18) {
            return "Pode tirar a CNH"}
        if ((this.pais === "US" || this.pais === "CA") && this.idade >= 16) {
            return "Pode tirar a CNH"}
        if ((this.pais === "RU" || this.pais === "CH") && this.idade >= 21) {
            return "Pode tirar a CNH"}
        else {
            return "Não pode tirar a CNH"
        }
}
}
    class cnhbr extends CNH {
        constructor (pais = "BR", idade, categoria = "") {
            super (pais, idade)
            this.categoria = categoria
        }
    }

    let teste = new CNH ("CH", 20)
    console.log (teste);
    console.log (teste.verificaPaisIdade());
    
    let teste1 = new CNH ("CA", 17)
    console.log (teste1);
    console.log (teste1.verificaPaisIdade());
        
    let teste2 = new cnhbr ("BR", 17, "A" )
    console.log (teste2);
    console.log (teste2.verificaPaisIdade());
    
