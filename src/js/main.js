/**
 * Punto de Entrada Principal (Vite / ES Modules)
 * Ayni Andes Expeditions
 */

// Estilos Modulares
import "../css/variables.css";
import "../css/base.css";
import "../css/animations.css";
import "../css/components/preloader.css";
import "../css/components/nav.css";
import "../css/components/hero.css";
import "../css/components/trust-ticker.css";
import "../css/components/cards.css";
import "../css/components/carousel.css";
import "../css/components/experience-modal.css";
import "../css/components/bento-gallery.css";
import "../css/components/cta-banner.css";
import "../css/components/booking-modal.css";
import "../css/components/footer.css";
import "../css/components/ong.css";

// Módulos de Lógica
import { initPreloader } from "./modules/preloader.js";
import { initCurrency } from "./modules/currency.js";
import { renderTours, initTourTabs } from "./modules/tour-renderer.js";
import { initCarousel } from "./modules/carousel.js";
import { initScrollEffects } from "./modules/scroll-effects.js";
import { initBookingEngine } from "./modules/booking-engine.js";
import { initExperienceModal } from "./modules/experience-modal.js";
import { initGallery } from "./modules/gallery.js";

// Inicializar Preloader inmediatamente
initPreloader();

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar gestor de divisas (USD / PEN)
  initCurrency();

  // Renderizar tarjetas de tour dinámicamente y activar pestañas
  renderTours("all");
  initTourTabs();

  // Inicializar modal de detalle de experiencia
  initExperienceModal();

  // Inicializar álbum Pinterest y Lightbox
  initGallery();

  // Inicializar motor de reserva y modal Culqi
  initBookingEngine();

  // Inicializar scroll suave y animaciones
  initScrollEffects();
});
