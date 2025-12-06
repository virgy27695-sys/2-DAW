    let esYMedia = false;
    for(let i = 9; i < 22; i++){
        if(esYMedia){
            document.write("La hora actual es: " + i + ":30" + "</br>");
        } else{
             document.write("La hora actual es: " + i);
             i--;
        }
      esYMedia=! esYMedia;
    }