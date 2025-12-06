let cadena = prompt("Introduce una cadena de texto:");

// Variable para contar números
let contador = 0;

// Recorrer cada carácter de la cadena
for (let char of cadena) {
  // Comprobar si el carácter es un dígito
  if (char >= '0' && char <= '9') {
    contador++;
  }
}

alert('La cadena contiene ' + contador + ' números.');



