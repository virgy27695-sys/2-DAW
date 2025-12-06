
    document.write("Cual es el numero más grande de este array: [3, 8, 12, 5, 25, 7]");
    // Define el array de números
    const numeros = [3, 8, 12, 5, 25, 7];
    // Inicializa la variable 'maximo' con el primer número del array
    let maximo = numeros[0];
    // Recorre el array desde el segundo elemento hasta el final
    for (let i = 1; i < numeros.length; i++) {
        // Si el número actual es mayor que 'maximo', actualiza 'maximo'
        if (numeros[i] > maximo) {
         maximo = numeros[i];
        }
    }
     document.write("</br> El número más grande es: ", maximo);

