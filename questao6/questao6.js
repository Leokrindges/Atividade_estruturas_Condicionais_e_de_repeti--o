// Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP


let largura = Number(prompt("Qual é a largura do terreno?"));
let altura = Number(prompt("Qual é a altura do terreno?"));

let area = largura * altura;

if (area < 100) {
    document.write("TERRENO POPULAR");
} else if (area >= 100 && area <= 500) {
    document.write("TERRENO MASTER");
} else {
    document.write("TERRENO VIP");
};