const alunos = ['Joao', 'Maria', 'Pedro', 'Ana', 'Gustavo', 'Lucas' , 'Diego', 'Jose', 'Andre', 'Paula']
const notas = [10, 7, 3, 6, 8, 7, 9, 5, 4, 8]
const notasAlunos = alunos.map(function (boletim) {
    boletim = {
        aluno: boletim,
        nota: notas[alunos.indexOf(boletim)]
        }
        return(boletim)
    }
);
notasAlunos.forEach( function (nota) {
 if (nota.nota >= 6) {
    console.log(nota.aluno + ' está aprovado')
 } else {
    
}});
