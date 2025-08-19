
const prompt = require("prompt-sync")();

function mesaVotacion() {
    const resultados = {
        uno: 0,
        dos: 0,
        tres: 0,
        blanco: 0
    };
    const MAX_VOTANTES = 50;
    let cantidadVotantes = 0;
    const clavePresidente = "4321";
    let eleccionesCerradas = false;

    while (cantidadVotantes < MAX_VOTANTES && !eleccionesCerradas) {
        console.log("\nMENU ELECCIONES 2025");
        console.log("1. Candidato Uno.");
        console.log("2. Candidato Dos.");
        console.log("3. Candidato Tres.");
        console.log("4. Blanco");
        console.log("5. Cerrar elecciones");

        let seleccion = prompt("Ingrese su opción: ");
        switch (seleccion) {
            case "1":
                resultados.uno++;
                cantidadVotantes++;
                break;
            case "2":
                resultados.dos++;
                cantidadVotantes++;
                break;
            case "3":
                resultados.tres++;
                cantidadVotantes++;
                break;
            case "4":
                resultados.blanco++;
                cantidadVotantes++;
                break;
            case "5":
                let clave = prompt("Ingrese la clave para cerrar elecciones: ");
                if (clave === clavePresidente) {
                    eleccionesCerradas = true;
                } else {
                    console.log("Clave incorrecta. Continúan las elecciones.");
                }
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                break;
        }
    }

    console.log("\nElecciones finalizadas");
    console.log("Número de personas que votaron:", cantidadVotantes);
    console.log("Votos Candidato Uno:", resultados.uno);
    console.log("Votos Candidato Dos:", resultados.dos);
    console.log("Votos Candidato Tres:", resultados.tres);
    console.log("Votos en Blanco:", resultados.blanco);
}

mesaVotacion();