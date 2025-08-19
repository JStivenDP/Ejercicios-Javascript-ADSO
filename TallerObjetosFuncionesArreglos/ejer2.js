function contarVocales(texto) {
    let cadena = texto.toLowerCase();
    let totalVocales = 0;
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
            totalVocales++;
        }
    }
    return totalVocales;
}

let palabra = "Johan";
let cantidad = contarVocales(palabra);
console.log(`La palabra es (${palabra}) y tiene (${cantidad}) vocales`);
