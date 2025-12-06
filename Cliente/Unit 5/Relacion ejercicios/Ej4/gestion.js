/*Ej5. A partir del formulario creado en la actividad 1, realiza las funciones necesarias para
validarlo teniendo en cuenta:
• Nombre del disco: 20 caracteres, obligatorio.
• Grupo de música o cantante: 20 caracteres, obligatorio.
• Año de publicación: 4 caracteres numéricos.
• Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”): sin comprobación.
• Localización: almacenará un número de estantería: vacío o numérico.
• Prestado: sin comprobación.
• Tendrás que tener en cuenta, además:
• Que la validación se asignará al formulario mediante un manejador
AddEventListener.
• Que los campos nombre del disco y grupo de música se validarán en
la misma función
*/
// Array para almacenar discos
let discos = [];

// Discos iniciales
let disco1 = new Disco();
disco1.incluirDatos("The Dark Side of the Moon", "Pink Floyd", "1973", "rock", 1);
discos.push(disco1);

let disco2 = new Disco();
disco2.incluirDatos("Thriller", "Michael Jackson", "1982", "pop", 2);
discos.push(disco2);

let salida = null;

window.onload = function () {
    salida = document.getElementById("resultados");

    // Manejar formulario simple
    let form = document.getElementById("formDisco");
    form.onsubmit = function () {
        if (validarFormulario()) {
            anadirDiscoFormulario();
        }
        return false;
    };

    // Incrementar visitas usando LocalStorage
    let visitas = parseInt(localStorage.getItem("visitas")) || 0;
    visitas = visitas + 1;
    localStorage.setItem("visitas", visitas);
    mostrarVisitas();
};

// Mostrar formulario al pulsar botón
function mostrarFormulario() {
    let formDiv = document.getElementById("formularioAgregar");
    if (formDiv.style.display === "none" || formDiv.style.display === "") {
        formDiv.style.display = "block";
    }
}

// Mostrar mensajes en la página
function mostrarEnPagina(texto) {
    salida.innerHTML = texto.replace(/\n/g, "<br>");
}

// Validación del formulario
function validarFormulario() {
    let nombre = document.getElementById("nombre");
    let grupo = document.getElementById("grupo");
    let ano = document.getElementById("ano");
    let localizacion = document.getElementById("localizacion");

    let labelNombre = document.getElementById("label-nombre");
    let labelGrupo = document.getElementById("label-grupo");

    let valido = true;

    // Resetear estilos
    nombre.style.border = "";
    grupo.style.border = "";
    labelNombre.style.color = "";
    labelGrupo.style.color = "";
    ano.style.border = "";
    localizacion.style.border = "";

    // Validar nombre
    if (nombre.value.trim() === "" || nombre.value.trim().length > 20) {
        nombre.style.border = "2px solid red";
        labelNombre.style.color = "red";
        valido = false;
    }

    // Validar grupo
    if (grupo.value.trim() === "" || grupo.value.trim().length > 20) {
        grupo.style.border = "2px solid red";
        labelGrupo.style.color = "red";
        valido = false;
    }

    // Validar año
    if (ano.value.trim() !== "" && !/^\d{4}$/.test(ano.value.trim())) {
        ano.style.border = "2px solid red";
        valido = false;
    }

    // Validar localización
    if (localizacion.value.trim() !== "" && isNaN(parseInt(localizacion.value.trim(), 10))) {
        localizacion.style.border = "2px solid red";
        valido = false;
    }

    return valido;
}

// Añadir disco desde formulario
function anadirDiscoFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let grupo = document.getElementById("grupo").value.trim();
    let ano = document.getElementById("ano").value.trim();
    let tipo = document.getElementById("tipo").value;
    let localizacion = parseInt(document.getElementById("localizacion").value, 10);
    let prestado = document.getElementById("prestado").checked;

    let nuevo = new Disco();
    nuevo.incluirDatos(nombre, grupo, ano, tipo, isNaN(localizacion) ? 0 : localizacion);
    if (prestado) {
        nuevo.cambiarPrestado();
    }

    let posicion = prompt("¿Añadir al principio (1) o al final (2)?");
    if (posicion === "1") {
        for (let i = discos.length; i > 0; i--) {
            discos[i] = discos[i - 1];
        }
        discos[0] = nuevo;
    } else {
        discos[discos.length] = nuevo;
    }

    mostrarListadoDiscos();
    document.getElementById("formDisco").reset();
}

// Mostrar número de discos
function mostrarNumeroDiscos() {
    mostrarEnPagina("Número total de discos: " + discos.length);
}

// Mostrar listado completo
function mostrarListadoDiscos() {
    if (discos.length === 0) {
        mostrarEnPagina("No hay discos.");
        return;
    }

    let modo = prompt("¿Cómo quieres mostrarlos?\n1. Orden normal\n2. Del revés\n3. Orden alfabético por nombre");
    let texto = "Listado de discos:\n\n";

    if (modo === "1") {
        for (let i = 0; i < discos.length; i++) {
            texto += (i + 1) + ". " + discos[i].mostrarInformacion() + "\n\n";
        }
    } else if (modo === "2") {
        for (let i = discos.length - 1; i >= 0; i--) {
            texto += (i + 1) + ". " + discos[i].mostrarInformacion() + "\n\n";
        }
    } else if (modo === "3") {
        let copia = [];
        for (let i = 0; i < discos.length; i++) {
            copia[i] = discos[i];
        }

        // Orden simple
        let cambiado = true;
        while (cambiado) {
            cambiado = false;
            for (let i = 0; i < copia.length - 1; i++) {
                let a = copia[i].nombre.toUpperCase();
                let b = copia[i + 1].nombre.toUpperCase();
                if (a > b) {
                    let temp = copia[i];
                    copia[i] = copia[i + 1];
                    copia[i + 1] = temp;
                    cambiado = true;
                }
            }
        }

        for (let i = 0; i < copia.length; i++) {
            texto += (i + 1) + ". " + copia[i].mostrarInformacion() + "\n\n";
        }
    } else {
        texto += "Opción no válida.";
    }

    mostrarEnPagina(texto);
}

// Mostrar intervalo de discos
function mostrarIntervalo() {
    let intervalo = prompt("Introduce intervalo en formato inicio-fin (ej: 1-2)");
    let guion = intervalo.indexOf("-");
    let inicio = parseInt(intervalo.substring(0, guion), 10) - 1;
    let fin = parseInt(intervalo.substring(guion + 1), 10);

    if (isNaN(inicio) || isNaN(fin)) {
        mostrarEnPagina("Intervalo no válido.");
        return;
    }

    inicio = Math.max(0, inicio);
    fin = Math.min(fin, discos.length);

    let texto = "Mostrando discos del " + (inicio + 1) + " al " + fin + ":\n\n";
    for (let i = inicio; i < fin; i++) {
        texto += (i + 1) + ". " + discos[i].mostrarInformacion() + "\n\n";
    }
    mostrarEnPagina(texto);
}

// Borrar disco
function borrarDisco() {
    if (discos.length === 0) {
        mostrarEnPagina("No hay discos para borrar.");
        return;
    }

    let modo = prompt("¿Borrar al principio (1) o al final (2)?");
    if (modo === "1") {
        for (let i = 0; i < discos.length - 1; i++) discos[i] = discos[i + 1];
        discos.length = discos.length - 1;
    } else {
        discos.length = discos.length - 1;
    }

    mostrarListadoDiscos();
}

// Consultar disco
function consultarDisco() {
    let modo = prompt("Consultar por posición (1) o por nombre (2)?");
    if (modo === "1") {
        let pos = parseInt(prompt("Introduce posición:"), 10) - 1;
        if (pos >= 0 && pos < discos.length) {
            mostrarEnPagina(discos[pos].mostrarInformacion());
        } else {
            mostrarEnPagina("Posición no válida.");
        }
    } else if (modo === "2") {
        let nombre = prompt("Introduce nombre a buscar:");
        let encontrado = null;
        for (let i = 0; i < discos.length; i++) {
            if (discos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
                encontrado = discos[i];
                break;
            }
        }
        if (encontrado) {
            mostrarEnPagina(encontrado.mostrarInformacion());
        } else {
            mostrarEnPagina("Disco no encontrado.");
        }
    } else {
        mostrarEnPagina("Opción no válida.");
    }
}

// LocalStorage simples para visitas
function borrarCookie() {
    localStorage.removeItem("visitas");
    mostrarVisitas();
}

function mostrarVisitas() {
    let visitas = localStorage.getItem("visitas") || 0;
    document.getElementById("contadorVisitas").innerText = "Número de visitas: " + visitas;
}

