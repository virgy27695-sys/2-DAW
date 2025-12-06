/* Realiza un programa que al hacer doble click en la pantalla del navegador, cambie
el fondo a un color aleatorio.
 */
// Función para generar un color aleatorio
function generarColorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Evento para el doble click en la pantalla
document.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = generarColorAleatorio();
});
