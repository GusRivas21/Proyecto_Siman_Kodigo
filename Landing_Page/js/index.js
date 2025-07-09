// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".nav-dot");
    const totalSlides = slides.length;

    function showSlide(index) {
        const wrapper = document.getElementById("carouselWrapper");
        const translateX = -index * 100;
        wrapper.style.transform = `translateX(${translateX}%)`;

        // Actualizar dots
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function changeSlide(direction) {
        currentSlideIndex += direction;

        if (currentSlideIndex >= totalSlides) {
            currentSlideIndex = 0;
        } else if (currentSlideIndex < 0) {
            currentSlideIndex = totalSlides - 1;
        }

        showSlide(currentSlideIndex);
    }

    function currentSlide(index) {
        currentSlideIndex = index - 1;
        showSlide(currentSlideIndex);
    }

    // Hacer las funciones disponibles globalmente
    window.changeSlide = changeSlide;
    window.currentSlide = currentSlide;

    // Auto-play del carrusel (opcional)
    setInterval(() => {
        changeSlide(1);
    }, 4000); // Cambia cada 4 segundos
});
