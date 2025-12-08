window.addEventListener('DOMContentLoaded', function () {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tablaBody = document.querySelector('#tabla-usuarios tbody');
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuariologueado'));

    if (!usuarioLogueado || usuarioLogueado.rol !== 'Administrador') {
        return;
    }

    function limpiarTabla() {
        while (tablaBody.firstChild)
            tablaBody.removeChild(tablaBody.firstChild);
    }

    function generarTablaUsuarios() {
        limpiarTabla();

        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            const fila = document.createElement('tr');

            const tdNombre = document.createElement('td');
            tdNombre.textContent = usuario.nombre;
            fila.appendChild(tdNombre);

            const tdContrasena = document.createElement('td');
            tdContrasena.textContent = "********";   // CORREGIDO
            fila.appendChild(tdContrasena);

            const tdRol = document.createElement('td');
            tdRol.textContent = usuario.rol;
            fila.appendChild(tdRol);

            const tdAcciones = document.createElement('td');

            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.addEventListener('click', function () {
                const nuevoNombre = prompt("Editar nombre:", usuario.nombre);
                const nuevaContrasena = prompt("Editar contraseña:", usuario.contrasena);
                let nuevoRol = prompt("Editar rol ('Administrador','Profesor','Alumno'):", usuario.rol);

                if (!nuevoNombre || !nuevaContrasena || !nuevoRol) return;

                if (nuevoRol !== "Administrador" && nuevoRol !== "Profesor" && nuevoRol !== "Alumno") {
                    alert("Rol no válido.");
                    return;
                }

                usuario.nombre = nuevoNombre;
                usuario.contrasena = nuevaContrasena;
                usuario.rol = nuevoRol;

                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                generarTablaUsuarios();
            });
            tdAcciones.appendChild(btnEditar);

            const btnBorrar = document.createElement('button');
            btnBorrar.textContent = 'Borrar';
            btnBorrar.addEventListener('click', function () {

                if (usuario.nombre === "root") {
                    alert("No puedes borrar el usuario root.");
                    return;
                }

                if (confirm("¿Borrar este usuario?")) {
                    usuarios.splice(i, 1);
                    localStorage.setItem('usuarios', JSON.stringify(usuarios));
                    generarTablaUsuarios();
                }
            });
            tdAcciones.appendChild(btnBorrar);

            fila.appendChild(tdAcciones);

            const tdValidar = document.createElement('td');
            const btnValidar = document.createElement('button');

            btnValidar.textContent = usuario.validado ? 'Validado' : 'Validar';
            btnValidar.disabled = usuario.validado;

            btnValidar.addEventListener('click', function () {
                usuario.validado = true;
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                generarTablaUsuarios();
                alert("Usuario Validado");
            });

            tdValidar.appendChild(btnValidar);
            fila.appendChild(tdValidar);

            tablaBody.appendChild(fila);
        }
    }

    generarTablaUsuarios();
});
