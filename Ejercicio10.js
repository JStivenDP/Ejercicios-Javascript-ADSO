const prompt = require('prompt-sync')();

let numero = prompt("Escribe un número: ");
numero = Number(numero);

let esPar = numero % 2 === 0;

console.log(esPar);
