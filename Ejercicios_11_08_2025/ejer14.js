const prompt = require('prompt-sync')();

for (let fila = 1; fila <= 6; fila++) {
    let linea = "";
    for (let col = 1; col <= fila; col++) {
        linea += "* ";
    }
    console.log(linea.trim());
}