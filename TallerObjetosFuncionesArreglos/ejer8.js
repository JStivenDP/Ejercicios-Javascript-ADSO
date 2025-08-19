
function convertirAMayusculas(listaNombres) {
    let nombresEnMayus = new Array(listaNombres.length);
    for (let idx = 0; idx < listaNombres.length; idx++) {
        nombresEnMayus[idx] = listaNombres[idx].toUpperCase();
    }
    return nombresEnMayus;
}

console.log(convertirAMayusculas(["Felipe", "Jhon", "Sebastian"]));
console.log(convertirAMayusculas(["Camilo", "Tatiana", "Esteban"]));