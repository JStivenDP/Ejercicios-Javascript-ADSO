/*
Hacer un script que lea un numero entero y como resultado imprimir en pantalla la suma de sus digitos
*/

/*const prompt = require('prompt-sync')();

let N_entero = prompt("Ingrese un número entero: ");

let suma = 0;
for (let i = 0; i < N_entero.length; i++) {
    suma += parseInt(N_entero[i]);
}
console.log("La suma de los dígitos del número ingresado es: " + suma);*/

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número entero: "));
let suma = 0;
let original = numero;
numero = Math.abs(numero); // Para manejar negativos

while (numero > 0) {
    let digito = numero % 10;
    suma += digito;
    numero = Math.floor(numero / 10);
}
console.log(`La suma de los dígitos de ${original} es: ${suma}`);