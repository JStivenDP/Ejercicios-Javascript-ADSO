const prompt = require('prompt-sync')();

const numPrimo = parseInt(prompt("pone un numero primo"));


let esPrimo = true;

    if (numPrimo <= 1) {
        esPrimo = false;
    } else {

    for (let i = 2; i <= Math.sqrt(numPrimo); i++) {

    if (numPrimo % i === 0) {

        esPrimo = false;
    break;
            }
        }
    }

    console.log("el numero " + numPrimo + (esPrimo ? " es primo" : " no es primo"));