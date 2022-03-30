/*
No cliente pessoa física, criar um método
onde retorna os dados de rg e cpf.
No cliente pessoa juridica, criar um método
onde retorna os dados do cnpj

Utilize o conceito de Polimorfismo para execução da solicitação acima


Crie um Objeto Lançamentos 
e para cada operação de saque ou depósito
Insira os seguintes registros nessa classe:
  - Nome do Cliente
  - Tipo da Operação (se foi saque ou se foi depósito)
  - Valor
  - Horario da Transação
Considerando o conceito de encapsulamento
deixe o saldo bancário do cliente inacessível fora do escopo de conta.
Lembre-se apenas o escopo de conta poderá movimentar o saldo bancário.

Crie um método que calcule o juros de atraso 
de um determinado pgto, onde tenha as seguintes regras: 
- Atraso de 1 dia juros de 1%
- Atraso de 2 dias juros 2.5 % 
- Atraso de 3 dias ou mais, juros composto 
*/

let lancamento = [];

let objeto = {
  nome:"",
  valor:"",
  tipo:"",
  data:""
}

class Conta{
    #saldo // propriedade privada

    // função construtora
    constructor(nome, conta, agencia, saldo){
        this.nome = nome;
        this.conta = conta;
        this.agencia = agencia;
        this.#saldo = saldo
    }
    // métodos
    transferencia (valorDaTranferencia){
        if (valorDaTranferencia <= this.#saldo){
            this.#saldo = this.#saldo - valorDaTranferencia;
            var data = new Date();
            objeto = {
                nome:this.nome,
                valor:valorDaTranferencia,
                tipo:"Transferencia",
                data:`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
              }
            lancamento.push(objeto)
            return `Seu saldo é ${this.#saldo} e foi transferido ${valorDaTranferencia}`
        } else {
            return ("Não é possivel transferir")
        }
    }

    saque (valorDoSaque){
        if (valorDoSaque <= this.#saldo){
            this.#saldo = this.#saldo - valorDoSaque;
            var data = new Date();
            objeto = {
                nome:this.nome,
                valor:valorDoSaque,
                tipo:"Saque",
                data:`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
              }
            lancamento.push(objeto)
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

    pagarBoleto(valorBoleto, diaVencimento){
        var venc = new Date(diaVencimento);
        var hoje = new Date();
        
        var objetoBoleto = {
            nome:this.nome,
            valor:valorBoleto,
            tipo:"Pagamento Boleto",
            data:`${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()}`
        }
        
        var diff = venc - hoje;
        var diasAtraso = ((diff / 86400000) + 1).toFixed();
        var umDia = (valorBoleto + valorBoleto * 0.01).toFixed(2).replace('.', ',');
        var doisDias = (valorBoleto + valorBoleto * 0.025).toFixed(2).replace('.', ',');
        var composto = valorBoleto + (valorBoleto * (1.03 * (diasAtraso * -1 / 100)));

            if(diasAtraso <= -3 && composto <= this.#saldo){
                this.#saldo = this.#saldo - composto;
                objeto.valor = composto;
                lancamento.push(objetoBoleto);
            } else if (diasAtraso <= -2 && doisDias <= this.#saldo){
                this.#saldo = this.#saldo - doisDias;
                objeto.valor = doisDias;
                lancamento.push(objetoBoleto);
            } else if (diasAtraso <= -1 && umDia <= this.#saldo){
                this.#saldo = this.#saldo - umDia;
                objeto.valor = umDia;
                lancamento.push(objetoBoleto);
            } else if (valorBoleto <= this.#saldo){
                this.#saldo = this.#saldo - valorBoleto;
                lancamento.push(objetoBoleto);
            } else {
                return "Sem Saldo";
            }
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

const cliente = new Conta("Augusto", "Corrente", "Agencia", 4000);

cliente.saque(100);
cliente.saque(200);
cliente.transferencia(50);
cliente.pagarBoleto(100, "2022/03/17");
cliente.pagarBoleto(250, "2022/03/16");
cliente.pagarBoleto(500, "2022/03/10");
cliente.pagarBoleto(75, "2022/03/23");
console.log(lancamento);





