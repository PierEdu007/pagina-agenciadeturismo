/**
 * Punto de Entrada Principal (Vite / ES Modules)
 * Ayni Andes Expeditions
 */

// Estilos Modulares
import "../css/variables.css";
import "../css/base.css";
import "../css/animations.css";
import "../css/components/nav.css";
import "../css/components/hero.css";
import "../css/components/trust-ticker.css";
import "../css/components/cards.css";
import "../css/components/carousel.css";
import "../css/components/bento-gallery.css";
import "../css/components/booking-modal.css";
import "../css/components/footer.css";

// Módulos de Lógica
import { initCurrency } from "./modules/currency.js";
import { renderTours } from "./modules/tour-renderer.js";
import { initCarousel } from "./modules/carousel.js";
import { initScrollEffects } from "./modules/scroll-effects.js";
import { initBookingEngine } from "./modules/booking-engine.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar gestor de divisas (USD / PEN)
  initCurrency();

  // Renderizar tarjetas de tour dinámicamente
  renderTours();

  // Inicializar carrusel táctil Swiper
  initCarousel();

  // Inicializar motor de reserva y modal Culqi
  initBookingEngine();

  // Inicializar scroll suave y animaciones
  initScrollEffects();

  // Quitar clase preload para activar transiciones solo después de la carga inicial
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove("preload");
    });
  });
});
