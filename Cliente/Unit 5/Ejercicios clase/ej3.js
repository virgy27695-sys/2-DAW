/* Pon desde la consola un escuchador al BODY de la página de ejemplo para que 
al pulsar cualquier tecla nos muestre en un alert el key y el keyCode de la tecla 
pulsada. Pruébalo con diferentes teclas
 */
window.addEventListener("DOMContentLoaded", function () {
    addEventListener("keypress", function (event) 
    { alert("Key code de la tecla pulsada " + event.keyCode + " , y el Key " + 
        event.key);
    });
  
});
