class Estudiante {
    constructor(nombre, materias) {
        this.nombre = nombre;
        this.materias = materias;
    }

    listarMaterias() {
        console.log(`Materias de ${this.nombre}:`);
        this.materias.forEach(m => console.log("- " + m));
    }
}

const e1 = new Estudiante("Juan", ["Matemáticas", "Inglés", "Programación"]);
e1.listarMaterias();