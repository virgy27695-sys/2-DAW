/*Realiza un programa que cada 20 segundos (mediante setInterval) solicite un DNI hasta que
alguien le escriba la cadena “-1”.
En ese momento, el programa debe mostrar seguidas las letras de todos los DNIs
introducidos.
Aquí un enlace para saber como calcular la letra de DNI:
https://es.wikipedia.org/wiki/N%C3%BAmero_de_identificaci%C3%B3n_fiscal
// Calcular letraDNI
function letraDNI(numeroDni) {
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
'K', 'E', 'T'];
return letras[numeroDni % 23];
}
 */

// --- Función para calcular la letra del DNI ---
function letraDNI(numero) {
  let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
                'B','N','J','Z','S','Q','V','H','L','C','K','E'];
  return letras[numero % 23];
}

// --- Array para guardar todas las letras ---
let letrasDNI = [];

let input = document.getElementById("dniInput");
let resultadoDiv = document.getElementById("resultado");

// --- Función que procesa el DNI ---
function procesarDNI() {
  let valor = input.value.trim();

  if (valor === "") {
    resultadoDiv.innerHTML = "<span style='color:red;'>Introduce un número.</span>";
    return;
  }

  if (valor === "0") {
    // Concatenamos todas las letras una por una
    let todasLetras = "";
    for (let i = 0; i < letrasDNI.length; i++) {
      todasLetras += letrasDNI[i];
    }
    resultadoDiv.innerHTML = "<strong>Programa terminado.</strong><br>Letras: " + todasLetras;

    input.value = "";
    return;
  }

  let numero = parseInt(valor);

  if (isNaN(numero) || numero < 0) {
    resultadoDiv.innerHTML = "<span style='color:red;'>Introduce un número válido.</span>";
    return;
  }

  let letra = letraDNI(numero);
  letrasDNI.push(letra);

  resultadoDiv.innerHTML = "La letra del DNI " + numero + " es: <strong>" + letra + "</strong>";

  input.value = "";
}





