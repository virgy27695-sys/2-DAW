/*arrancar: Empieza el cronometro
parar: detiene el cronometro sin reiniciar el tiempo, se manera que si luego se pulsa arrancar debe continuar por el mismo instante que se paró
Reiniciar Pone el contador a 00:00:00 y lo reinicia*/
function display(value) {
    document.getElementById('result').value += value;
}

function start() {
    const fecha = new Date();
    let expression = document.getElementById('start').value;
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
}