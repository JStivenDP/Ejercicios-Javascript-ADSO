const prompt = require('prompt-sync')();

const decimal = parseInt(prompt("un numero decimal pelao, pongalo"));

if (isNaN(decimal)) {
    console.log("anda busca que es un decimal en julioprofe");
} else {
    const binario = decimal.toString(2);
    console.log(`el numero decimal que me diste ${decimal} en binario es: ${binario}`);
}