const reiniciarAlcancia = () => {
    crearAlcancia();
    actualizarDatosInterfaz();
};

document.querySelector("#btnRomper").addEventListener("click", () => {
    reiniciarAlcancia();
});

import Alcancia from "./alcancia.js";

let miAlcancia = null;

const crearAlcancia = () => {
    miAlcancia = new Alcancia();
};

const actualizarDatosInterfaz = () => {
    document.querySelector("#txtMonedas200").value = miAlcancia.moneda200;
    document.querySelector("#txtMonedas500").value = miAlcancia.moneda500;
    document.querySelector("#txtMonedas1000").value = miAlcancia.moneda1000;
    document.querySelector("#txtTotalAlcancia").value = miAlcancia.calculartotalahorrado();
};

document.querySelector("#img200").addEventListener("click", () => {
    miAlcancia.agregarmoneda200();
    actualizarDatosInterfaz();
});
document.querySelector("#img500").addEventListener("click", () => {
    miAlcancia.agregarmoneda500();
    actualizarDatosInterfaz();
});
document.querySelector("#img1000").addEventListener("click", () => {
    miAlcancia.agregarmoneda1000();
    actualizarDatosInterfaz();
});

const inicializarAlcancia = () => {
    crearAlcancia();
    actualizarDatosInterfaz();
};

inicializarAlcancia();
