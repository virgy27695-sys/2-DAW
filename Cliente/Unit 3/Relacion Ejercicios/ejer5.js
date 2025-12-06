/*Calcular la edad: Crea un programa que pida al usuario su fecha de nacimiento (en
formato dd/mm/aaaa) y calcule su edad y avise si es o no mayor de edad
 */

function calcularEdad() {
  let fechaInput = document.getElementById("fechaInput").value.trim();
  let resultadoDiv = document.getElementById("resultado");

  if (!fechaInput) {
    resultadoDiv.textContent = "Introduce una fecha válida.";
    return;
  }

  let partes = fechaInput.split("/");
  if (partes.length !== 3) {
    resultadoDiv.textContent = "Formato incorrecto. Debe ser dd/mm/aaaa";
    return;
  }

  let dia = parseInt(partes[0]);
  let mes = parseInt(partes[1]) - 1; // Los meses van de 0 a 11
  let anio = parseInt(partes[2]);

  let fechaNac = new Date(anio, mes, dia);
  let hoy = new Date();

  if (isNaN(fechaNac.getTime())) {
    resultadoDiv.textContent = "Fecha no válida.";
    return;
  }

  // Edad base
  let edad = hoy.getFullYear() - fechaNac.getFullYear();

  // Creamos la fecha de cumpleaños de este año
  let cumpleEsteAnio = new Date(hoy.getFullYear(), mes, dia);

  // Si aún no ha llegado tu cumpleaños este año, restamos 1
  if (hoy < cumpleEsteAnio) {
    edad--;
  }

  let mayorEdad = edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";

  resultadoDiv.textContent = "Tienes " + edad + " años. " + mayorEdad;
}










