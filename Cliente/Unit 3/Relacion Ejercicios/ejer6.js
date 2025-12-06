/*Crea un programa que pida una fecha y un número de días, y devuelva la fecha resultante
después de sumar esos días.
 */

function sumarDias() {
  let fechaInput = document.getElementById("fechaInput").value.trim();
  let diasInput = document.getElementById("diasInput").value.trim();
  let resultadoDiv = document.getElementById("resultado");

  if (!fechaInput || !diasInput) {
    resultadoDiv.textContent = "Introduce la fecha y el número de días.";
    return;
  }

  let partes = fechaInput.split("/");
  if (partes.length !== 3) {
    resultadoDiv.textContent = "Formato de fecha incorrecto. Debe ser dd/mm/aaaa.";
    return;
  }

  let dia = parseInt(partes[0]);
  let mes = parseInt(partes[1]) - 1; // Los meses van de 0 a 11
  let anio = parseInt(partes[2]);

  let fecha = new Date(anio, mes, dia);

  if (isNaN(fecha.getTime())) {
    resultadoDiv.textContent = "Fecha no válida.";
    return;
  }

  let diasASumar = parseInt(diasInput);
  if (isNaN(diasASumar)) {
    resultadoDiv.textContent = "Número de días no válido.";
    return;
  }

  // Sumamos los días
  fecha.setDate(fecha.getDate() + diasASumar);

  // Formateamos la fecha resultante
  let diaRes = fecha.getDate().toString().padStart(2, '0');
  let mesRes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  let anioRes = fecha.getFullYear();

  resultadoDiv.textContent = "La fecha resultante es: " + diaRes + "/" + mesRes + "/" + anioRes;
}











