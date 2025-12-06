window.addEventListener('DOMContentLoaded', function () {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Generar la tabla con los usuarios
    function generarTablaUsuarios() {
        const tablaBody = document.querySelector('#tabla-usuarios tbody');

        // Recorremos los usuarios y creamos una fila por cada uno
        for (let i = 0; i < usuarios.length; i++) {
            const fila = document.createElement("tr");

            const usuario = usuarios[i];

            let td1 = document.createElement("td");
            td1.innerHTML = usuario.nombre

            fila.append(td1);
            let td2 = document.createElement("td");
            td2.innerHTML = usuario.contrasena
            fila.append(td2);
            let td3 = document.createElement("td");
            td3.innerHTML = usuario.rol;
            fila.append(td3);

            let td4 = document.createElement("td");
            const botonE = document.createElement("button");
            botonE.className = "editar-btn";
            botonE.innerHTML = "Editar";
            botonE.dataset.index = i;
            botonE.addEventListener('click', function () {
                mostrarFormularioEditar(i);
            });
            const botonB = document.createElement("button");
            botonB.className = "borrar-btn";
            botonB.innerHTML = "Borrar";
            botonB.dataset.index = i;
            botonB.addEventListener('click', function () {
                borrarUsuario(i);
            });
            let td5 = document.createElement("td");
            const botonV = document.createElement("button");
            botonV.className = "validar-btn";
            botonV.innerHTML = "Validar";
            botonV.addEventListener('click', function () {
                validarUsu(i);
            });
            td4.append(botonE);
            td4.append(botonB);
            td5.append(botonV);
            fila.append(td4);
            fila.append(td5);
            tablaBody.append(fila);
        }
    }

    // Mostrar el formulario de edición
    function mostrarFormularioEditar(i) {
        const usuario = usuarios[i];
        const nombre = prompt("Editar nombre:", usuario.nombre);
        const contrasena = prompt("Editar contraseña:", usuario.contrasena);
        const rol = prompt("Editar rol ('Usuario', 'Administrador' o 'Profesor'):", usuario.rol);

        if (nombre && rol) {
            // Actualizamos el usuario 
            usuarios[i].nombre = nombre;
            usuarios[i].contrasena = contrasena;
            usuarios[i].rol = rol;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            generarTablaUsuarios(); // Recargamos la tabla con los cambios
            window.location = "administrador.html";
        }
    }

    // Función para borrar un usuario
    function borrarUsuario(i) {
        if (confirm("¿Estás seguro de que quieres borrar este usuario?")) {
            usuarios.splice(i, 1); // Eliminamos el usuario 
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            generarTablaUsuarios(); // Recargamos la tabla después de la eliminación
            window.location = "administrador.html";
        }
    }
    function validarUsu(i) {
        if (confirm("¿Quieres validar a este usuario?")) {
            if ("yes") {
                usuarios[i].validado = true;
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                generarTablaUsuarios(); // Recargamos la tabla después de la eliminación
                window.location = "administrador.html";
                alert("Usuario Validado")
            }
        }
    }

    // Verificar si el usuario logueado es un Administrador
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuariologueado'));
    if (usuarioLogueado && usuarioLogueado.rol === 'Administrador') {
        generarTablaUsuarios(); // Solo si es admin se genera la tabla
    } else {
        console.log("Acceso no autorizado. Solo los administradores pueden ver esta página.");
    }

});
