const prompt = require('prompt-sync')();

let a = prompt("Escribe el valor de la primera variable (a): ");
let b = prompt("Escribe el valor de la segunda variable (b): ");

let temp = a;
a = b;
b = temp;

console.log("Ahora el valor de a es: " + a);
console.log("Y el valor de b es: " + b);
