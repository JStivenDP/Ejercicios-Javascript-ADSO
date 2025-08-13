let persona = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Ingeniero"
}

console.log(typeof(persona));
console.log(persona);

persona.correo="carlos@gmail.com"

console.log(persona);

persona.edad = 35;

console.log(persona);

console.log(Object.keys(persona));

console.log(Object.values(persona));

console.log(persona.nombre);

console.log(persona["edad"]);

function saludar(nombre="Rosa"){
    return `Hola ${nombre}`;
}

let mensaje=saludar("Maria");
console.log(mensaje);
console.log(saludar("Maria"));

const despedir = function(nombre) {
    return `Adiós ${nombre}`;
}

console.log(despedir("Miguel"));

const despedirt = function(nombre) {
    console.log(`Adiós ${nombre}`);
}

despedirt("Miguel");

const multiplicar = (a,b)=>a*b
console.log(multiplicar(5,9)); //45

const message = ()=>{
    let saludo="hola a todos"
    console.log(saludo)
}

message(); //hola a todos