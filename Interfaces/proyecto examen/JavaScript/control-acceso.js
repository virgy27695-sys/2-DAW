window.addEventListener('DOMContentLoaded', function () {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuariologueado'));

    // Obtener enlaces
    const linkAdmin = document.getElementById('linkAdmin');
    const linkProfesor = document.getElementById('linkProfesor');
    const linkAlumno = document.getElementById('linkAlumno');

    // Ocultar todo por defecto
    if (linkAdmin) linkAdmin.style.display = 'none';
    if (linkProfesor) linkProfesor.style.display = 'none';
    if (linkAlumno) linkAlumno.style.display = 'none';

    // Si no hay usuario logueado, redirigir a index
    if (!usuarioLogueado) {
        alert("Debes iniciar sesión primero.");
        window.location.href = "index.html";
        return;
    }

    // Mostrar enlaces según rol
    if (usuarioLogueado.rol === 'Administrador') {
        if (linkAdmin) linkAdmin.style.display = 'inline-block';
        if (linkProfesor) linkProfesor.style.display = 'inline-block';
        if (linkAlumno) linkAlumno.style.display = 'inline-block';
    } else if (usuarioLogueado.rol === 'Profesor') {
        if (linkProfesor) linkProfesor.style.display = 'inline-block';
    } else if (usuarioLogueado.rol === 'Alumno') {
        if (linkAlumno) linkAlumno.style.display = 'inline-block';
    }

    // Control de acceso a páginas específicas
    const pagina = window.location.pathname.split("/").pop();

    if (pagina === "administrador.html" && usuarioLogueado.nombre !== 'root') {
        alert("Solo root puede acceder a esta página.");
        window.location.href = "index.html";
    }

    if (pagina === "profesor.html" && usuarioLogueado.rol !== 'Profesor' && usuarioLogueado.rol !== 'Administrador') {
        alert("Solo profesores o administradores pueden acceder.");
        window.location.href = "index.html";
    }

    if (pagina === "alumno.html" && usuarioLogueado.rol !== 'Alumno' && usuarioLogueado.rol !== 'Administrador' && usuarioLogueado.rol !== 'Profesor') {
    alert("Solo alumnos, profesores o administradores pueden acceder.");
    window.location.href = "index.html";
}
});
