const prompt = require('prompt-sync')();

const numero = parseInt(prompt("pon un número entero: "), 10);

if (isNaN(numero)) {
    console.log("mal, no ingresaste un numero valido tonto.");
} else {
    let sumaDigitos = 0;
    let numTemp = Math.abs(numero);

    while (numTemp > 0) {
        sumaDigitos += numTemp % 10;
        numTemp = Math.floor(numTemp / 10);
    }

    console.log("La suma de los dígitos de " + numero + " es: " + sumaDigitos);
}