// classe "Pai"
class Conta{
    #saldo // propriedade privada

    // função construtora
    constructor(conta, agencia, saldo){
        this.conta = conta;
        this.agencia = agencia;
        this.#saldo = saldo
    }
    // métodos
    transferencia (valorDaTranferencia){
        if (valorDaTranferencia <= this.#saldo){
            this.#saldo = this.#saldo - valorDaTranferencia;
            return `Seu saldo é ${this.#saldo} e foi transferido ${valorDaTranferencia}`
        } else {
            return ("Não é possivel transferir")
        }
    }

    saque (valorDoSaque){
        if (valorDoSaque <= this.#saldo){
            this.#saldo = this.#saldo - valorDoSaque;
            return `Seu saldo é ${this.#saldo} e foi sacado ${valorDoSaque}`
        } else {
            return ("Não é possivel sacar")
        }
    }

    // instanciar novo valor em propriedade privada "saldo"
    set deposito(i){
        this.#saldo += i;
    }

    // acesso individual a propriedade privada "saldo"
    get saldo(){
        return `Seu saldo é ${this.#saldo}`
    }
}

// classe "Filho"
class PF extends Conta{
    #CPF// propriedade privada

    // função construtora
    constructor(nome, CPF, conta, agencia, saldo){
      super (conta, agencia, saldo)
      this.nome = nome;
      this.#CPF = CPF;
    }

    // método dados da pessoa física
    get dadosPf(){
        return `Seu nome é ${this.nome}, do CPF ${this.#CPF}, sua conta é ${this.conta} e agência ${this.agencia}`
    }

    // acesso individual a propriedade privada "CPF"
    get CPF(){
        return `${this.#CPF}`
    }

}

// classe "Neto"
class PJ extends PF{
    #CNPJ // propriedade privada
    // função construtora
    constructor(nome, CPF, conta, agencia, saldo, CNPJ = '', empresa = ''){
        super (nome, CPF, conta, agencia, saldo)
        this.#CNPJ = CNPJ;
        this.empresa = empresa;
    }
    // método dados de pessoa Jurídica
    get dadosPj(){
        return `Seu nome é ${this.nome}, do CPF ${this.CPF}, sua conta é ${this.conta} e agência ${this.agencia}, CNPJ ${this.#CNPJ} e empresa ${this.empresa}`
    }

    // acesso individual a propriedade privada "CNPJ"
    get CNPJ(){
        return `${this.#CNPJ}`
    }

}

// Utilizando "class PF"
const Decio = new PF("Décio Santana de Aguiar", '104.508.587-00',  '123456-7', '0715-X', 1000);
console.log(Decio)
console.log(Decio.transferencia(900))
console.log(Decio.saldo)
console.log(Decio.saque(90))
console.log(Decio.saldo)
Decio.deposito = 100;
console.log(Decio.saldo)
console.log(Decio.dadosPf)
console.log('//====================================//====================================//')
// Utilizando "class PJ"
const AMB = new PJ("Ana Maria Brega", '111.222.333-44',  '842024-8', '0715-X', 7000, '12345678\\0001', 'AMB SA.');
console.log(AMB)
console.log(AMB.transferencia(900))
console.log(AMB.saldo)
console.log(AMB.saque(90))
console.log(AMB.saldo)
AMB.deposito = 100;
console.log(AMB.saldo)
console.log(AMB.dadosPj)
console.log('//====================================//====================================//')
// Utilizando "class PJ"
const Santana = new PJ("Jaqueline", '984.509.666-69',  '336699-1', '0715-X', 500);
console.log(Santana)
console.log(Santana.transferencia(900))
console.log(Santana.saldo)
console.log(Santana.saque(90))
console.log(Santana.saldo)
Santana.deposito = 100;
console.log(Santana.saldo)
console.log(Santana.dadosPf)
console.log(Santana.dadosPj) // teste sem retorno "CNPJ" e "empresa"