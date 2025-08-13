const prompt = require('prompt-sync')();

const areaRectangulo = (base, altura) => {
    return base * altura;
}

let base = prompt("Ingrese base del rectangulo: ")
let altura = prompt("Ingrese altura del rectangulo: ");
let area = areaRectangulo(base, altura);
console.log(`El área del rectángulo es: ${area}`);