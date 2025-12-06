/*Dado el array arr1 con los días de la semana haz un array arr2 que sea 
igual al arr1. 
Elimina de arr2 el último día y comprueba qué ha pasado con arr1. 
Repita la operación con un array llamado arr3 pero que crearás 
haciendo una copia de arr1.
*/

let semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let diasSemana = semana;
diasSemana.pop();
document.write(semana,"<br>");
let diasSemana3=[...semana];
document.write(semana, "<br>");