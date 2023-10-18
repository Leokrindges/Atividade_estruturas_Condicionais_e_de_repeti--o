// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let totalSalariosHomem = 0;
let totalSalariosMulher = 0;
let sexo;
let continuar = "s";
let salario;

do {
    sexo = prompt("Qual é o sexo do funcionário? [M/F]");
    salario = Number(prompt("Digite o salário do funcionário"));
    continuar = prompt("Deseja continuar? [S/N]")

    if (sexo == "m" || sexo == "M") {
        totalSalariosHomem += salario;
    }
    if (sexo == "f" || sexo == "F") {
        totalSalariosMulher += salario;
    }
} while (continuar == "s" || continuar == "S");

document.write(`Total pago para os homens é de: R$ ${totalSalariosHomem} <br>`);
document.write(`Total pago para as mulheres é de: R$ ${totalSalariosMulher}`);

