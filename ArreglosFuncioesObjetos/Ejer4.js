let frutas = ["Manzana", "Banana", "Cereza"];
console.log(frutas[0]);//imprime Manzana
console.log(frutas.length);//imprime 3, tamaño del arreglo
frutas.push("Naranja");//agrega Naranja al final del arreglo
console.log(frutas);//imprime ["Manzana", "Banana", "Cereza", "Naranja"]
frutas.pop();//elimina el último elemento del arreglo
console.log(frutas);//imprime ["Manzana", "Banana", "Cereza"]
frutas.unshift("Fresa");//agrega Fresa al inicio del arreglo
console.log(frutas);//imprime ["Fresa", "Manzana", "Banana", "Cereza"]

for(fruta in frutas) {
    console.log(fruta);//imprime los índices del arreglo: 0, 1, 2, 3
}

frutas.forEach(fruta => {
    console.log(fruta);//imprime cada fruta: Fresa, Manzana, Banana, Cereza
});

let numeros = [];

numeros.push(5);
numeros.push(7);
numeros.unshift(20);
console.log(numeros); //imprime [20, 5, 7]
numeros.push(100);
numeros.push(25);
console.log(numeros); //imprime [20, 5, 7, 100, 25]

for (let i=0;i<numeros.length;i++) {
    console.log(`numero ${numeros[i]} en la posición ${i}`); //imprime cada número: 20, 5, 7, 100, 25
}

numeros.forEach((numero,i) => {
    console.log(`numero ${numero} en la posición ${i}`); //imprime cada número con su posición
})



let valores = [1, 2, 3, 4, 5, 2, 3, 4, 5];

let cuadrados = valores.map(valor => valor * valor);
console.log(cuadrados); //imprime [1, 4, 9, 16, 25, 4, 9, 16, 25]

let cuadra = []

valores.forEach(valor => {
    cuadra.push(valor * valor);
});

console.log(cuadra); //imprime [1, 4, 9, 16, 25, 4, 9, 16, 25] 