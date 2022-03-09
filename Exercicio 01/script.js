console.log ("===POO===")

//Questão 1

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