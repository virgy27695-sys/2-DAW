/*Diferencia entre dos fechas: Crea un programa que reciba dos fechas (en formato
dd/mm/aaaa) y calcule la diferencia en días entre ambas.
 */

function calcularDiferencia() {
  let fecha1Input = document.getElementById("fecha1Input").value.trim();
  let fecha2Input = document.getElementById("fecha2Input").value.trim();
  let resultadoDiv = document.getElementById("resultado");

  if (!fecha1Input || !fecha2Input) {
    resultadoDiv.textContent = "Introduce ambas fechas.";
    return;
  }

  // Función para convertir dd/mm/aaaa a Date
  function convertirFecha(fechaStr) {
    let partes = fechaStr.split("/");
    if (partes.length !== 3) return null;
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let anio = parseInt(partes[2]);
    let fecha = new Date(anio, mes, dia);
    return isNaN(fecha.getTime()) ? null : fecha;
  }

  let fecha1 = convertirFecha(fecha1Input);
  let fecha2 = convertirFecha(fecha2Input);

  if (!fecha1 || !fecha2) {
    resultadoDiv.textContent = "Alguna de las fechas no es válida.";
    return;
  }

  // Diferencia en milisegundos
  let diffMs = Math.abs(fecha2 - fecha1);

  // Convertimos a días
  let diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  resultadoDiv.textContent = "La diferencia entre las fechas es de " + diffDias + " días.";
}












