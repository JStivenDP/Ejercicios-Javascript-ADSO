function quitarRepetidos(lista) {
    let unicos = [];
    for (let j = 0; j < lista.length; j++) {
        let yaExiste = false;
        for (let k = 0; k < unicos.length; k++) {
            if (lista[j] === unicos[k]) {
                yaExiste = true;
                break;
            }
        }
        if (!yaExiste) {
            unicos.push(lista[j]);
        }
    }
    return unicos;
}
console.log(quitarRepetidos([1, 2, 2, 3, 4, 5]));
console.log(quitarRepetidos(["a", "b", "a", "b"]));