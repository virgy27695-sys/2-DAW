/*Realiza un programa que pasados 10 segundos, nos muestre una sola vez la fecha actual
del sistema con el formato: dia_semana, día/mes/año horas:minutos:segundos.
 */

// Función para mostrar la fecha actual formateada
function mostrarFecha() {
  const fecha = new Date();

  // Array con los nombres de los días de la semana
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const diaSemana = diasSemana[fecha.getDay()];
  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Enero es 0
  const año = fecha.getFullYear();

  const horas = fecha.getHours().toString().padStart(2, '0');
  const minutos = fecha.getMinutes().toString().padStart(2, '0');
  const segundos = fecha.getSeconds().toString().padStart(2, '0');

  const fechaFormateada = `${diaSemana}, ${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;

  // Mostramos la fecha en el div
  document.getElementById("fecha").textContent = fechaFormateada;
}

// Llamamos a la función tras 10 segundos (10000 ms)
setTimeout(mostrarFecha, 10000);








