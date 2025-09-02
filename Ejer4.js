class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    total() {
        return this.productos.reduce((sum, p) => sum + p.precio, 0);
    }

    listarProductos() {
        this.productos.forEach(p => {
            console.log(`Producto: ${p.nombre}, Precio: ${p.precio}`);
        });
    }
}

// Ejemplo
const p1 = new Producto("Pan", 2000);
const p2 = new Producto("Leche", 3500);

const pedido = new Pedido();
pedido.agregarProducto(p1);
pedido.agregarProducto(p2);

pedido.listarProductos();
console.log("Total del pedido:", pedido.total());
