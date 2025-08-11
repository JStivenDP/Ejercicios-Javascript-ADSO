/*Mostrar en pantalla los multipos de 3 entre 2 números ingresados por teclado*/

const prompt = require('prompt-sync')();
const n1 = prompt("Ingrese número entero inferior: ");
const n2 = prompt("Ingrese número entero superior: ");

let mayor = 0
let menor = 0

if(n1 > n2) {
    mayor = n1
    menor = n2
}else{
    mayor = n2
    menor = n1
}

for(let valor=menor; valor <= mayor; valor++) {
    if(valor% 3 === 0) {
        console.log(valor);
    }
}