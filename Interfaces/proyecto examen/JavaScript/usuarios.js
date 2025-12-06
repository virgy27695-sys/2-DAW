// Definir la clase Persona
class Persona {
    constructor() {
        this.nombre = '';
        this.contrasena = '';
        this.rol = ''; 
        this.validado = false;
    }

    incluirDatos(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }

    asignarRol(rol) {
        this.rol = rol;
    }

    // Método validar usuario
    validarUsuario(validado) {
        this.validado = validado;
    }
}



