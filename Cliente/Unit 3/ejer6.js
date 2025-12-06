//Ejercicio 6 Crea un programa que le pida al usuario que elija una opción del siguiente menu:
let option = prompt("\n" +
  "1. Potencia\n" +
  "2. Raíz\n" +
  "3. Redondeo");

if (isNaN(valor)) {
  alert("Error: Debes ingresar un número válido.");
} else {
  let resultado;
  switch(opcion) {
    case "1":
      // Potencia
      let base = parseFoat(prompt("Introduce la base:"));
      let exponente = parseFoat(prompt("Introduce la base:"));
      let resultado = Math.pow(base, exponente);
      alert("El numero " + base + "elevado a  " + exponente +" es: " + resultado);
      break;

    case "2":
      // Raíz
      let raiz;
      do{
        raiz = parseFloat(prompt("Introduce un número no negativo"));
      } while(raiz < 0);
      let resultado2 = Math.sqrt(raiz);
      alert("La raíz cuadrada de: " + raiz + "es " + resultado2);
      break;

    case "3":
      // Redondeo
      let decimal = prompt("Introduce un número decimal");
      let redondeoNormal= Math.round(decimal);
      alert("El redondeo es: " + redondeoNormal);
      break;

    default:
      alert("Error: Opción no válida.");
  }
}





