const prompt = require('prompt-sync')();

const numeropi = parseFloat(prompt("Ingrese un número: "));

if (isNaN(numeropi)) {
    console.log("Error: No ingresaste un número válido.");
} else if (!Number.isInteger(numeropi)) {
    console.log("Por favor ingrese un número entero. Los decimales no se consideran par o impar.");
} else {
    const esPar = (numeropi % 2) === 0;
    console.log("El número " + numeropi + " es " + (esPar ? "par" : "impar"));
}