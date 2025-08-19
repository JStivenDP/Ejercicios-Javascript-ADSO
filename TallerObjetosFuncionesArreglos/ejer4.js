function calcularSumaYPromedio(arreglo) {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[i];
    }
    const media = total / arreglo.length;
    return `Suma: ${total}  Promedio: ${media}`;
}

console.log(calcularSumaYPromedio([1, 2, 3, 4, 5]));