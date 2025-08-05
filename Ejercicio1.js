const prompt = require('prompt-sync')();

let valor = prompt("Ingresa el valor del producto: ");

let iva = prompt("Ingresa el IVA: ");

let total = Number(valor) + (Number(valor) * Number(iva) / 100);

console.log("Total a pagar: " + total);


