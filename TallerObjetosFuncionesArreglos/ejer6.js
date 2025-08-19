
function reversaArray(elementos) {
    let resultado = [];
    for (let pos = 0; pos < elementos.length; pos++) {
        resultado[pos] = elementos[elementos.length - 1 - pos];
    }
    return resultado;
}

console.log(reversaArray([1, 2, 3, 4, 5]));
console.log(reversaArray(["a", "b", "c"]));