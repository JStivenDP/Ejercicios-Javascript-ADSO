function nuevoEstudiante(nombreEst, calificaciones) {
    return {
        nombre: nombreEst,
        notas: calificaciones,
        obtenerPromedio() {
            return this.notas.reduce((acc, val) => acc + val, 0) / this.notas.length;
        }
    };
}
let alumno1 = nuevoEstudiante("Sofia", [4.5, 3.8, 5, 4.2, 4]);
console.log("nombre:", alumno1.nombre);
console.log("notas:", alumno1.notas);
console.log("promedio:", alumno1.obtenerPromedio());