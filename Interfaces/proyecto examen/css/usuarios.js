class Persona {
    constructor() {
        this.nombre = '';
        this.contrasena = '';
        this.rol = 'Administrador' || 'Profesor' || 'Alumno';
    }
    incluirDatos(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;   
    }
    asisgnarRol(nombre, contrasena,rol){
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.rol = rol;
    }
}