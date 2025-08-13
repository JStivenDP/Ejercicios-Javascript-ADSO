const prompt = require('prompt-sync')();

let seguir = true;

while (seguir) {
const salario = parseFloat(prompt("Ingrese su salario mensual (o un valor negativo para salir): "));

    if (salario < 0) {

        seguir = false;

    } else {
        let tasa = 0;

    if (salario < 1000000) {

        tasa = 0.01;

    } else if (salario < 2000000) {

        tasa = 0.03;

    } else if (salario < 4000000) {

        tasa = 0.05;

    } else if (salario < 10000000) {

        tasa = 0.07;

    } else {
            tasa = 0.10;

    }

    const impuesto = salario * tasa;
        console.log("Debe pagar $" + impuesto.toFixed(2) + " de impuesto (" + (tasa * 100) + "%)");
    }
    
}