const prompt = require('prompt-sync')();

let km = prompt("Ingresa los kilometros recorridos: ");
let litros = prompt("Ingresa los litros de combustible consumido: ");

km = Number(km);
litros = Number(litros);

let consumo = litros / km;

console.log("Tu carro consumió " + consumo + " litros por kilómetro.");
