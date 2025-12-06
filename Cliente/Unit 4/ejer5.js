/*5. Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás crear un archivo arrays.js que incluya las siguientes funciones:
Mostrar el número de elementos del array.
Mostrar todos los elementos del array.
Muestra los elementos del array en sentido inverso.
Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
Añadir un elemento al principio del array.
Añadir un elemento al final del array.
Borrar un elemento al principio del array  (y decir cuál se ha borrado).
Borrar un elemento al final del array (y decir cuál se ha borrado).
Muestra el elemento que se encuentra en una posición que el usuario indica.
Muestra la posición en la que se encuentra un elemento que le indica el usuario.
Muestra los elementos que se encuentran en un intervalo que el usuario indica.
*/
let semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function muestra(semana) {
    document.write(...semana.toString());
}

function muestraImverso(semana) {
    document.write("Elementos inversos ");
    semana.reverse();
    semana.forEach(element => {
        document.write(element);
    });
}

function muestraOrdenado(semana) {
    semana.sort();
    semana.forEach(element => {
        document.write(element);
    });
}

function anadirAlPrincipio(semana, elemento) {
    document.write("Añadiendo elementos al principio: ");
    semana.unshift(elemento);
    muestra(semana);
}

function anadirAlFinal(semana, elemento) {
    document.write("Añadiendo elementos al final: ");
    semana.push(elemento);
    muestra(semana);
}

function eliminarDelPrincipio(semana) {
    document.write("elimina elementos al principio: ");
    let borrado = semana.shift(elemento);
    document.write("El elemento borrado es: " + borrado)
    muestra(semana);
}

function eliminarDelFinal(semana) {
    document.write("elimina elementos al final");
    let borrado = semana.pop();
    document.write("El elemento borrado es: " + borrado)
    muestra(semana);
}
function devuelveElemeto(semana, pos) {
    document.write("El elemeneto de la posisción indicada es: " + semana[pos]);
}

function devuelvePosicion(semana, element) {
    let elementoBuscado = semana.indexOf(element);
    if (elementoBuscado < 0) {
        document.write("El elemento no se ha encontrado");
    } else {
        document.write("El elemento buscado esta en la posición: " + elementoBuscado);
    }
}

function elementosIntervalo(semana, inicio, final) {
    let elementosBuscados = semana.slice(inicio, final);
    document.writeg("Los elementos buscados son: " + elementosBuscados);
}

/*6. Ten en cuenta que el array será una variable global y que se pasará por parámetro en todas las funciones.
Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt, no en la página) las opciones:
1. Mostrar número de países.
2. Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
3. Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin).
4. Añadir un país (y le preguntará si quiere añadir al principio o al final).
5. Borrar un país (y le preguntará si quiere borrar al principio o al final).
6. Consultar un país (y le preguntará si quiere consultar por posición o por nombre).
7.Todas las operaciones que se realicen se irán mostrando en la página con su título.
*/
let opcion = prompt(`Elige una de las siguientes opciones: 
1. Mostrar número de países.
2. Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).\n
3. Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin).\n
4. Añadir un país (y le preguntará si quiere añadir al principio o al final).\n
5. Borrar un país (y le preguntará si quiere borrar al principio o al final).\n
6. Consultar un país (y le preguntará si quiere consultar por posición o por nombre).\n
Todas las operaciones que se realicen se irán mostrando en la página con su título.\n`);
switch (Number(opcion)) {
    case 1: document.write("El tamaño es: " + semana.length);
        break;
    case 2:
        let tipo = prompt("¿Cómo quieres ordenar?\n a. Normal\n b. Inverso\n c. Ordenados");
        if (tipo === "a") {
            muestra(semana);
        } else if (tipo === "b") {
            muestraImverso(semana);
        } else {
            muestraOrdenado(semana);
        }
        break;
    case 3:
        let inicio = prompt("Dime la posición de inicio");
        let final = prompt("Dime la posición del final");
        elementosIntervalo(semana, inicio, final);
        break;
    case 4:
        let nuevoelemento = prompt("Dime el día a añadir");
        let posicion = prompt("a. Añade al principio\n b. Añade al final");
        if (posicion === "a") {
            anadirAlPrincipio(semana, nuevoelemento);
        } else if (posicion === "b") {
            anadirAlFinal(semana, nuevoelemento);
        } else {
            document.write("Error");
        }
        break;
    case 5:
        posicion = prompt("a. Elimina al principio\n b. Elimina al final");
        if (posicion === "a") {
            eliminarDelPrincipio(semana, nuevoelemento);
        } else if (posicion === "b") {
            eliminarDelFinal(semana, nuevoelemento);
        } else {
            document.write("Error");
        }
        break;
    case 6:
        let consulta = prompt("a. Consulta por nombre\n b. Consulta por posición");
        if (consulta === "a") {
            let nombre = prompt("Dime el nombre del elemento");
            devuelvePosicion(semana, nombre);
        } else if (consulta === "b") {
            let pos = prompt("Dime la posicion del elemento");
            devuelveElemento(semana, pos);
        } else {
            document.write("Error");
        }
        break;
}


