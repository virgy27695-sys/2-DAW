/*White y Jesse Pinkman tienen que controlar las bolsas de producto azul que cocinan 
para distribuir en Alburquerque. Para ello tienen que crear un formulario 
que almacene la información de cada bolsa y validarlo teniendo en cuenta lo siguiente:
• Fecha de creación: obligatorio y con formato dd/mm/aaaa. 
• Cocinero: será un nombre en clave formado por dos letras en mayúscula, 
un símbolo y cuatro dígitos (ej. WW$1234) 
• Destinatario: estará formado por dos o tres letras mayúsculas correspondientes 
al estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, 
y el código de distrito de 4 digitos (ej. NM_alburquerque:1234). 
• Gramos: será un número del 100 al 5000. 
• Composición: estará formado por una cantidad en gramos seguida de dos conjuntos de 
una o dos letras seguidas o no de un número. (ej. 200gC3OH7) 
• Número de cuenta de EEUU: ver diapositiva siguiente
supongamos que un número de cuenta estadounidense tiene el siguiente formato:  
AY26-123456789012-34
• Dos letras: suponemos que el valor de cada letra es del 1 al 26 (no hay ñ ni ll). 
• Dos dígitos: debe corresponderse con la suma de la primera letra y la segunda: 
en caso de que sea menor que 10 se pone el 0 delante. 
• Un guión. 
• Doce dígitos de cuenta. 
• Un guión.
• Dos dígitos de control: los dos primeros deben ser la suma de los 6 primeros dígitos
 de la cuenta dividido entre 6 y extrayendo solamente su parte entera; 
 y los dos últimos exactamente igual, pero con los 6 siguientes. 
• Si el número está correcto se colocará en un campo de texto al lado del anterior, 
pero sin guiones: solamente los números y las letras
• Si el número está incorrecto se pondrá el borde del input rojo 
y un mensaje en pequeño debajo diciendo error de formato
 */
window.addEventListener("DOMContentLoaded", function () {
    let fecha = /^\d{2}\/\d{2}\/\d{4}$/;
    fecha.test(fechaCreacion);
    let cocina = /^\w{A-Z}{2}{@-_!¡$.}{1}\d{4}$/;
    cocina.test(cocinero);
    let dest = /^\w{A-Z}{2-3}\_\w\:\d{4}$/;
    dest.test(destinatario);
    let gr = /^\d{100 - 5000}$/;
    gr.test(gramos);
    let comp = /^\d\w{g}\w{1-2}*\d$/
    comp.test(composicion);
    let numCuenta = /^$/;
});

function validarFormulario() {
    let fechaCreacion = document.getElementById("input1").value;
    let cocinero = document.getElementById("input2").value;
    let destinatario = document.getElementById("input3").value;
    let gramos = document.getElementById("input4").value;
    let composicion = document.getElementById("input5").value;
    let numeroCuenta = document.getElementById("input6").value;
}