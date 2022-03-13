console.log ("=== AULA 3===")

// Crie uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia um 
// número que corresponderá ao número de inscrição do participante e declara o vencedor. 

class sorteio 
{

}


// 11. Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), 
// pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, 
// sendo 10 + 2 * pedidosPendentes em minutos). Os restaurantes devem ser capazes de realizar entregas 
// desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método 
// entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado 
// cliente ou não e,  em caso positivo, o tempo estimado de entrega.

// entregaPedido(cidade) {
//     if (cidade === this.cidade && this.delivery === true) {
//         return `O tempo de entrega é de ${this.tempoDeEntrega} minutos.`
//     } else if(cidade === this.cidade && this.delivery === false) {
//         return 'O estabelecimento está fechado'
//     } else {
//         return 'Não é possível realizar a entrega para essa cidade.'
//     }

class restaurante {
    constructor (cidade, delivery, pedidosPendentes, tempoDeEntrega) {
        this.cidade = cidade,
        this.delivery = delivery,
        this.pedidosPendentes = pedidosPendentes,
        this.tempoDeEntrega = tempoDeEntrega
    }
}
