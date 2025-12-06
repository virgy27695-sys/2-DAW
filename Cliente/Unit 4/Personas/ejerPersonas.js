/*crea una tabla con nombre, apellidos y dni. si le pulsas la cabecera tiene que ordebarse
alfabeticamente
*/
const arrayPersona = [];
let persona;
let ordenAscendente = true; // Variable que controla el orden (true = ascendente, false = descendente)

function agregarFila() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let dniValido = false;

    if (dni != "" && dni != undefined) {
        dniValido = validDni(dni);  // Verificar si el DNI es válido
    }

    if (dniValido && apellido !== "" && nombre !== "") {
        persona = {
            nombre: nombre,
            apellido: apellido,
            dni: dni
        };
        arrayPersona.push(persona);
        muestraCuerpoTabla();

        // Limpiar campos después de agregar
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("dni").value = "";
    } else {
        alert("Datos no válidos");
    }
}

function muestraCuerpoTabla() {
    let bodytabla = "";
    arrayPersona.forEach(function (persona) {
        bodytabla += `<tr>`;
        bodytabla += `<td>${persona.nombre}</td>`;
        bodytabla += `<td>${persona.apellido}</td>`;
        bodytabla += `<td>${persona.dni}</td>`;
        bodytabla += `</tr>`;
    });
    document.getElementById("tabla-body").innerHTML = bodytabla;
}

function validDni(dni) {
    let dniPattern = /^\d{8}$/;
    return dniPattern.test(dni); // Validación simple de 8 dígitos numéricos
}

function ordenarTabla(tipo) {
    if (tipo === "nombre") {
        arrayPersona.sort(compara_nombre);
    }
    if (tipo === "apellido") {
        arrayPersona.sort(compara_apellido);
    }
    if (tipo === "dni") {
        arrayPersona.sort(compara_dni);
    }
    
    // Alternar el orden (ascendente / descendente)
    if (!ordenAscendente) {
        arrayPersona.reverse(); // Si el orden es descendente, lo invertimos
    }

    muestraCuerpoTabla();
    ordenAscendente = !ordenAscendente; // Cambiar el estado del orden
}

function compara_nombre(a, b) {
    if (a.nombre < b.nombre) {
        return ordenAscendente ? -1 : 1;  // Determinar si es ascendente o descendente
    } else if (a.nombre > b.nombre) {
        return ordenAscendente ? 1 : -1;
    } else {
        return 0;
    }
}

function compara_apellido(a, b) {
    if (a.apellido < b.apellido) {
        return ordenAscendente ? -1 : 1;
    } else if (a.apellido > b.apellido) {
        return ordenAscendente ? 1 : -1;
    } else {
        return 0;
    }
}

function compara_dni(a, b) {
    if (a.dni < b.dni) {
        return ordenAscendente ? -1 : 1;
    } else if (a.dni > b.dni) {
        return ordenAscendente ? 1 : -1;
    } else {
        return 0;
    }
}


