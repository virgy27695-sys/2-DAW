    let pregunta = ("Elige un número");
    let respuesta = Number(window.prompt(pregunta));
    let pregunta2 = ("Elige otro número");
    let respuesta2 = Number(window.prompt(pregunta2));
    if(respuesta > 0 && respuesta2 == 0){
        alert("Cuadrante real positivo");
    } else if(respuesta > 0 && respuesta2 > 0){
        alert("Cuadrante imaginario positivo");
    } else if(respuesta2 == 0 && respuesta < 0){
        alert("Cuadrante real negativo");
    } else if(respuesta2 < 0 && respuesta < 0){
        alert("Cuadrante real negativo");
    } else{
        alert("Estamos en eje 0");
    }