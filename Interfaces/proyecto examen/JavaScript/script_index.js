window.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos del DOM
    const btnSignIn = document.querySelector('.sign-in-btn');
    const btnSignUp = document.querySelector('.sign-up-btn');
    const signUpForm = document.querySelector('.sign-up');
    const signInForm = document.querySelector('.sign-in');


    // Evento para alternar entre los formularios de inicio de sesión y registro
    document.addEventListener('click', function (e) {
        if (e.target === btnSignIn) {
            signInForm.classList.add('active');
            signUpForm.classList.remove('active');
        }
        if (e.target === btnSignUp) {
            signUpForm.classList.add('active');
            signInForm.classList.remove('active');
        }
    });

    
    // Obtener los usuarios guardados en localStorage o inicializar uno vacío
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (usuarios.length === 0) {
        let usuarioPredeterminado = new Persona();
        usuarioPredeterminado.incluirDatos("root", "root");
        usuarioPredeterminado.asignarRol("Administrador");
        usuarios.push(usuarioPredeterminado);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }


    // Función de inicio de sesión
    document.getElementById('form-login').onsubmit = function (event) {
        event.preventDefault();

        let nombreUsuario = document.getElementById('nombre-login').value.trim();
        let contrasenaLogin = document.getElementById('password-login').value.trim();

        let usuarioEncontrado = usuarios.find(user => user.nombre === nombreUsuario && user.contrasena === contrasenaLogin);

        // Validación de inicio de sesión
        if (usuarioEncontrado !== undefined) {
            console.log("Usuario logueado correctamente:", usuarioEncontrado);
            localStorage.setItem('usuariologueado', JSON.stringify(usuarioEncontrado));
            // Redirigir según el rol
            switch (usuarioEncontrado.rol) {
                case "Administrador":
                    window.location.href = "administrador.html";  // Página para administrar usuarios
                    break;
                case "Profesor":
                    window.location.href = "profesor.html";  // Página para el profesor
                    break;
                case "Alumno":
                    window.location.href = "alumno.html";  // Página para el alumno
                    break;
                default:
                    console.log("Rol no válido");
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    // Función para añadir un nuevo usuario
    document.getElementById('form-register').addEventListener("submit", function (event) {
        event.preventDefault();

        let nombreUsuario = document.getElementById('nombre-register').value.trim();
        let contrasena = document.getElementById('password-register').value.trim();
        let confirmarContrasena = document.getElementById('confirm-password-register').value.trim();

        // Verificar si las contraseñas coinciden

        function validarContrasena() {
            if (contrasena !== confirmarContrasena) {
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
        if (validarContrasena()) {

            // Crear nuevo usuario solo si las contraseñas coinciden
            let nuevoUsuario = new Persona();
            nuevoUsuario.incluirDatos(nombreUsuario, contrasena);

            // Asignar "Alumno" por defecto.
            nuevoUsuario.asignarRol("Alumno");

            // Agregar el nuevo usuario 
            usuarios.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            console.log('Nuevo usuario creado:', nuevoUsuario);
            alert('Usuario registrado correctamente');
        }
    });
});










