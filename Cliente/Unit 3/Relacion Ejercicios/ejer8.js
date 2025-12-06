/*  Dispones del siguiente archivo de texto (puedes guardarlo en una variable en Javascript):
 Cliente;Localidad;Cuota
 Laura;Santander;50
 Álvaro;Castro;50
 Igor;Castro;60
 Ivan;Santander;40
 Mónica;Zamora;30
 Javi;Bilbao;30
 David;Bilbao;50
 José Luis;Bilbao;60
A partir del mismo, el usuario podrá elegir del menú:
 1. Todos los usuarios: se mostrará una tabla con los valores que están en la variable
 anterior.
 2. Usuarios de una provincia: y a partir de la provincia introducida por el usuario se
 mostrarán en una tabla los nombres y cuotas de las personas que viven en esa
 provincia.
 3. Usuarios que tengan una cuota mayor o menor que un valor: y se mostrarán en una
 tabla los nombres de usuario, provincias y cuotas de aquellos que tienen una cuota
 superior o inferior al valor introducido por el usuario (valora cuál es el mejor modo de
 hacerlo)
 */

// Datos en formato texto (como si fuera el archivo)
const datosTxt = `
Cliente;Localidad;Cuota
Laura;Santander;50
Álvaro;Castro;50
Igor;Castro;60
Ivan;Santander;40
Mónica;Zamora;30
Javi;Bilbao;30
David;Bilbao;50
José Luis;Bilbao;60
`;

// Convertimos el texto a un array de objetos
const lineas = datosTxt.trim().split("\n");
const cabeceras = lineas[0].split(";");
const clientes = lineas.slice(1).map(linea => {
  const [Cliente, Localidad, Cuota] = linea.split(";");
  return { Cliente, Localidad, Cuota: parseInt(Cuota) };
});

function mostrarTabla(datos, columnas) {
  if (datos.length === 0) return "<p>No hay resultados.</p>";

  let html = "<table><tr>";
  columnas.forEach(col => (html += `<th>${col}</th>`));
  html += "</tr>";

  datos.forEach(d => {
    html += "<tr>";
    columnas.forEach(col => (html += `<td>${d[col]}</td>`));
    html += "</tr>";
  });

  html += "</table>";
  return html;
}

function ejecutarOpcion() {
  const opcion = document.getElementById("opcion").value;
  const valor = document.getElementById("valor").value.trim();
  let salida = "";

  switch (opcion) {
    case "1":
      salida = mostrarTabla(clientes, ["Cliente", "Localidad", "Cuota"]);
      break;

    case "2":
      if (!valor) {
        salida = "<p>Introduce una provincia/localidad.</p>";
        break;
      }
      const filtradosProvincia = clientes.filter(
        c => c.Localidad.toLowerCase() === valor.toLowerCase()
      );
      salida = mostrarTabla(filtradosProvincia, ["Cliente", "Cuota"]);
      break;

    case "3":
      const numero = parseInt(valor);
      if (isNaN(numero)) {
        salida = "<p>Introduce un número válido para la cuota.</p>";
        break;
      }

      const mayorMenor = confirm(
        "¿Quieres ver los usuarios con cuota MAYOR que " + numero + "?\n(Cancelar = menores o iguales)"
      );

      const filtradosCuota = clientes.filter(c =>
        mayorMenor ? c.Cuota > numero : c.Cuota <= numero
      );

      salida = mostrarTabla(filtradosCuota, ["Cliente", "Localidad", "Cuota"]);
      break;
  }

  document.getElementById("resultado").innerHTML = salida;
}















