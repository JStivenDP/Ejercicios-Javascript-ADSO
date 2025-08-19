function numeroDePalabras(frase) {
    let palabrasSeparadas = frase.trim().split(" ");
    let totalPalabras = 0;
    for (let indice = 0; indice < palabrasSeparadas.length; indice++) {
        if (palabrasSeparadas[indice].length > 0) {
            totalPalabras++;
        }
    }
    return totalPalabras;
}
console.log(numeroDePalabras("analisis y desarrollo de software"));