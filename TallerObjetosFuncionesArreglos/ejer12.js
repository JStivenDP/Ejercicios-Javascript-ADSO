
const prompt = require('prompt-sync')();
let precios = new Map();
let historial = [];
let productosUnicos = new Set();

function agregarProducto(nombre, precio) {
    precios.set(nombre, precio);
    historial.push(nombre);
    productosUnicos.add(nombre);
}

let continuar = 's';
while (continuar.toLowerCase() === 's') {
    let nombre = prompt('Ingrese el nombre del producto: ');
    let precio = parseFloat(prompt('Ingrese el precio del producto: '));
    agregarProducto(nombre, precio);
    continuar = prompt('¿Desea ingresar otro producto? (s/n): ');
}

console.log('Productos únicos:', Array.from(productosUnicos));
console.log('Precios:', Array.from(precios.entries()));
console.log('Historial:', historial);