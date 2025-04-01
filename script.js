function showAlert() {
    alert("Próximamente: Sección de Preguntas Frecuentes. ¡Vuelve pronto!");
}

// Efecto suave al hacer scroll (opcional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});