let pregunta = ("Dame un número para calcular el factorial");
    let respuesta = Number(window.prompt(pregunta));
    let acumulador = 1;
    for(let i = respuesta; i > 1; i--){
        acumulador *= i;
        
    }
    alert("El factorial de " + respuesta + " es " + acumulador);