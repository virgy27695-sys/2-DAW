    //hace todas las tablas de multiplicar del 1 al 10
    let num = 1;// esto sirve para cada vez que se cambie la tabla cambie el numero
    for(let i = 1; i <= 10; i++){
        document.write("<h3>Tabla de multiplicar de: " + num + "</h3></br>");
        num ++;
        for(let j = 1; j <= 10; j++ ){
            let multiplicar = i * j;
            document.write(i + " x " + j + " = " + multiplicar + "</br>");
        }
    }
