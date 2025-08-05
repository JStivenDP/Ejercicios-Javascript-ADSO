const prompt = require('prompt-sync')();

let n1 = prompt("Ingresa el primer número entero: ");
let n2 = prompt("Ingresa el segundo número entero: ");
let n3 = prompt("Ingresa el tercer número entero: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

let media = (n1 + n2 + n3) / 3;

console.log("La media de los tres números ingresados es: " + media);
