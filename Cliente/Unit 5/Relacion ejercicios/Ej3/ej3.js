/*EJERCICIO 3:
Vas a crear un juego que consiste en encontrar parejas en 12 cartas con 6 parejas
de los personajes de los Simpson. El juego consistirá en lo siguiente:
● La aplicación deberá tener una tabla con 3 filas y cuatro columnas de un
color. Además habrá un cuadro de texto con el valor 0 pero no modificable.
● Cuando el usuario haga clic sobre una celda, se mostrará una imagen.
● Cuando el usuario haga clic sobre otra celda, se mostrará otra imagen.
● Si las dos imágenes son iguales, se cambiará el color de la celda y se
añadirá 1 al cuadro de texto.
● Si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el
color inicial.
● En primer lugar, crea un esquema en una hoja con el arbol DOM del
documento html y en otra indica los métodos que vas a crear asociados a qué
evento.
● Trata de utilizar el menor número de variables posibles: utiliza las
propiedades de los elementos para cambiar su comportamiento */

let valores = [1,1,2,2,3,3,4,4,5,5,6,6];

// Mezcla de numeros
for (let i = 0; i < valores.length; i++) {
    let j = Math.floor(Math.random() * valores.length);
    let temp = valores[i];
    valores[i] = valores[j];
    valores[j] = temp;
}

let contador = document.getElementById("contador");
 // primera celda pulsada
let primera = null;
let colorOriginal = "lightblue";
let colorAcertado  = "lightgreen";

// Crear eventos para las 12 celdas
for (let i = 0; i < 12; i++) {
    let celda = document.getElementById("c" + i);

    celda.onclick = function () {

        // Evitar clic si ya está descubierta
        if (celda.style.backgroundColor === colorAcertado) return;

        // Evitar clic si ya está mostrando un número
        if (celda.textContent !== "") return;

        // Mostrar número
        celda.textContent = valores[i];

        if (primera === null) {
            primera = celda;
        } else {
            let id1 = Number(primera.id.slice(1));
            let id2 = i;

            if (valores[id1] === valores[id2]) {
                // Si acertamos pareja la celda se  pintar de verde
                primera.style.backgroundColor = colorAcertado;
                celda.style.backgroundColor = colorAcertado;
                contador.value++;
            } else {
                // si no coinciden despues de un tiempo se ocultan los numeros
                let c1 = primera;
                let c2 = celda;

                setTimeout(() => {
                    c1.textContent = "";
                    c2.textContent = "";
                }, 600);
            }

            primera = null;
        }
    };
}


