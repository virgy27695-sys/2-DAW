let palabra = prompt('Introduce una palabra:');

// Convertir la palabra a minúsculas para ignorar mayúsculas/minúsculas
let palabraMinus = palabra.toLowerCase();

// Invertir la palabra
let palabraInvertida = palabraMinus.split('').reverse();

// Verificar si es palíndromo
if (palabraMinus === palabraInvertida) {
  alert('La palabra "' + palabra + '" es un palíndromo.');
} else {
  alert('La palabra "' + palabra + '" NO es un palíndromo.');
}



