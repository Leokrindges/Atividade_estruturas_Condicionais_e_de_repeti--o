// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let precoAte200KM = 0.50;
let precoAcima200KM = 0.45;
let passagem;

let distância = Number(prompt("Qual é a distancia em KM que deseja percorer?"));

if (distância <= 200) {
    passagem = distância * precoAte200KM;
};

if (distância > 200) {
    passagem = distância * precoAcima200KM;
};

document.write(`O preço da passagem para andar ${distância} km é de R$ ${passagem}`);