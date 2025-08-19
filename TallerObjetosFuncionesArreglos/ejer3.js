
function cantidadDePares(lista) {
    let totalPares = 0;
    for (const valor of lista) {
        if (valor % 2 === 0) {
            totalPares++;
        }
    }
    return totalPares;
}

console.log(cantidadDePares([10, 20, 30, 40]));
