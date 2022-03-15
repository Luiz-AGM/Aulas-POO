console.log ("===Exercicio 3 - 03 ===")

// // Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), 
// // uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta 
// // (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.

class veiculo {
    constructor (rodas, usaCombustivel = true) {
        this.rodas = rodas;
        this.usaCombustivel = usaCombustivel
    }
}
class carro extends veiculo {
    constructor (rodas, usaCombustivel, tipoDeCombustivel)  {
        super (rodas, usaCombustivel );
        this.tipoDeCombustivel = tipoDeCombustivel
    }
    get combustivel () {
        if (combustivel === "gasolina" || 
            combustivel === "alcool" || 
            combustivel === "flex") {
                return this.tipoDeCombustivel = combustivel
            }
    }
}
class bicicleta extends veiculo {
    constructor (rodas,usaCombustivel, infantil = true) {
        super (rodas, usaCombustivel);
        this.infantil = infantil
    }
    get verificaRodas () {
        if (rodas >2 && this.usaCombustivel === true) {
            return "não é uma bicicleta" 
        } else {
            return "é uma bicicleta"
        }
    }
}