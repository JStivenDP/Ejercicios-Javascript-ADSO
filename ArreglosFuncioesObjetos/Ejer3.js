let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encender: function() {
        return "El coche " + this.marca + " está encendido.";
    }
};
console. log(coche.encender()); // "El coche Toyota está encendido."


let carro={
    placa: "xxx123",
    marca: "Mazda",
    color: "Rojo",
    encender: function() {
        return `El carro de placa ${this.placa} se ha encendido.`
    }
}

console.log(carro.encender()); // "El carro de placa xxx123 se ha encendido."

let cuenta = {
    titular: "Ana",
    saldo: 1500,
    mostrarSaldo: function() {
        return `El saldo de ${this.titular} es $${this.saldo}`
    }
}

console.log(cuenta.mostrarSaldo()); // "El saldo de Ana es $1500"
cuenta.saldo -= 500; //Resta saldo
console.log(cuenta.mostrarSaldo()); // "El saldo de Ana es $1000"
