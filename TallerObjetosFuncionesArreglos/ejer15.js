const prompt = require("prompt-sync")();
let bancoCuentas = [];
let idCuenta = 0;
function nuevaCuenta() {
    const anio = new Date().getFullYear();
    idCuenta++;
    const id = `${anio}-${idCuenta}`;
    const fechaCreada = new Date().toISOString().slice(0, 10);
    const saldoInicial = 0;
    const objCuenta = { id, fechaCreada, saldo: saldoInicial };
    bancoCuentas.push(objCuenta);
    console.log("Cuenta creada:", objCuenta);
}
function encontrarCuenta(id) {
    for (let j = 0; j < bancoCuentas.length; j++) {
        if (bancoCuentas[j].id === id) {
            return bancoCuentas[j];
        }
    }
    return null;
}
function consignarEnCuenta() {
    const id = prompt("Ingrese el código de la cuenta: ");
    const cuenta = encontrarCuenta(id);
    if (!cuenta) {
        console.log("Cuenta no encontrada");
        return;
    }
    const monto = parseFloat(prompt("Valor a consignar: "));
    if (isNaN(monto) || monto <= 0) {
        console.log("Valor inválido");
        return;
    }
    cuenta.saldo += monto;
    console.log("Nuevo saldo:", cuenta.saldo);
}
function retirarDeCuenta() {
    const id = prompt("Ingrese el código de la cuenta: ");
    const cuenta = encontrarCuenta(id);
    if (!cuenta) {
        console.log("Cuenta no encontrada");
        return;
    }
    const monto = parseFloat(prompt("Valor a retirar: "));
    if (isNaN(monto) || monto <= 0) {
        console.log("Valor inválido");
        return;
    }
    if (monto > cuenta.saldo) {
        console.log("Fondos insuficientes");
        return;
    }
    cuenta.saldo -= monto;
    console.log("Nuevo saldo:", cuenta.saldo);
}
function consultarPorCodigo() {
    const id = prompt("Ingrese el código de la cuenta: ");
    const cuenta = encontrarCuenta(id);
    if (!cuenta) {
        console.log("Cuenta no encontrada");
        return;
    }
    console.log("Cuenta encontrada:", cuenta);
}
function mostrarCuentas() {
    if (bancoCuentas.length === 0) {
        console.log("No hay cuentas registradas");
        return;
    }
    for (let k = 0; k < bancoCuentas.length; k++) {
        console.log(bancoCuentas[k]);
    }
}
function menuBanco() {
    let salir = false;
    while (!salir) {
        console.log("\n=== MENÚ BANCO ADSO ===");
        console.log("1. Crear cuenta");
        console.log("2. Consignar en cuenta");
        console.log("3. Retirar de cuenta");
        console.log("4. Consultar cuenta por código");
        console.log("5. Listar cuentas");
        console.log("6. Salir");
        const opcion = prompt("Seleccione una opción (1-6): ");
        switch (opcion) {
            case "1":
                nuevaCuenta();
                break;
            case "2":
                consignarEnCuenta();
                break;
            case "3":
                retirarDeCuenta();
                break;
            case "4":
                consultarPorCodigo();
                break;
            case "5":
                mostrarCuentas();
                break;
            case "6":
                salir = true;
                break;
            default:
                console.log("Opción inválida");
        }
    }
    console.log("Fin del programa");
}
menuBanco();