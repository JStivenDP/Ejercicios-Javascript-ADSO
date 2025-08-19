function buscarIndice(lista, elemento) {
    let posicion = -1;
    for (let idx = 0; idx < lista.length; idx++) {
        if (lista[idx] === elemento) {
            posicion = idx;
            break;
        }
    }
    return posicion;
}
console.log(buscarIndice([5, 15, 25, 35], 15));
console.log(buscarIndice(["x", "y", "z"], "y"));