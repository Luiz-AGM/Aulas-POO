console.log ("===POO===")

//Questão 1

// Crie um objeto de nome aluno e adicione as seguintes propriedades:
// nome, matricula e idade.
// Crie neste mesmo objeto aluno, uma função que receba como parâmetro o curso do aluno,
// o parâmetro deverá ter um default, adicione esse parâmetro recebido em uma propriedade do objeto aluno.
// Retorne o objeto aluno ANTES da chamada da função.
// Retorne o objeto aluno APÓS a chamada da função

const aluno = {
    nome : "José",
    matricula : "010203",
    idade : "33",
    curso : "Português",
    nomeCurso(curso = "") {
        return (" Ola: " + this.nome + "," + " Matricula: " + this.matricula + " Idade: " + this.idade + 
        " Curso: " + curso)
    },
};
    console.log  (" Olá: " + aluno.nome + "," + " Matrícula: " + aluno.matricula + " Idade: " + 
    aluno.idade + " Curso: " + aluno.curso);

    const msg = aluno.nomeCurso("Matemática");
    console.log(msg)


//Questão 2 

// Crie um objeto de nome Ave e adicione um atributo de nome espécie.
// Dentro do objeto Ave crie uma função, que retorno o atributo espécie.
// Retorne o objeto invocando a função criada.
// Após o retorno do objeto invocando a função, crie um objeto de nome Peixe e através do bind 
// faça ele retornar a espécie do objeto peixe.

const ave = {
    especie : "Águia Cinzenta",
    getEspecie: function() {
        return this.especie;
    }
};
console.log (ave.getEspecie());

let peixe = {
    especie : "Tilápia"
};

let especie2 = ave.getEspecie.bind(peixe);
console.log(especie2());


//Questão 3
// Crie uma função construtora, para criar um "Aluno".
// Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.
// Instancie o Aluno e printe o resultado.
// Utilizando a estrutura de aluno, adicione uma função que retorne o curso do aluno através do prototype 
// da função.
// Invoque a função e printe o resultado

function Aluno (nome, idade, email, matricula, curso){
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.matricula = matricula,
    this.curso = curso
};

Aluno.prototype.getcurso = function () {
    return this.curso;
};
    
const Aluno1 = new Aluno (
"José",
33,
"jose@email.com",
123456,
"Matemática"
);

console.log(Aluno1);
console.log(Aluno1.getcurso());