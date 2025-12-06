let palabra = window.prompt("Dame una palabra");

// Convierte la pabra a minúsculas
palabra = palabra.toLowerCase();

const vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

// Cuenta las vocales
for (let letra of palabra) {
  if (vocales.includes(letra)) {
    contador++;
  }
}

document.write('La palabra "' + palabra + '" tiene ' + contador + ' vocales.');



