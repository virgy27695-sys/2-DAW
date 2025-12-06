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

// Datos en formato texto
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

// Convertimos el texto en lista de objetos
const lineas = datosTxt.trim().split("\n");
const clientes = [];

for (let i = 1; i < lineas.length; i++) {
  const partes = lineas[i].split(";");
  const cliente = {
    Cliente: partes[0],
    Localidad: partes[1],
    Cuota: parseInt(partes[2])
  };
  clientes.push(cliente);
}

function ejecutarOpcion() {
  const opcion = document.getElementById("opcion").value;
  const valor = document.getElementById("valor").value.trim();
  const resultado = document.getElementById("resultado");
  let html = "";

  if (opcion === "1") {
    // Mostrar todos
    html = generarTabla(clientes);

  } else if (opcion === "2") {
    // Filtrar por provincia
    if (valor === "") {
      html = "<p>Introduce una provincia.</p>";
    } else {
      const filtrados = [];
      for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].Localidad.toLowerCase() === valor.toLowerCase()) {
          filtrados.push(clientes[i]);
        }
      }
      html = generarTabla(filtrados); // ya mostrará todas las columnas automáticamente
    }

  } else if (opcion === "3") {
    // Filtrar por cuota
    const numero = parseInt(valor);
    if (isNaN(numero)) {
      html = "<p>Introduce un número válido.</p>";
    } else {
      const tipo = prompt("Escribe 'mayor' o 'menor' para filtrar:");
      const filtrados = [];
      for (let i = 0; i < clientes.length; i++) {
        if (tipo.toLowerCase() === "mayor" && clientes[i].Cuota > numero) {
          filtrados.push(clientes[i]);
        } else if (tipo.toLowerCase() === "menor" && clientes[i].Cuota < numero) {
          filtrados.push(clientes[i]);
        }
      }
      html = generarTabla(filtrados);
    }
  }

  resultado.innerHTML = html;
}

// Función para generar tabla HTML
function generarTabla(lista, columnas) {
  if (lista.length === 0) {
    return "<p>No hay resultados.</p>";
  }

  // Si no se pasan columnas, usamos todas las propiedades del primer objeto
  if (!columnas) {
    columnas = [];
    for (let key in lista[0]) {
      columnas.push(key);
    }
  }

  let tabla = "<table><tr>";
  for (let i = 0; i < columnas.length; i++) {
    tabla += "<th>" + columnas[i] + "</th>";
  }
  tabla += "</tr>";

  for (let i = 0; i < lista.length; i++) {
    tabla += "<tr>";
    for (let j = 0; j < columnas.length; j++) {
      const columna = columnas[j];
      tabla += "<td>" + lista[i][columna] + "</td>";
    }
    tabla += "</tr>";
  }

  tabla += "</table>";
  return tabla;
}
















