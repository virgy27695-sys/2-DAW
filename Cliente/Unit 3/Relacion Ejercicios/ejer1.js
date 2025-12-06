/*Realiza un programa que reciba una cadena con el siguiente formato:
“nombre:apellidos:telefono:email:codigopostal”
Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
● Código postal.
● Apellidos.
● Email.
● Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del
servidor asociado.
 */

// Función que recibe una cadena con el formato:
// "nombre:apellidos:telefono:email:codigopostal"
function procesarCadena(cadena) {

  // Dividimos la cadena usando ":" como separador
  let partes = cadena.split(":");

  // Verificamos que haya exactamente 5 elementos
  if (partes.length !== 5) {
    document.getElementById("resultado").innerHTML =
      "<span style='color:red; font-weight:bold;'>Error:</span> el formato debe ser 'nombre:apellidos:telefono:email:codigopostal'";
    return; // Si el formato es incorrecto, detenemos la ejecución
  }

  // Asignamos cada parte a una variable
  let nombre = partes[0];
  let apellidos = partes[1];
  let telefono = partes[2];
  let email = partes[3];
  let codigoPostal = partes[4];

  // Extraemos el nombre del servidor del email (parte después del "@")
  let servidor = email.split("@")[1];

  let resultado = `
    <strong>Información desglosada:</strong><br>
    Nombre: ${nombre}<br>
    Apellidos: ${apellidos}<br>
    Email: ${email}<br>
    Código postal: ${codigoPostal}<br>
    Servidor del email: ${servidor}
  `;

  document.getElementById("resultado").innerHTML = resultado;
}


