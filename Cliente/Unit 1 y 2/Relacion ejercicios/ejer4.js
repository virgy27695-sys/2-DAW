    //pregunta al usuario un número
    let pregunta = ("Dame el número del 1 al 10");
    let respuesta = Number(window.prompt(pregunta));
    // Muestra un encabezado indicando la tabla de multiplicar del número ingresado
    document.write("<h3>Tabla de multiplicar de: " + respuesta + "</h3></br>");
    // Bucle que va desde 1 hasta 10 para hacer la tabla de multiplicar
    for(let i = 1; i <= 10; i++){
        // Calcula el resultado de multiplicar 'respuesta' por 'i'
        let multiplicar = i * respuesta;
        document.write(respuesta+ " x " + i + " = " + multiplicar + "</br>");
    }
