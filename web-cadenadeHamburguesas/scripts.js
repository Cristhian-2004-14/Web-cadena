// === LOGICA DEL CARRUSEL ===
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    
    // Quitar clase activa al actual
    slides[currentSlide].classList.remove('active');
    
    // Calcular nuevo indice
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    
    // Agregar clase activa al nuevo
    slides[currentSlide].classList.add('active');
}

// Auto-play opcional (pasa cada 5 segundos)
setInterval(() => moveSlide(1), 5000);


// === LOGICA DEL MODAL ===
function openModal(title, description, imgSrc, price) {
    const modal = document.getElementById('modal-overlay');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-price').innerText = price;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}


// === MENU HAMBURGUESA ===
const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (para móvil)
document.querySelectorAll('.nav-main-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Esto cierra el menú cuando tocas un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
// Agrega esto al final de tu scripts.js
const links = document.querySelectorAll('.nav-main-links a');
links.forEach(n => n.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('active');
}));
