const prompt = require('prompt-sync')();

let lado = prompt("Escribe la medida de un lado del cuadrado en centimetros: ");
lado = Number(lado);

let area = lado * lado;
let perimetro = lado * 4;

console.log("El area del cuadrado es de: " + area, "cm²");
console.log("El perímetro del cuadrado es de: " + perimetro, "cm");
