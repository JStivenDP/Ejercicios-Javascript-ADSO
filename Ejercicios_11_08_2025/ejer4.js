const prompt = require('prompt-sync')();

const diaNum = parseInt(prompt("un numero entre 1 y 7: "));

let diaSemana = "";

switch (diaNum) {
    case 1: diaSemana = "lunes"; break;

    case 2: diaSemana = "martes"; break;

    case 3: diaSemana = "miércoles"; break;

    case 4: diaSemana = "jueves"; break;

    case 5: diaSemana = "viernes"; break;

    case 6: diaSemana = "sábado"; break;

    case 7: diaSemana = "domingo"; break;

    default: diaSemana = "entre 1 y 7 hueva";

}

console.log(diaSemana);    