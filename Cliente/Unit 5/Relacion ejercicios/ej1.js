/* Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al
hacer click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos
muestra un “alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia.
 */
        let intervalo;

        // Función para comenzar los saludos
        function comenzarSaludos() {
            intervalo = setInterval(function() {
                alert("Hola");
            }, 5000); // 5 segundos
        }

        // Función para parar los saludos
        function pararSaludos() {
            clearInterval(intervalo);
        }
