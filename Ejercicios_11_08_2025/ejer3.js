const prompt = require('prompt-sync')();

const edad = parseInt(prompt("cual es tu edad: "));

const tieneCedula = prompt("¿Tiene cédula de ciudadania? sisas o nonas: ").toLowerCase() === 'si';

const cedulaInscrita = prompt("¿Esta su cedula inscrita ? : ").toLowerCase() === 'si';

    if (edad >= 18 && tieneCedula && cedulaInscrita) {                   
        console.log("puedes votar.");
    } else {
        console.log("no puedes votar.");
    }