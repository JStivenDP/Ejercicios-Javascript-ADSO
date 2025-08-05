const prompt = require('prompt-sync')();

let horas = prompt("Ingresa la cantidad de horas que desea convertir a segundos: ");
let minutos = prompt("Ingresa la cantidad de minutos que desea convertir a segundos: ");

horas = Number(horas);
minutos = Number(minutos);

let totalSegundos = (horas * 60 * 60) + (minutos * 60);

console.log("El tiempo total en segundos es: " + totalSegundos);
