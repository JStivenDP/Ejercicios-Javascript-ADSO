const prompt = require('prompt-sync')();

const n1 = parseInt(prompt("pone el primer entero"));
const n2 = parseInt(prompt("ahora el segundo"));

let sumaPares = 0;
let sumaImpares = 0;
let contadorImpares = 0;

const inicio = Math.min(n1, n2);
const fin = Math.max(n1, n2);

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        contadorImpares++;
    }
}

console.log("vea, la suma de los enteros pares es" + sumaPares);

if (contadorImpares > 0) {
    const promedioImpares = sumaImpares / contadorImpares;
    console.log("el promedio de esos enteros:" + promedioImpares.toFixed(2));
} else {
    console.log("estas josdido, no hay impares");
}