window.addEventListener('DOMContentLoaded', function () {
    const btnSignIn = document.querySelector('.sign-in-btn');
    const btnSignUp = document.querySelector('.sign-up-btn');
    const signUpForm = document.querySelector('.sign-up');
    const signInForm = document.querySelector('.sign-in');

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

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.length === 0) {
        let usuarioPredeterminado = new Persona();
        usuarioPredeterminado.incluirDatos("root", "root");
        usuarioPredeterminado.asignarRol("Administrador");
        usuarioPredeterminado.validado = true;
        usuarios.push(usuarioPredeterminado);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    document.getElementById('form-login').onsubmit = function (event) {
        event.preventDefault();

        let nombreUsuario = document.getElementById('nombre-login').value.trim();
        let contrasenaLogin = document.getElementById('password-login').value.trim();

        let usuarioEncontrado = null;

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].nombre === nombreUsuario && usuarios[i].contrasena === contrasenaLogin) {
                usuarioEncontrado = usuarios[i];
                break;
            }
        }

        if (usuarioEncontrado !== null) {

            if (!usuarioEncontrado.validado) {
                alert("Tu cuenta aún no ha sido validada por un administrador.");
                return;
            }

            localStorage.setItem('usuariologueado', JSON.stringify(usuarioEncontrado));

            switch (usuarioEncontrado.rol) {
                case "Administrador":
                    window.location.href = "administrador.html";
                    break;
                case "Profesor":
                    window.location.href = "profesor.html";
                    break;
                case "Alumno":
                    window.location.href = "alumno.html";
                    break;
            }

        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    document.getElementById('form-register').addEventListener("submit", function (event) {
        event.preventDefault();

        let nombreUsuario = document.getElementById('nombre-register').value.trim();
        let contrasena = document.getElementById('password-register').value.trim();
        let confirmarContrasena = document.getElementById('confirm-password-register').value.trim();

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
            let nuevoUsuario = new Persona();
            nuevoUsuario.incluirDatos(nombreUsuario, contrasena);
            nuevoUsuario.asignarRol("Alumno");
            nuevoUsuario.validado = false;

            usuarios.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert('Usuario registrado correctamente');
        }
    });
});











