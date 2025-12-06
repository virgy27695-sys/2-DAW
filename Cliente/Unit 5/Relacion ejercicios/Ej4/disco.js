/*
Necesitamos almacenar en un programa todos los discos de música que
tenemos en casa. Ahora que sabemos crear nuestros propios objetos es el mejor
modo de guardar esta información.
Crea una clase “disco”que almacene la siguiente información:
• Nombre del disco.
• Grupo de música o cantante.
• Año de publicación.
• Tipo De música(podrá ser “rock”, “pop”, “punk”o “indie”);
• Localización: almacenará un número estantería.
• Prestado: almacenará un valor booleano. Por defecto será false.
• Además tendrá los siguientes métodos:
• Un “constructor”sin parámetros (las 4 primeras propiedades
serán cadenas vacías, la localización será 0 por defecto y prestado estará
a false).
• Un método que permita incluir las cinco primeras propiedades; la
propiedad prestado seguirá a false.
• Un método que permitirá cambiar el número de estantería, la
localización.
• Un método que permitirá cambiar la propiedad Prestado.
• Un método que muestre toda la información del disco.
• Guarda todo el código en un archivo llamado disco.js
En una página html carga el archivo disco.js y un nuevo archivo js para hacer la
gestión donde se haga:
• Crea un array vacío para almacenar los discos.
• Cuando el usuario cargue la página, se cargarán las opciones (por prompt,
visualmente en el html, como quieras…):
• Mostrar número de discos.
• Mostrar listado de discos(y le preguntará si quiere mostrarlos en el
orden que se encuentran en el array, del revés u ordenados
alfabéticamente).
• Mostrar un intervalo de discos(y le pedirá que introduzca el intervalo en
formato inicio-fin; luego deberás extraer el valor inicio y fin).
• Añadir un disco (y le preguntará si quiere añadir al principio o al final).
• Borrar un disco (y le preguntará si quiere borrar al principio o al final).
• Consultar un disco (y le preguntará si quiere consultar por posición o
por nombre).
• Todas las operaciones que se realicen se irán mostrando en la página con
su título.
Prepara un formulario diseñado para almacenar los discos con los que trabajamos
en el ejercicio de gestión de discos. Recuerda qué elementos se almacenaban, y
elije el componente de formulario más adecuado:
• Nombre del disco.
• Grupo de música o cantante.
• Año de publicación.
• Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
• Localización: almacenará un número de estantería.
• Prestado: almacenará un valor booleano. Por defecto será false
 */
class Disco {
  constructor() {
    this.nombre = '';
    this.grupo = '';
    this.ano = '';
    this.tipo = '';
    this.localizacion = 0;
    this.prestado = false;
  }

  incluirDatos(nombre, grupo, ano, tipo, localizacion) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.ano = ano;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.prestado = false;
  }

  cambiarLocalizacion(nuevaLocalizacion) {
    this.localizacion = nuevaLocalizacion;
  }

  cambiarPrestado() {
    this.prestado = !this.prestado;
  }

  mostrarInformacion() {
    return `Nombre: ${this.nombre}, Grupo: ${this.grupo}, Año: ${this.ano}, Tipo: ${this.tipo}, Localización: ${this.localizacion}, Prestado: ${this.prestado ? 'Sí' : 'No'}`;
  }
}




