// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

let nome = prompt("Nome.");
let sexo = prompt("Qual é o sexo? [M/F]");
let valor = Number(prompt("Qual foi o valor gasto?"));
let descontoHomem = 0.05;
let descontoMulher = 0.13;
let PrecoComdesconto;

if (sexo == "f" || sexo == "F") {
    PrecoComdesconto = valor - (valor * descontoMulher);
    document.write(`${nome} comprou R$ ${valor} e pagará R$ ${PrecoComdesconto}`);
};

if (sexo == 'M' || sexo == "m") {
    PrecoComdesconto = valor - (descontoHomem * valor);
    document.write(`${nome} comprou R$ ${valor} e pagará R$${PrecoComdesconto}`);
};