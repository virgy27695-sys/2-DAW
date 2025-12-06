/*Realiza un programa que pregunte una letra de la A a la Z. Tras ello el programa indicará
cuántos DNIs de 3 cifras (del 001 al 999) tienen esa letra y tras ello te mostrará “de golpe” el
listado de todos los DNIs que tienen esa letra
 */

// --- Función para calcular la letra del DNI ---
function letraDNI(numero) {
  let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
                'B','N','J','Z','S','Q','V','H','L','C','K','E'];
  return letras[numero % 23];
}

// --- Referencias al DOM ---
let input = document.getElementById("letraInput");
let resultadoDiv = document.getElementById("resultado");

// --- Función para buscar DNIs por letra ---
function buscarDNIs() {
  let letraBuscada = input.value.trim().toUpperCase();

  if (letraBuscada === "" || letraBuscada.length !== 1 || !/[A-Z]/.test(letraBuscada)) {
    resultadoDiv.innerHTML = "Introduce una letra válida de la A a la Z.";
    return;
  }

  let dnisCoincidentes = [];

  // Recorremos todos los DNIs de 001 a 999
  for (let i = 1; i <= 999; i++) {
    let numeroDNI = i.toString().padStart(3, '0');
    let letra = letraDNI(i);

    if (letra === letraBuscada) {
      dnisCoincidentes.push(numeroDNI);
    }
  }

  // Concatenamos los DNIs en un string
  let listado = "";
  for (let i = 0; i < dnisCoincidentes.length; i++) {
    listado += dnisCoincidentes[i];
    if (i < dnisCoincidentes.length - 1) {
      listado += ", "; // agregamos coma excepto al final
    }
  }

  // Mostramos la cantidad y el listado completo
  resultadoDiv.innerHTML = "Cantidad de DNIs con la letra " + letraBuscada + ": " + dnisCoincidentes.length +
                           "\nDNIs: " + listado;
}







