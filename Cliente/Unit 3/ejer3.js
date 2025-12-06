//Muestra en distintos formatos la fecha de hoy
let hoy = new Date();
let hoyDia= String(hoy.getDate()).padStart(2,'0');
let hoyMes= String((hoy.getMonth() + 1)).padStart(2,'0');
console.log(hoyDia + "/" +hoyMes  + "/" + hoy.getFullYear());
const diasSemana=["Domigo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"];

let fechaForm = hoy.toLocaleDateString('es-ES',{day:'numeric', month:'long', year:"numeric"});
let fechaFinal = diasSemana[hoy.getDate()] + ", "+fechaForm;
console.log(fechaFinal);
let fechaIngles = hoy.toLocaleDateString('en-US',{weekday:"long", day:'numeric', month:'long', year:"numeric"});
console.log(fechaIngles);





