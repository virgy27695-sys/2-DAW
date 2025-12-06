/*Abrir una ventana nueva: 
//Debes preguntar al usuario si está de acuerdo o no, y solo si 
// acepta se abrirá la nueva ventana. 
//La nueva ventana tendrá las siguientes propiedades: no tendrá barra 
// de herramientas, ni location, ni barra de menú, ni será redimensionable. 
// Tendrá 200x80píxeles y se posicionará en 500x500píxeles. 
La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará 
la ventana. */

let nuevaVentana;
function abrirVentana(){
    let aceptar = confirm("¿Deseas abrir una nueva ventana?");
    if(aceptar &&(!nuevaVentana|| (nuevaVentana && nuevaVentana.closed))){
        nuevaVentana = window.open("","nuevaVentana","toolbar=no, location=no,menubar=no, width=200,heigh=80, left=500, top=500");
        nuevaVentana.document.write(`<p>Esta es la nueva ventana</p><button onclick="window.close()">Cerrar ventana</button>`);
    }
}
//Cerrar la ventana creada:si la ventana está cerrada mostrará un mensaje de error. 
function cerrarVentana(){
    if(nuevaVentana && !nuevaVentana.closed){
        nuevaVentana.close();
    }else{
        alert("La ventana ya ha sido cerrada o no ha sido abierta");
    }
}
//Mover la ventana 10 píxeles a la derecha y abajo.
function moverVentana(){
    if(nuevaVentana && !nuevaVentana.closed){
        nuevaVentana.moveBy(10,10);
    }else{
        alert("La ventana ya ha sido cerrada o no ha sido abierta");
    }
}
//Mover la ventana a la posición 100,100. 
function moverPosicion(){
    if(nuevaVentana && !nuevaVentana.closed){
        nuevaVentana.moveTo(100,100);
    }else{
        alert("La ventana ya ha sido cerrada o no ha sido abierta");
    }
}
//Aumentar el tamaño de la ventana 10 píxeles de ancho y largo. 
function aumentarTamaño(){
    if(nuevaVentana && !nuevaVentana.closed){
        nuevaVentana.resizeBy(10,10);
    }else{
        alert("La ventana ya ha sido cerrada o no ha sido abierta");
    }
}
//Aumentar el tamaño de la ventana a 400x200. 

function cambiarTamañoFijo(){
    if(nuevaVentana && !nuevaVentana.closed){
        nuevaVentana.resizeTo(400,200);
    }else{
        alert("La ventana ya ha sido cerrada o no ha sido abierta");
    }
}