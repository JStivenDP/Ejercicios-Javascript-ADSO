const prompt = require('prompt-sync')();

const inicio = parseInt(prompt("cual es el primer numero"));

const fin = parseInt(prompt("ahora el segundo numero"));

console.log("multiplos de 3 entre " + inicio + " y " + fin + ":");

    for (let i = inicio; i <= fin; i++) {

    if (i % 3 === 0) {
        console.log(i);
    }

}