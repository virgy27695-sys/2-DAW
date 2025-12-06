    let pregunta = ("Dame el total de las notas que vas a calcular");
    let respuesta = Number(window.prompt(pregunta));
    let notas =[];
    for(let i = 0; i < respuesta; i++){
        notas[i] = Number(prompt("Dame una nota " + Number(i +1)));   
    }
    let suma = 0;
    for(let indice in notas){
        suma += notas[indice];
    }
    let media = suma / respuesta;
    alert("La media es " + media);