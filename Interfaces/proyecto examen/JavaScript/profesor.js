window.addEventListener('DOMContentLoaded', function () {
    // -------------------
    // DATOS PRINCIPALES
    // -------------------
    let preguntas = JSON.parse(localStorage.getItem('preguntas')) || [];
    let examenes = JSON.parse(localStorage.getItem('examenes')) || [];
    let intentos = JSON.parse(localStorage.getItem('intentos')) || [];
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuariologueado'));

    if (!usuarioLogueado || (usuarioLogueado.rol !== 'Profesor' && usuarioLogueado.rol !== 'Administrador')) {
    alert("Acceso no autorizado. Solo profesores o administradores pueden ver esta página.");
    window.location.href = "index.html";
    return;
}

    // -------------------
    // ELEMENTOS DEL DOM
    // -------------------
    const formPregunta = document.getElementById('formPregunta');
    const formExamen = document.getElementById('formExamen');
    const tablaResultados = document.getElementById('tablaResultados');
    const contPreguntas = document.getElementById('contPreguntas');

    const btnCrearPregunta = document.getElementById('btnCrearPregunta');
    const btnGenerarExamen = document.getElementById('btnGenerarExamen');
    const btnVerResultados = document.getElementById('btnVerResultados');

    const inputPregunta = document.getElementById('inputPregunta');
    const inputR1 = document.getElementById('inputR1');
    const inputR2 = document.getElementById('inputR2');
    const inputR3 = document.getElementById('inputR3');
    const selectCorrecta = document.getElementById('selectCorrecta');
    const inputCategoria = document.getElementById('inputCategoria');
    const selectDificultad = document.getElementById('selectDificultad');

    const inputNombreExamen = document.getElementById('inputNombreExamen');
    const inputFechaExamen = document.getElementById('inputFechaExamen');
    const inputCatFiltro = document.getElementById('inputCatFiltro');
    const selectDifFiltro = document.getElementById('selectDifFiltro');

    const tbodyResultados = tablaResultados.querySelector('tbody');


    // FUNCIONES AUXILIARES
    function ocultarSecciones() {
        formPregunta.classList.remove('active');
        formExamen.classList.remove('active');
        tablaResultados.classList.remove('active');
    }

    function actualizarCheckboxPreguntas() {
        // Limpiar contenedor
        while (contPreguntas.firstChild) contPreguntas.removeChild(contPreguntas.firstChild);

        const filtroCat = inputCatFiltro.value.toLowerCase();
        const filtroDif = selectDifFiltro.value;

        for (let i = 0; i < preguntas.length; i++) {
            const p = preguntas[i];
            if ((!filtroCat || p.categoria.toLowerCase() === filtroCat) &&
                (!filtroDif || p.dificultad === filtroDif)) {

                const label = document.createElement('label');
                const cb = document.createElement('input');
                cb.type = 'checkbox';
                cb.dataset.index = i;

                label.appendChild(cb);
                label.appendChild(document.createTextNode(` ${p.pregunta} [${p.categoria}, ${p.dificultad}]`));
                contPreguntas.appendChild(label);
                contPreguntas.appendChild(document.createElement('br'));
            }
        }
    }

    function mostrarResultados() {
        while (tbodyResultados.firstChild) tbodyResultados.removeChild(tbodyResultados.firstChild);

        for (let i = 0; i < intentos.length; i++) {
            const intento = intentos[i];
            const fila = document.createElement('tr');

            const tdAlumno = document.createElement('td');
            tdAlumno.textContent = intento.alumno;
            fila.appendChild(tdAlumno);

            const tdExamen = document.createElement('td');
            tdExamen.textContent = intento.examen;
            fila.appendChild(tdExamen);

            const tdCorrectas = document.createElement('td');
            tdCorrectas.textContent = intento.correctas.filter(x => x === true).length + '/' + intento.correctas.length;
            fila.appendChild(tdCorrectas);

            const tdDetalles = document.createElement('td');
            const btnDet = document.createElement('button');
            btnDet.textContent = 'Ver';
            btnDet.addEventListener('click', function () {
                let texto = 'Respuestas del alumno:\n';
                for (let j = 0; j < intento.respuestasAlumno.length; j++) {
                    texto += `Pregunta ${j + 1}: ${intento.respuestasAlumno[j]}, ${intento.correctas[j] ? 'Correcta' : 'Incorrecta'}\n`;
                }
                alert(texto);
            });
            tdDetalles.appendChild(btnDet);
            fila.appendChild(tdDetalles);

            tbodyResultados.appendChild(fila);
        }
    }

    // EVENTOS


    // Navegación
    btnCrearPregunta.addEventListener('click', function () {
        ocultarSecciones();
        formPregunta.classList.add('active');
    });

    btnGenerarExamen.addEventListener('click', function () {
        ocultarSecciones();
        formExamen.classList.add('active');
        actualizarCheckboxPreguntas();
    });

    btnVerResultados.addEventListener('click', function () {
        ocultarSecciones();
        tablaResultados.classList.add('active');
        mostrarResultados();
    });

    // Crear pregunta
    formPregunta.addEventListener('submit', function (e) {
        e.preventDefault();
        preguntas.push({
            pregunta: inputPregunta.value,
            respuestas: [inputR1.value, inputR2.value, inputR3.value],
            correcta: selectCorrecta.value,
            categoria: inputCategoria.value,
            dificultad: selectDificultad.value
        });
        localStorage.setItem('preguntas', JSON.stringify(preguntas));

        // Limpiar formulario
        inputPregunta.value = '';
        inputR1.value = '';
        inputR2.value = '';
        inputR3.value = '';
        inputCategoria.value = '';
        selectCorrecta.value = '0';
        selectDificultad.value = 'INICIAL';

        actualizarCheckboxPreguntas();
        alert('Pregunta creada correctamente');
    });

    // Generar examen
    formExamen.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre = inputNombreExamen.value;
        const fecha = inputFechaExamen.value;
        const checkboxes = contPreguntas.querySelectorAll('input[type="checkbox"]');
        const preguntasSeleccionadas = [];

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                preguntasSeleccionadas.push(preguntas[parseInt(checkboxes[i].dataset.index)]);
            }
        }

        if (!nombre || !fecha || preguntasSeleccionadas.length === 0) {
            alert('Completa todos los campos y selecciona al menos una pregunta');
            return;
        }

        examenes.push({ nombre, fecha, preguntas: preguntasSeleccionadas });
        localStorage.setItem('examenes', JSON.stringify(examenes));
        alert('Examen generado correctamente');

        // Limpiar formulario
        inputNombreExamen.value = '';
        inputFechaExamen.value = '';
        inputCatFiltro.value = '';
        selectDifFiltro.value = '';
        actualizarCheckboxPreguntas();
    });

    // Actualizar preguntas según filtros
    inputCatFiltro.addEventListener('input', actualizarCheckboxPreguntas);
    selectDifFiltro.addEventListener('change', actualizarCheckboxPreguntas);

});



