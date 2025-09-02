import { areacirculo, areatriangulo } from "./funciones.js";

//document.querySelector("#btnCalcular").addEventListener("click", calcularArea);

function calcularArea() {
    const radio = document.querySelector("#txtRadio").value;
    const area = areacirculo(radio);
    //console.log(area);
    document.querySelector("#txtrespuesta").value = area.toFixed(3);
}

document.querySelector("#btncalcularTriangulo").addEventListener("click",()=>{
    const base = document.querySelector("#txtBase").value;
    const altura = document.querySelector("#txtAltura").value;
    const area = areatriangulo(base,altura)
    document.querySelector("#txtRespuestaTriangulo").value=area
});

window.calcularArea = calcularArea;
