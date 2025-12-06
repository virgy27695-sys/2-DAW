/* Modificadores:
/i: que no distinga entre Maysc y minsc (Ej. /html/i = buscará html, Html, HTML, …)
/g: búsqueda global, busca todas las coincidencias y no sólo la primera
/m: busca en más de 1 línea (para cadenas con saltos de línea)
EJERCICIO 4: construye una expresión regular para lo que se pide a continuación 
y pruébala con distintas cadenas:
un código postal
un NIF formado por 8 números, un guión y una letra mayúscula o minúscula
un número de teléfono y aceptamos 2 formatos: XXX XX XX XX o XXX XXX XXX. 
EL primer número debe ser un 6, un 7, un 8 o un 9
 */
window.addEventListener("DOMContentLoaded", function(){
    let codigoPostal = /^\d{5}$/;
    console.log("E codigo postal es: " +codigoPostal.test("23455"));
    console.log("E codigo postal es: " +codigoPostal.test("234556es"));
    let nif=/^\d{8}-?{A-z}$/;
    console.log("El dni es: " + nif.test("26054364-x"));
    console.log("El dni es: " + nif.test("2605436-x"));
    let telefono =/^[6-9]\d{2}((\s\d{2}){3} | (\s\d{3}){2})$/
    console.log("El telefono es: " + telefono.test("297 666 333"));
    console.log("El telefono es: " + telefono.test("897 666 333"));
    console.log("El telefono es: " + telefono.test("897 66 33 43"));
});
