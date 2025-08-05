const prompt = require('prompt-sync')();

let numero = prompt("Escribe un número de dos dígitos: ");
numero = Number(numero);

let decenas = Math.floor(numero / 10);
let unidades = numero % 10;

console.log("Unidades: " + unidades);
console.log("Decenas: " + decenas);
