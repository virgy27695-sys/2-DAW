//4 Muestra 
let hoy = new Date();
let horaActual = String(hoy.getHours()).padStart(2,"0");
let minutosActual = String(hoy.getMinutes()).padStart(2,"0");
let segundosActual = String(hoy.getSeconds()).padStart(2,"0");
console.log(horaActual + ":" + minutosActual + ":" + segundosActual);

//4.1 muestra en distinto formato la hora actual
let horas12 = new Date();
let horas24 = String(hoy.getHours()).padStart(2,"0");
let minutos = String(hoy.getMinutes()).padStart(2,"0");
let periodo = horas24 >= 12 ? "PM" : "AM";
let hora12 = horas24 >= 12 ? horas24 -12 : horas24;
if(hora12 === 0){
    horas12 = 12;
}
console.log(hora12.toString().padStart(2, "0") +":"+ minutos + " " + periodo);





