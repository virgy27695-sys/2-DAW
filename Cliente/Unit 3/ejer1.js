//Ejercicio 1
let fechaNac1=new Date("1995-06-27");
let fechaNac2= new Date(1995,6,27);
//Ejercicio 2
//2.1 Obtener el día de la semana
const weekDay =["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"];
    console.log("He nacido en " + weekDay[fechaNac1.getDay()]);
    console.log(`He nacido en ${weekDay[fechaNac1.getDay()]}`);
//2.2 cambia el año
fechaNac1.setFullYear(2025);
//2.3 dia de la semana del año actual
console.log(`Este año mi cumple es en: ${weekDay[fechaNac1.getDay()]}`);
//2.4 Dias vividos
let fechaHoy =new Date();
let difFechas = fechaHoy - fechaNac2;
console.log("Diferencia de fechas: " + difFechas );
let diasVida = difFechas/(24*60*60*1000);
console.log(`He vivido: "  ${parseInt(diasVida)} días`);
//2.5 Comprobar los años que mi cumple es domingo 
for(let i =fechaNac2.getFullYear(); i <= 2050;i++){
        fechaNac2.setFullYear(i);
    let diaSemana=fechaNac2.getDay();
    if(diaSemana=== 0){
        console.log(`El año ${i} mi cumple cae en Domingo`);
    }
}




