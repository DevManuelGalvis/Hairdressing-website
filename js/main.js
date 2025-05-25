// Controlador principal de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes
    initNavigation();
    initServiceCards();
    initTimeSlots();
    initFormSubmission();
    initScrollAnimations();
    initSmoothScrolling();
});

// Función para inicializar la navegación
function initNavigation() {
    const ctaHeader = document.getElementById('ctaHeader');
    const btnPrimary = document.getElementById('btnPrimary');
    const btnSecondary = document.getElementById('btnSecondary');
    
    if (ctaHeader) {
        ctaHeader.addEventListener('click', scrollToDemo);
    }
    
    if (btnPrimary) {
        btnPrimary.addEventListener('click', scrollToDemo);
    }
    
    if (btnSecondary) {
        btnSecondary.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('como-funciona').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Función para inicializar las tarjetas de servicio interactivas
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            serviceCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// Función para inicializar los slots de tiempo interactivos
function initTimeSlots() {
    const slots = document.querySelectorAll('.slot');
    
    slots.forEach(slot => {
        slot.addEventListener('click', function() {
            slots.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// Función para manejar el envío del formulario
function initFormSubmission() {
    const form = document.getElementById('signupForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío del formulario
            const notification = document.getElementById('notification');
            notification.classList.add('show');
            
            // Ocultar notificación después de 4 segundos
            setTimeout(() => {
                notification.classList.remove('show');
            }, 4000);
            
            // Reiniciar formulario
            this.reset();
        });
    }
}

// Función para inicializar animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas de características y pasos
    document.querySelectorAll('.feature-card, .step, .testimonial').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para inicializar el desplazamiento suave
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para desplazarse a la sección de demostración
function scrollToDemo() {
    document.getElementById('demo').scrollIntoView({
        behavior: 'smooth'
    });
}