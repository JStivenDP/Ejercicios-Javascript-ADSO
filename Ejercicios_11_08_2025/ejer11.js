const prompt = require('prompt-sync')();

const numFact = parseInt(prompt("pon un numero entero positivo"));

if (numFact < 0) {
    console.log("anda busca mas bien que es un entero");
} else {
    let factorial = 1;

    for (let i = 1; i <= numFact; i++) {
    factorial *= i;
    }

    console.log(`El factorial de ${numFact} es: ${factorial}`);
}