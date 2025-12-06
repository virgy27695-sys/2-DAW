
function fechaActual() {
    var fecha = new Date();
    var opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("fecha-actual").innerText = fecha.toLocaleDateString('es-ES', opciones);
}
fechaActual();


function abrirAviso() {
    var nuevaVentana = window.open("", "nuevoAviso", "toolbar=no, location=no,menubar=no, scrollable=no");
    nuevaVentana.document.write("<p style='font-family: Arial, sans-serif;'>OBJETO ... (contenido legal completo) ...</p>");
}

function abrirVentana() {
    setTimeout(function () {
        var nuevaVentana = window.open("", "nuevaVentana", "toolbar=no, location=no,menubar=no, scrollable=no");
        nuevaVentana.resizeTo(200, 200);
        nuevaVentana.document.write("<p style='font-family: Arial, sans-serif;'>BIENVENIDO A NUESTRA PÁGINA WEB</p>");
        nuevaVentana.document.write("<button onclick='window.close()'>Cerrar ventana</button>");
    }, 10000);
}
abrirVentana();


function validarContrasena() {
    var contrasena = document.getElementById("contrasena").value;
    var confirmar = document.getElementById("confirmar-contrasena").value;

    if (contrasena !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    if (contrasena.length < 8 || contrasena.length > 16) {
        alert("La contraseña debe tener entre 8 y 16 caracteres.");
        return false;
    }

    if (!(/[A-Z]/.test(contrasena))) {
        alert("Debe contener al menos una letra mayúscula.");
        return false;
    }

    if (!(/[a-z]/.test(contrasena))) {
        alert("Debe contener al menos una letra minúscula.");
        return false;
    }

    if (!(/\d/.test(contrasena))) {
        alert("Debe contener al menos un número.");
        return false;
    }

    if (!(/[-_@#$%&]/.test(contrasena))) {
        alert("Debe contener al menos un carácter especial.");
        return false;
    }

    return true;
}


function mostrarSeccion(nombre) {
    var secciones = document.querySelectorAll("main section");
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.add("seccion-oculta");
    }

    var id = "seccion-" + nombre;
    var seccionMostrar = document.getElementById(id);
    if (seccionMostrar) {
        seccionMostrar.classList.remove("seccion-oculta");
    }

    var resultado = document.getElementById("resultadoSocios");
    if (resultado) resultado.innerHTML = "";
}


function calcularFCM() {
    var edad = parseInt(document.getElementById("edadFCM").value);
    var sexo = document.getElementById("sexoFCM").value;
    var contenido = document.getElementById("contenido");

    if (isNaN(edad) || edad <= 0 || edad > 120 || (sexo !== "H" && sexo !== "M")) {
        alert("Introduce una edad y sexo válidos.");
        return;
    }

    var fcm = (sexo === "H") ? 220 - edad : 226 - edad;

    var html = "<h3>Resultados FCM</h3>";
    html += "<p><strong>Frecuencia Cardíaca Máxima:</strong> " + fcm + " bpm</p>";
    html += "<ul>";
    html += "<li><strong>Zona de Recuperación:</strong> " + (fcm * 0.6).toFixed(0) + " - " + (fcm * 0.7).toFixed(0) + " bpm</li>";
    html += "<li><strong>Zona Aeróbica:</strong> " + (fcm * 0.7).toFixed(0) + " - " + (fcm * 0.8).toFixed(0) + " bpm</li>";
    html += "<li><strong>Zona Anaeróbica:</strong> " + (fcm * 0.8).toFixed(0) + " - " + (fcm * 0.9).toFixed(0) + " bpm</li>";
    html += "<li><strong>Línea Roja:</strong> " + (fcm * 0.9).toFixed(0) + " - " + fcm + " bpm</li>";
    html += "</ul>";

    contenido.innerHTML = html;
}

function calcularCategoria() {
    var ano = parseInt(document.getElementById("anoNacimiento").value);
    var anoActual = new Date().getFullYear();
    var contenido = document.getElementById("contenido");

    if (isNaN(ano) || ano < 1900 || ano > anoActual) {
        alert("Introduce un año válido.");
        return;
    }

    var edad = anoActual - ano;
    var categoria = "Senior";

    if (edad <= 5) categoria = "Micros";
    else if (edad <= 7) categoria = "Pre-Benjamín";
    else if (edad <= 9) categoria = "Benjamín";
    else if (edad <= 11) categoria = "Alevín";
    else if (edad <= 13) categoria = "Infantil";
    else if (edad <= 15) categoria = "Cadete";
    else if (edad <= 17) categoria = "Juvenil";
    else if (edad <= 20) categoria = "Junior";

    contenido.innerHTML = "<h3>Resultado</h3><p>Perteneces a la categoría: <strong>" + categoria + "</strong></p>";
}

function mostrarHorario() {
    var contenido = document.getElementById("contenido");
    var html = "<div style='background:white; padding:10px; border-radius:5px;'>";

    html += "<h3>Horario de Mañana</h3><table><tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";
    for (var i = 9; i < 15; i += 2) {
        html += "<tr><td>" + i + ":00 - " + (i + 2) + ":00</td>";
        for (var j = 0; j < 5; j++) html += "<td>Disponible</td>";
        html += "</tr>";
    }
    html += "</table>";

    html += "<h3>Horario de Tarde</h3><table><tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";
    for (var h = 16; h < 21; h++) {
        html += "<tr><td>" + h + ":00 - " + (h + 1) + ":00</td>";
        for (var d = 0; d < 5; d++) html += "<td>Disponible</td>";
        html += "</tr>";
    }
    html += "</table></div>";

    contenido.innerHTML = html;
}

var socios = [];

function altaSocio() {
    var num = document.getElementById("numSocio").value;
    var dni = document.getElementById("dni").value.trim();
    var nombre = document.getElementById("nombreSocio").value.trim();
    var apellidos = document.getElementById("apellidosSocio").value.trim();
    var fecha = document.getElementById("fechaNacimientoSocio").value;
    var localidad = document.getElementById("localidadSocio").value.trim();

    if (!num || !dni || !nombre || !apellidos || !fecha || !localidad) {
        alert("Rellena todos los campos.");
        return;
    }

    for (var i = 0; i < socios.length; i++) {
        if (socios[i].numSocio == num || socios[i].dni == dni) {
            alert("Ya existe un socio con ese número o DNI.");
            return;
        }
    }

    socios.push({ numSocio: num, dni: dni, nombre: nombre, apellidos: apellidos, fechaNacimiento: fecha, localidad: localidad });
    alert("Socio dado de alta correctamente.");
    document.getElementById("form-socio").reset();
}

function bajaSocio() {
    var dato = document.getElementById("bajaDato").value.trim();
    var nuevos = [];
    var eliminado = false;

    for (var i = 0; i < socios.length; i++) {
        if (socios[i].numSocio != dato && socios[i].dni != dato) nuevos.push(socios[i]);
        else eliminado = true;
    }

    socios = nuevos;
    alert(eliminado ? "Socio eliminado correctamente." : "No se encontró ningún socio con ese número o DNI.");
}

function buscarSocio() {
    var dato = document.getElementById("busquedaDato").value.trim().toLowerCase();
    var resultados = [];

    for (var i = 0; i < socios.length; i++) {
        var s = socios[i];
        if (s.dni.toLowerCase() === dato || s.nombre.toLowerCase().includes(dato) || s.apellidos.toLowerCase().includes(dato)) {
            resultados.push(s);
        }
    }
    mostrarSocios(resultados);
}

function mostrarTodosSocios() {
    mostrarSocios(socios);
}

function buscarPorCategoria() {
    var categoria = document.getElementById("categoriaBusqueda").value;
    var resultados = [];
    for (var i = 0; i < socios.length; i++) {
        if (obtenerCategoria(socios[i].fechaNacimiento) === categoria) resultados.push(socios[i]);
    }
    mostrarSocios(resultados);
}

function buscarPorLocalidad() {
    var localidad = document.getElementById("localidadBusqueda").value.trim().toLowerCase();
    var resultados = [];
    for (var i = 0; i < socios.length; i++) {
        if (socios[i].localidad.toLowerCase() === localidad) resultados.push(socios[i]);
    }
    mostrarSocios(resultados);
}

function obtenerCategoria(fechaNacimiento) {
    var fecha = new Date(fechaNacimiento);
    var edad = new Date().getFullYear() - fecha.getFullYear();
    if (edad <= 12) return "Infantil";
    if (edad <= 16) return "Cadete";
    if (edad <= 18) return "Juvenil";
    return "Senior";
}

function mostrarSocios(lista) {
    var cont = document.getElementById("resultadoSocios");
    if (!lista.length) {
        cont.innerHTML = "<p>No se han encontrado socios.</p>";
        return;
    }

    var html = "<table><tr><th>Nº Socio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Fecha Nacimiento</th><th>Localidad</th><th>Categoría</th></tr>";

    for (var i = 0; i < lista.length; i++) {
        var s = lista[i];
        html += "<tr><td>" + s.numSocio + "</td><td>" + s.dni + "</td><td>" + s.nombre + "</td><td>" + s.apellidos + "</td><td>" + s.fechaNacimiento + "</td><td>" + s.localidad + "</td><td>" + obtenerCategoria(s.fechaNacimiento) + "</td></tr>";
    }

    html += "</table>";
    cont.innerHTML = html;
}









