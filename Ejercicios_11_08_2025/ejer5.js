const prompt = require('prompt-sync')();

let continuar;

    do {

        const edadCliente = parseInt(prompt("cuantos años tiene el cliente , -1 para tin: "));

        if (edadCliente === -1) {
            continuar = false;

        } else if (edadCliente < 5) {
            console.log("entras free.");
            continuar = true;

        } else if (edadCliente <= 18) {
            console.log("paga 5 lukas");
            continuar = true;

        } else {
            console.log("ága 10 palos");
            continuar = true;
        }

} while (continuar);