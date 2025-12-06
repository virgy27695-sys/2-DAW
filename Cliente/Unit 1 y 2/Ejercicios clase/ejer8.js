let pregunta = ("Adivina el número del 1 al 10");
    let respuesta = Number(window.prompt(pregunta));
    let max = 10;
    let numero = Number((Math.random() * max +1).toFixed(0));
    
    while(respuesta !== numero){
        if(isNaN(respuesta)){
        respuesta = prompt("No es un número lo que estas introduciendo");
        }else if(respuesta < numero){
            respuesta = prompt("El número es más alto. \nAdivina el número del 1 al 10");
        }else if(respuesta > numero){
            respuesta = prompt("El número es más bajo. \nAdivina el número del 1 al 10");
        }else{
            respuesta = prompt("Error. Intentalo de nuevo. \nAdivina el número del 1 al 10");
        }
        respuesta = Number(respuesta);
    }
    alert("Has acertado el número" + " " + numero);