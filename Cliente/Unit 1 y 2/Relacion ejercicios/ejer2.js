    //revisa que numeros del 1 al 100 son divisibles entre 3
    let contador = 0;
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0){
            contador++;
        }
    }
    document.write("Los numeros hasta el 100 divisibles por 3 son: " + contador);