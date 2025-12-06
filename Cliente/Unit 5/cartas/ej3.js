/* Vas a crear un juego que consiste en encontrar parejas en 12 cartas con 6 parejas
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
propiedades de los elementos para cambiar su comportamiento 
 */
window.addEventListener("load", function () {

    let primera = null;
    let segunda = null;

    // 6 parejas → 12 cartas
    let cartas = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png"];
    cartas = cartas.concat(cartas);

    // Mezclar sin funciones
    for (let i = cartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = cartas[i];
        cartas[i] = cartas[j];
        cartas[j] = t;
    }

    let celdas = document.querySelectorAll(".card");
    let marcador = document.getElementById("puntaje");

    // Asignar cartas ocultas a cada celda (sin forEach)
    for (let i = 0; i < celdas.length; i++) {

        celdas[i].dataset.img = cartas[i];
        celdas[i].querySelector("img").src = "img/0.png";

        celdas[i].addEventListener("click", function () {

            if (this === primera || this === segunda) return;

            this.querySelector("img").src = this.dataset.img;

            if (!primera) {
                primera = this;
                return;
            }

            if (!segunda) {
                segunda = this;
            }

            setTimeout(() => {

                if (primera.dataset.img === segunda.dataset.img) {
                    marcador.value = Number(marcador.value) + 1;
                } else {
                    primera.querySelector("img").src = "img/0.png";
                    segunda.querySelector("img").src = "img/0.png";
                }

                primera = null;
                segunda = null;

            }, 800);

        });
    }

});




