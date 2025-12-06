let opcion = prompt(
  "Elige la conversión que deseas realizar:\n" +
  "1. Metros a Kilómetros\n" +
  "2. Grados Celsius a Fahrenheit\n" +
  "3. Kilogramos a Libras\n" +
  "4. Litros a Mililitros"
);

let valor = prompt("Introduce el valor a convertir:");
valor = parseFloat(valor);

if (isNaN(valor)) {
  alert("Error: Debes ingresar un número válido.");
} else {
  let resultado;
  switch(opcion) {
    case "1":
      // Metros a Kilómetros
      resultado = valor / 1000;
      alert(valor + " metros equivalen a " + resultado + " kilómetros.");
      break;

    case "2":
      // Celsius a Fahrenheit
      resultado = (valor * 9/5) + 32;
      alert(valor + " °C equivalen a " + resultado + " °F.");
      break;

    case "3":
      // Kilogramos a Libras
      resultado = valor * 2.20462;
      alert(valor + " kilogramos equivalen a " + resultado.toFixed(2) + " libras.");
      break;

    case "4":
      // Litros a Mililitros
      resultado = valor * 1000;
      alert(valor + " litros equivalen a " + resultado + " mililitros.");
      break;

    default:
      alert("Error: Opción no válida.");
  }
}




