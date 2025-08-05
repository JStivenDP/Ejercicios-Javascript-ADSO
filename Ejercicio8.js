const prompt = require('prompt-sync')();

let personas = prompt("¿Para cuantas personas se preparará torta de papa?: ");
personas = Number(personas);

let papaGramos = personas * 200;
let kilosPapa = papaGramos / 1000;

let huevos = kilosPapa * 5;
let cebolla = kilosPapa * 300;

console.log("Se necesitan:" +papaGramos+ " gramos de papa, " +huevos+ " huevos y " +cebolla+ " gramos de cebolla.");
