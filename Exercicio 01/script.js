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

