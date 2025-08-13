const prompt = require('prompt-sync')();

const veces = parseInt(prompt("un numero entre 1 y 20"));

const frase = prompt("pone la frase que queras  ");

    if (veces >= 1 && veces <= 20) {

        for (let i = 0; i < veces; i++) {
            console.log(frase);
        }

    } else {
        console.log("entre 1 y 20 hueva");
    }