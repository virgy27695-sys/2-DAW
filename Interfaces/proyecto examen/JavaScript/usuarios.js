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

    validarUsuario(valor) {
        this.validado = valor;
    }
}




