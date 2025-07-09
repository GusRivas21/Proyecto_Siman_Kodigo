// Funcionalidad para la página de ofertas
document.addEventListener('DOMContentLoaded', function() {
    // Contador regresivo
    function updateCountdown() {
        // Fecha objetivo (puedes cambiar esta fecha)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2);
        targetDate.setHours(14, 35, 42);

        const now = new Date().getTime();
        const timeLeft = targetDate.getTime() - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Si el tiempo se agotó
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }

    // Actualizar el contador cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Funcionalidad para botones de "Comprar Ahora"
    const buyButtons = document.querySelectorAll('.buy-now');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Efecto visual al hacer click
            const originalText = this.textContent;
            this.textContent = '¡Comprando!';
            this.style.background = '#FF6B6B';
            
            setTimeout(() => {
                this.textContent = '¡Comprado!';
                this.style.background = '#4CAF50';
            }, 1000);
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 3000);
        });
    });

    // Animación de entrada para las cards de ofertas
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todas las cards de ofertas
    document.querySelectorAll('.offer-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
});

// Agregar animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .discount-badge {
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
