# 🧪 The Burger Lab - Menú Digital Experimental

![Logo de The Burger Lab](logo.png)

¡Bienvenido a **The Burger Lab**! Una plataforma web moderna y de alto impacto visual diseñada para una hamburguesería temática donde la ciencia y la gastronomía se fusionan. Este sistema permite a los usuarios gestionar su experiencia gastronómica de punta a punta, desde la selección de reactivos (ingredientes) hasta el soporte técnico, todo centralizado en **WhatsApp**.

---

## 🚀 Funcionalidades del Sistema

* **Catálogo Interactivo:** Filtrado dinámico en tiempo real por categorías (Cárnicas, Pollo, Veggie/Vegan, Postres) con efectos visuales de revelado al hacer scroll.
* **Gestión de Carrito:** Sistema de agrupación de productos, control de cantidades (sumar/restar/eliminar) y cálculo automático de totales expresados en **Bolivianos (Bs)**.
* **Laboratorio de Soporte (WhatsApp Direct):** Modal de contacto especializado para quejas, sugerencias u otros motivos, utilizando un sistema de selección tiqueable (Radio Buttons) personalizado y adaptado a la identidad visual de la marca.
* **Checkout Inteligente:** Generación automática de mensajes estructurados para la API de WhatsApp, incluyendo detalle de productos, cantidades, subtotales y total general para facilitar la toma de pedidos.
* **Diseño Anti-Desborde:** Interfaz responsiva rigurosamente probada en dispositivos móviles. Implementa soluciones técnicas para evitar que los formularios se salgan de la pantalla o sean bloqueados por el teclado virtual del smartphone.
* **Navegación Mobile-First:** Menú lateral tipo "drawer" para dispositivos táctiles y modales con efectos de desenfoque de fondo (`backdrop-filter`) para una estética premium.

---

## 🛠️ Stack Tecnológico

* **Frontend:** HTML5 Semántico y CSS3 Avanzado (CSS Grid, Flexbox, Custom Properties).
* **Lógica:** JavaScript Vanilla (ES6+) enfocado en la manipulación eficiente del DOM y una carga ultrarrápida al no depender de librerías externas.
* **Comunicación:** Integración total con **WhatsApp Business API** para pedidos y soporte técnico.
* **Diseño:** Tipografías Poppins y Bebas Neue (Google Fonts) con una paleta de colores basada en Rojo Laboratorio, Blanco Puro y Azul Oscuro.

---

## 📂 Estructura del Proyecto

```text
BurgerLab-Project/
├── index.html          # Estructura principal y arquitectura del DOM.
├── styles.css          # Core de diseño, estilos responsivos y animaciones de transición.
├── scripts.js          # Motores de carrito, filtrado dinámico y lógica del soporte dual.
├── logo.png            # Identidad visual de la marca.
└── img/                # Directorio de recursos visuales y activos del menú.