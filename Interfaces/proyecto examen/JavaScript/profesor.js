window.addEventListener("DOMContentLoaded", function(){
    let preguntas = JSON.parse(localStorage.getItem("preguntas")) || [];
    let categorias = JSON.parse(localStorage.getItem("categorias")) || [];

    const formPregunta = document.getElementById("formPregunta");
    const formExamen   = document.getElementById("formExamen");
    const resultados   = document.getElementById("resultados");
    const banco        = document.getElementById("banco");

    const btnCrear      = document.getElementById("btnCrear");
    const btnExamen     = document.getElementById("btnExamen");
    const btnResultados = document.getElementById("btnResultados");
    const btnBanco      = document.getElementById("btnBanco");


    // OCULTAR TODO

    function ocultar(){
        formPregunta.classList.remove("active");
        formExamen.classList.remove("active");
        resultados.classList.remove("active");
        banco.classList.remove("active");
    }

    // MOSTRAR FORM CREAR

    function mostrarCrear(){
        ocultar();
        formPregunta.classList.add("active");
    }


    // CARGAR CATEGORIAS

    function cargarCategorias(){
        const select = document.getElementById("categoria");

        while(select.firstChild){
            select.removeChild(select.firstChild);
        }

        categorias.forEach(cat => {
            let opt = document.createElement("option");
            opt.value = cat;
            opt.textContent = cat;
            select.appendChild(opt);
        });
    }

    // CARGAR CATEGORIAS

    function cargarCategoriasExamen(){
        const select = document.getElementById("filtroCategoria");

        while(select.firstChild){
            select.removeChild(select.firstChild);
        }

        let optTodas = document.createElement("option");
        optTodas.value = "";
        optTodas.textContent = "Todas";
        select.appendChild(optTodas);

        categorias.forEach(cat => {
            let opt = document.createElement("option");
            opt.value = cat;
            opt.textContent = cat;
            select.appendChild(opt);
        });
    }

    // MOSTRAR BANCO

    function mostrarBanco(){
        const tbody = document.querySelector("#tablaBanco tbody");

        while(tbody.firstChild){
            tbody.removeChild(tbody.firstChild);
        }

        preguntas.forEach((p,i) => {

            let tr = document.createElement("tr");

            let td1 = document.createElement("td");
            td1.textContent = p.pregunta;

            let td2 = document.createElement("td");
            td2.textContent = p.categoria;

            let td3 = document.createElement("td");
            td3.textContent = p.dificultad;

            let td4 = document.createElement("td");

            let btn = document.createElement("button");
            btn.textContent = "Borrar";

            btn.onclick = function(){
                if(confirm("Eliminar pregunta?")){
                    preguntas.splice(i,1);
                    localStorage.setItem("preguntas", JSON.stringify(preguntas));
                    mostrarBanco();
                }
            };

            td4.appendChild(btn);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            tbody.appendChild(tr);

        });
    }

    // GUARDAR PREGUNTA

    formPregunta.onsubmit = function(e){
        e.preventDefault();

        let pregunta = document.getElementById("pregunta").value;

        let r1 = document.getElementById("r1").value;
        let r2 = document.getElementById("r2").value;
        let r3 = document.getElementById("r3").value;

        let correcta = document.getElementById("correcta").value;

        let categoria = document.getElementById("categoria").value;

        let nueva = document.getElementById("nuevaCategoria").value;

        if(nueva.trim() !== ""){
            categoria = nueva;

            if(!categorias.includes(nueva)){
                categorias.push(nueva);
            }

            localStorage.setItem("categorias", JSON.stringify(categorias));

            cargarCategorias();
            cargarCategoriasExamen();
        }

        let dificultad = document.getElementById("dificultad").value;

        preguntas.push({
            pregunta,
            respuestas:[r1,r2,r3],
            correcta,
            categoria,
            dificultad
        });

        localStorage.setItem("preguntas", JSON.stringify(preguntas));

        alert("Pregunta guardada");

        e.target.reset();

        mostrarCrear();
    };

    // BOTONES

    btnCrear.onclick = function(){
        mostrarCrear();
    };

    btnExamen.onclick = function(){
        ocultar();
        formExamen.classList.add("active");
        cargarCategoriasExamen();
    };

    btnResultados.onclick = function(){
        ocultar();
        resultados.classList.add("active");
    };

    btnBanco.onclick = function(){
        ocultar();
        banco.classList.add("active");
        mostrarBanco();
    };

    // INICIO
    cargarCategorias();
    cargarCategoriasExamen();
    mostrarCrear();

});
