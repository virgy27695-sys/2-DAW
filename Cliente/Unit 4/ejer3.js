/*Haz una función que ordene las notas de un array pasado como parámetro. 
Si le pasamos [4,8,3,10,5] debe devolver [3,4,5,8,10]. Pruébalo en la consola
*/

let lista = [4, 8, 3, 10, 5];

function ordenaNumeros(num1, num2) {
        return num1 - num2;
}
console.log(lista.sort(ordenaNumeros));