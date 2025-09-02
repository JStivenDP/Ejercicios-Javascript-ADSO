class Autor {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Editorial {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Libro {
    constructor(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
    }

    info() {
        console.log(`${this.titulo} - ${this.autor.nombre}, Editorial: ${this.editorial.nombre}`);
    }
}

// Ejemplo
const autor1 = new Autor("Isabel Allende");
const editorial1 = new Editorial("Plaza & Janés");

const libro1 = new Libro("La Casa de los Espíritus", autor1, editorial1);
libro1.info();
