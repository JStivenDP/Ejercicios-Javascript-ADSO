function sustituirValor(lista, antiguo, nuevo) {
    for (let idx = 0; idx < lista.length; idx++) {
        if (lista[idx] === antiguo) {
            lista[idx] = nuevo;
        }
    }
    return lista;
}
console.log(sustituirValor([10, 20, 30, 40], 30, 99));
console.log(sustituirValor(["gato", "perro", "pez"], "perro", "conejo"));