//Redirige al usuario a Google depues de 5 segundos
/*window.setTimeout(function () {
    window.location.href = "https://www.google.com";
}, 5000);*/

//Imprime en la consola la URL de la página 
console.log("URL actual: " + window.location.href);

//Navegar hacia atras
function atras() {
    window.history.back();
}

//Cambiar titulo al hacer clic en un boton 
function cambiarTitulo() {
    document.title = "Nueva pagina";
}
//Imprimir ancho y alto de la ventana
console.log("Ancho: " + window.innerWidth + "px, Alto: " + window.innerHeight + "px");
//Abrir una ventana nueva y cerrar esa ventana
let nuevaVentana;
function abrirWikipedia() {
    nuevaVentana = window.open("https://es.wikipedia.org", "wikiWindow", "width: 800, height: 600");
}
function cerrarWikipedia() {
    if (nuevaVentana) {
        nuevaVentana.close();
    }
}

