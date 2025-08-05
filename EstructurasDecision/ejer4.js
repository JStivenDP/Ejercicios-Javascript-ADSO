//switch
const prompt = require('prompt-sync')();

const mes = parseInt(prompt("Ingrese numero de mes: "));

switch(mes) {
    case 1:
        console.log("El mes es enero");
        break;
    case 2:
        console.log("El mes es febrero");
        break;
    case 3:
        console.log("El mes es marzo");
        break;
    case 4:
        console.log("El mes es abril");
        break;
    case 5:
        console.log("El mes es mayo");
        break;
    case 6:
        console.log("El mes es junio");
        break;
    case 7:
        console.log("El mes es julio");
        break;
    case 8:
        console.log("El mes es agosto");
        break;
    case 9:
        console.log("El mes es septiembre");
        break;
    case 10:
        console.log("El mes es octubre");
        break;
    case 11:
        console.log("El mes es noviembre");
        break;
    case 12:
        console.log("El mes es diciembre");
        break;
    default:
        console.log("Mes no valido");
}