/*arrancar: Empieza el cronometro
parar: detiene el cronometro sin reiniciar el tiempo, se manera que si luego se pulsa arrancar debe continuar por el mismo instante que se paró
Reiniciar Pone el contador a 00:00:00 y lo reinicia*/
let timer;                // Variable para almacenar el intervalo del cronómetro
let isRunning = false;    // Estado del cronómetro (si está corriendo o detenido)
let hours = 0;            // Horas del cronómetro
let minutes = 0;          // Minutos del cronómetro
let seconds = 0;          // Segundos del cronómetro

function startStop() {
    if (isRunning) {
        // Si el cronómetro está corriendo, lo detenemos
        clearInterval(timer);
        isRunning = false;
    } else {
        // Si el cronómetro está detenido, lo arrancamos
        timer = setInterval(updateTime, 1000); // Actualizamos cada segundo
        isRunning = true;
    }
}

function updateTime() {
    // Incrementar los segundos
    seconds++;

    // Si los segundos llegan a 60, reiniciamos a 0 y sumamos un minuto
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    // Si los minutos llegan a 60, reiniciamos a 0 y sumamos una hora
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    // Mostrar el tiempo actualizado en el formato HH:MM:SS
    document.getElementById('result').value = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time.toString().padStart(2, '0'); // Formatear el tiempo para que tenga dos dígitos
}

function reset() {
    clearInterval(timer);  // Detenemos el cronómetro si está corriendo
    isRunning = false;     // Establecemos el estado a detenido
    hours = 0;             // Reiniciamos las horas
    minutes = 0;           // Reiniciamos los minutos
    seconds = 0;           // Reiniciamos los segundos
    document.getElementById('result').value = "00:00:00"; // Ponemos el cronómetro a 00:00:00
}

