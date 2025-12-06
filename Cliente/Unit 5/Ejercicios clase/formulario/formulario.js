window.addEventListener("DOMContentLoaded", function(){
   this.document.getElementById("bolsasForm") 
                        .addEventListener("submit", validarFormulario)


function validarFormulario(event) {
    event.preventDefault();
    const fechaCreacion = document.getElementById("fechaCreacion").value;
    const cocinero = document.getElementById("cocinero").value;
    const destinatario = document.getElementById("destinatario").value;
    const gramos = document.getElementById("gramos").value;
    const composicion = document.getElementById("composicion").value;
    const numCuenta = document.getElementById("numCuenta").value;
    const numCuentaSinGuiones = document.getElementById("numCuentaSinGuiones");

    let esValido = true;

    // Validar Fecha de Creación
    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    let fechaCorrecta= new Date(fechaCreacion.slice(3,5)
    ,fechaCreacion.slice(0,2), fechaCreacion.slice(6) )
    
    if (!regexFecha.test(fechaCreacion) || !fechaCorrecta) {
        alert("Fecha de creación inválida. Formato: dd/mm/aaaa");
        esValido = false;
    }

    // Validar Cocinero
    const regexCocinero = /^[A-Z]{2}[$@#&%]\d{4}$/;
    //cocinero.match(regexCocinero)
    if (!regexCocinero.test(cocinero)) {
        alert("Cocinero inválido. Debe ser dos letras en mayúscula, un símbolo y cuatro dígitos (ej. WW$1234)");
        esValido = false;
    }

    // Validar Destinatario
    const regexDestinatario = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;
    if (!regexDestinatario.test(destinatario)) {
        alert("Destinatario inválido. Formato: dos o tres letras mayúsculas, un guión bajo, ciudad en minúsculas, dos puntos y código de distrito de 4 dígitos (ej. NM_alburquerque:1234)");
        esValido = false;
    }

    // Validar Gramos
    const gramosValue = parseInt(gramos);
    if (isNaN(gramosValue) || gramosValue < 100 || gramosValue > 5000) {
        alert("Gramos inválido. Debe ser un número entre 100 y 5000.");
        esValido = false;
    }

    // Validar Composición
    const regexComposicion = /^\d+g([A-Za-z]{1,2}\d?){2}$/;
    if (!regexComposicion.test(composicion)) {
        alert("Composición inválida. Formato: cantidad en gramos seguida de dos conjuntos de letras (una o dos) seguidas o no de números (ej. 200gC3OH7).");
        esValido = false;
    }

    // Validar Número de Cuenta de EEUU
    const regexCuenta = /^([A-Z]{2})(\d{2})-(\d{12})-(\d{2})$/;
    const match = numCuenta.match(regexCuenta);
    if (match) {
        const letras = match[1];
        const sumaDigitos = match[2];
        const cuenta = match[3];
        const control = match[4];
        const sumaLetras = letras.charCodeAt(0) - 64 + letras.charCodeAt(1) - 64;
        const primeros6 = cuenta.slice(0, 6).split('').reduce((a, b) => a + parseInt(b), 0);
        const segundos6 = cuenta.slice(6).split('').reduce((a, b) => a + parseInt(b), 0);

        if (parseInt(sumaDigitos) !== sumaLetras) {
            alert("Número de cuenta inválido: los dígitos después de las letras deben ser la suma de sus valores.");
            esValido = false;
        }

        const controlCalc = `${Math.floor(primeros6 / 6)}${Math.floor(segundos6 / 6)}`;
        if (control !== controlCalc) {
            alert("Número de cuenta inválido: los dígitos de control no coinciden.");
            esValido = false;
        } else {
            // Número de cuenta correcto, quitar guiones
            numCuentaSinGuiones.value = letras + sumaDigitos + cuenta + control;
        }
    } else {
        alert("Número de cuenta inválido. Formato incorrecto.");
        esValido = false;
    }

    if (esValido) {
        alert("Formulario validado correctamente.");
    }
}

})