// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let contaAlunos = 0;
let media = 0;
let idade;
let somaIdade = 0;

do {
    idade = Number(prompt("Digite uma idade, para parar o programa digite '999'"));
    if (idade != 999) {
        contaAlunos++;
        somaIdade += idade;
        media = somaIdade / contaAlunos;
    }
} while (idade != 999);

document.write(`A turma tem ${contaAlunos} aluno(s) e a média de idade é de ${media}`);