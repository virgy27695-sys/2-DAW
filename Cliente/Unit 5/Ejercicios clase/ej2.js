/*Pon desde la consola un escuchador al BODY de la página de ejemplo 
çpara que al mover el ratón en cualquier punto de la ventana del navegador, 
se muestre por consola la posición del puntero respecto del navegador y 
respecto de la página.
 */
window.addEventListener("DOMContentLoaded", function () {
    addEventListener("mousemove", function (event) 
    { console.log("Posición respecto al navegador " + event.clientX + "," + 
        event.clientY);
        console.log("Posicion respecto a la pantalla " + event.pageX + "," + event.pageY)
    });
});
