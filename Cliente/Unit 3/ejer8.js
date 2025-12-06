//Ejercicio 8 Crea un programa que le pida al usuario su nombre y apellidos y muestre
//Una propuesta de nombre de usuario compuesto por la inicial, las 3 primeras letras del segundo apellido
// y las 3 primera letra del primer apellido ej: jrodgar
let nombre, apellidos;
do{
    nombre = prompt("Dime tu nombre");
} while(!isNaN(nombre));
do{
    apellidos =prompt("Dime tus apellidos");
}while (!isNaN(apellidos))
let apellido1 = apellidos.split(" ") [0];
let apellido2 = apellidos.split(" ") [1];
alert("tu nick es: " + nombre[0] + apellido1.slice(0,3) + apellido2.slice(0,3));





