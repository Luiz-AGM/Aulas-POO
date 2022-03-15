console.log ("===Exercicio 3===")

// Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. 
// Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de 
// perfil deve ser uma url (iniciada com http ou https).

class perfil {
    constructor (nome, avatar, tema) {
    this.nome = nome;
    this.avatar = avatar;
    this.tema = tema
    };
    get theme() {
        return this.tema
    };
    set theme(a) {
        this.tema = "Dark || Light"
    }
    get fotoP () {
        return this.avatar
    };
    set fotoP(x) {
        this.avatar = URL
    }
};
/*class perfil{
    constructor(nome, avatar, tema ){
        this.nome=nome,
        this.avatar=avatar,
        this.tema=tema;
       
    }
    get avatar1(){
        return this.avatar
    }
    set avatar1(n){
        this.avatar=n
    }
    get tema1(){
        return this.tema
    }
    set tema1(t){
        this.tema=t
    }
   
}
let p1 = new perfil("joão", "url", "light"||"dark")
console.log(p1)


// Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta 
// utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() 
// que reseta os passos para 0.
class smartWatch {
    constructor (contagem) {
        this.contagem = contagem;
    }

}

// class SmartWatch{
//     #passos
//     constructor(cont){
//         this.cont=cont
//         this.#passos= this.#resetOnMidnight()
//     }
//     get cont1(){
//         return this,this.cont++
//     }
//     set cont1(c){
//         this.cont= c
//     }
   
//     get passos1 (){
//         return this.#passos++
//     }
//     set passos1(p){
//         this.#passos=p
//     }
//     #resetOnMidnight=()=>{
//         return this.#passos===0
//         this.cont+1
//     }
 
// }
// let relogio= new SmartWatch(100)

// console.log(SmartWatch.cont)

// Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), 
// uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta 
// (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.
class veiculo {
    constructor (rodas, usaCombustivel = true) {
        this.rodas = rodas;
        this.usaCombustivel = usaCombustivel
    };
}
class carro extends veiculo {
    constructor (rodas, usaCombustivel, tipoDeCombustivel)  {
        super (rodas, usaCombustivel );
        this.tipoDeCombustivel = tipoDeCombustivel
    };
}
class bicicleta extends veiculo {
    constructor (rodas,usaCombustivel, infantil = true) {
        super (rodas, usaCombustivel);
        this.infantil = infantil
    };
};