// === ESTADO GLOBAL ===
let carrito = [];
let productoActual = null;

// === 1. LÓGICA DEL CARRUSEL ===
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function moveSlide(step) {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-play del carrusel
setInterval(() => moveSlide(1), 5000);

// === 2. GESTIÓN DEL MODAL DE PRODUCTO ===
function openModal(title, description, imgSrc, price) {
    const modal = document.getElementById('modal-overlay');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal-price').innerText = price;
    
    // Guardamos el objeto para el carrito
    productoActual = { title, price, imgSrc };
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    productoActual = null;
}

// === 3. SISTEMA DE CARRITO ===

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('active');
}

// Añadir al carrito con lógica de agrupación
document.getElementById('btn-add-to-cart').addEventListener('click', () => {
    if (productoActual) {
        const itemExistente = carrito.find(item => item.title === productoActual.title);

        if (itemExistente) {
            itemExistente.cantidad += 1;
        } else {
            carrito.push({ ...productoActual, cantidad: 1 });
        }

        actualizarInterfazCarrito();
        closeModal();
        
        // Abrir el carrito para feedback visual
        if (!document.getElementById('cart-drawer').classList.contains('active')) {
            toggleCart();
        }
    }
});

function actualizarInterfazCarrito() {
    const container = document.getElementById('cart-items-container');
    const countBadge = document.getElementById('cart-count');
    const totalDisplay = document.getElementById('cart-total-amount');
    
    container.innerHTML = '';
    
    if (carrito.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; margin-top: 40px;">Tu laboratorio está vacío...</p>';
        countBadge.innerText = '0';
        totalDisplay.innerText = '0 Bs';
        return;
    }

    let totalGlobal = 0;
    let unidadesTotales = 0;

    carrito.forEach((item, index) => {
        // CAMBIO AQUÍ: Ahora limpia " Bs" en lugar de "$"
        const precioNum = parseFloat(item.price.replace(' Bs', ''));
        const subtotal = precioNum * item.cantidad;
        totalGlobal += subtotal;
        unidadesTotales += item.cantidad;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.imgSrc}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <div class="quantity-controls">
                        <button onclick="cambiarCantidad(${index}, -1)">-</button>
                        <span>${item.cantidad}</span>
                        <button onclick="cambiarCantidad(${index}, 1)">+</button>
                    </div>
                    <button class="btn-eliminar-item" onclick="eliminarProducto(${index})">
                        Eliminar todo
                    </button>
                </div>
                <div class="item-subtotal">${subtotal.toFixed(2)} Bs</div>
            </div>
        `;
    });

    countBadge.innerText = unidadesTotales;
    totalDisplay.innerText = `${totalGlobal.toFixed(2)} Bs`;
}

// Función para eliminar un producto específico del array
function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarInterfazCarrito();
}

function cambiarCantidad(index, cambio) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad < 1) {
        eliminarProducto(index); // Si llega a 0, lo eliminamos
    } else {
        actualizarInterfazCarrito();
    }
}

// === 4. FINALIZAR COMPRA WHATSAPP ===
function checkoutWhatsApp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let mensaje = "¡Hola Burger Lab! 🧪 Quiero realizar este pedido:\n\n";
    let total = 0;

    carrito.forEach(item => {
        // CAMBIO AQUÍ: Limpieza de " Bs" para el mensaje de WhatsApp
        const precioNum = parseFloat(item.price.replace(' Bs', ''));
        const subtotal = precioNum * item.cantidad;
        mensaje += `• ${item.cantidad}x ${item.title} (${subtotal.toFixed(2)} Bs)\n`;
        total += subtotal;
    });

    mensaje += `\n*TOTAL A PAGAR: ${total.toFixed(2)} Bs*`;
    mensaje += "\n\n¿Me confirman el tiempo de espera?";

    const telefono = "69078166"; 
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// === 5. NAVEGACIÓN Y FILTROS ===
const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if(hamburger) {
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
}

document.querySelectorAll('.nav-main-links a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});

function filterMenu(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    const items = document.querySelectorAll('.product-card');
    items.forEach(item => {
        const match = category === 'all' || item.classList.contains(category);
        if (match) {
            item.classList.remove('hidden');
            item.classList.add('show');
        } else {
            item.classList.remove('show');
            item.classList.add('hidden');
        }
    });
}

// === 6. ANIMACIONES DE APARICIÓN (REVEAL) ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.transition = "all 0.8s ease-out";
    section.style.opacity = "0"; // Inicializamos en 0
    section.style.transform = "translateY(20px)"; // Inicializamos abajo
    observer.observe(section);
});