
function obtenerCaracterAleatorio(cadena) {
  const indice = Math.floor(Math.random() * cadena.length);
  return cadena.charAt(indice);
}

function crearPassword() {
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "@#$%&()=?¿*+[]{}";
  let resultado = "";

  for (let i = 0; i < 2; i++) {
    resultado += obtenerCaracterAleatorio(mayusculas);
    resultado += obtenerCaracterAleatorio(minusculas);
    resultado += obtenerCaracterAleatorio(numeros);
    resultado += obtenerCaracterAleatorio(simbolos);
  }
  return resultado;
}

console.log(crearPassword());

