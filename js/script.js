
// Modo oscuro global con persistencia
function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById('modoOscuroBtn');

    body.classList.toggle('dark-mode');
    const Oscuro = body.classList.contains('dark-mode');

// Guardar preferencia
    localStorage.setItem('modoOscuro', Oscuro ? 'true' : 'false');

// Cambiar texto del botón
    btn.textContent = Oscuro ? 'Modo Claro' : 'Modo Oscuro';
}

document.addEventListener('DOMContentLoaded', () => {
    const Oscuro = localStorage.getItem('modoOscuro') === 'true';
    const btn = document.getElementById('modoOscuroBtn');

    if (Oscuro) document.body.classList.add('dark-mode');
    if (btn) btn.textContent = Oscuro ? 'Modo Claro' : 'Modo Oscuro';
});

// Efecto hover para cambiar color de elementos
document.querySelectorAll('button, a, img').forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.cursor = 'pointer';
    });
});

// Modal
function mostrarModal(id) {
    const modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
}

// Alerta
function mostrarAlerta(mensaje, tipo = 'warning') {
    const alertBox = document.getElementById('alert');
    if (!alertBox) return;

    alertBox.innerHTML = [
        `<div class="alert alert-${tipo} alert-dismissible fade show" role="alert">`,
        `   <strong>Atención:</strong> ${mensaje}`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>',
        '</div>'
    ].join('');
}

document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    mostrarAlerta('Tu mensaje ha sido enviado correctamente.', 'success');
    this.reset();
});