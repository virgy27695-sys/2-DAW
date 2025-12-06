    let pregunta = ("Dame una palabra");
    let respuesta = window.prompt(pregunta);
    let reversed_word="";
    // Bucle que recorre la palabra desde el último carácter hasta el primero
    for(let i = respuesta.length; i >= 0; i--){
        reversed_word += respuesta[i];
         // Obtiene el carácter en la posición 'i' y lo convierte a String para mostrarlo
        document.write(String(respuesta.charAt(i)));
    }
