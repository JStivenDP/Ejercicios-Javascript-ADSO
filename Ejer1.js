class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}

const c1 = new Circulo(5);
console.log("Área del círculo:", c1.calcularArea().toFixed(2));