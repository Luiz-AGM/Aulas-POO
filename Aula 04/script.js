class Bank {
    constructor(name, account, balance, passcode, limite) {
        this.name = name,
        this.account = account,
        this.balance = balance,
        // this.type = type;
        this.passcode = passcode,
        this.logui = [],
        this.limite = limite
    }
    get Balance() {
        if (this.passcode = 'passcode'){
            return this.balance;
        }else{
            return 'Senha incorreta';
        }
    }
    get Name() {
        return this.name;
    }
    // get Type() {
    //     return this.type;
    // }
    set Cpf(c) {
        this.cpf = c;
    }
    get Cpf() {
        return this.cpf;
    }
    saque = (valor) => {
        
        if (valor <= this.balance){
            this.balance -= valor;
            this.logui.push(-valor);
            return "Valor retirado: R$ -" + valor;
        }else{
            return "Valor indisponível";
        }
    }
    deposito = (valor) => {
        this.balance += valor;
        return "valor adicionado com sucesso: R$ +" + valor;
    }
    extrato = () => {
        for(var i = 0;i < this.logui.length();i++) {
            console.log(this.logui[i]);
        }
    }
    emprestimo = (valor) => {
        if(valor <= this.limite) {
            this.limite -= valor;
            this.balance = this.balance - valor;
            return "Empréstimo de R$ " + valor + ' realizado.';
        }else{
            return 'Empréstimo indisponível';
        }
    }
}

class PJ extends Bank{
    constructor(name, account, balance, passcode, cnpj, limite = 20000) {
        super(name, account, balance, passcode);
        this.cnpj = cnpj,
        this.limit = limite;
    }
}

class PF extends Bank{
    constructor(nome, account, balance, passcode,cpf, limite = 10000) {
        super(nome, account, balance, passcode, limite),
        this.cpf = cpf
    }
}

const joao = new PF('João', 0000, 2000, 'passcode', 01010101);
console.log(joao); // PF {name: 'João', saque: ƒ, deposito: ƒ, extrato: ƒ, emprestimo: ƒ, …}
console.log(joao.saque(300)); // Valor retirado: R$ -300
console.log(joao.extrato);
console.log(joao.saque(3000)); // Valor indisponível
console.log(joao.emprestimo(4000)); // Empréstimo de R$ 2700 realizado.
console.log(joao.saque(3000)); // Valor indisponível