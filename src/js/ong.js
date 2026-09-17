/**
 * Punto de Entrada para la Asociación Civil Hampinahuasi Cusco (ONG)
 * Versión Ultra-Optimizada y Liviana (Sin Swiper, Flatpickr ni Catálogo de Tours)
 */

// Estilos Modulares Requeridos para ONG
import "../css/variables.css";
import "../css/base.css";
import "../css/animations.css";
import "../css/components/preloader.css";
import "../css/components/nav.css";
import "../css/components/ong.css";
import "../css/components/footer.css";

// Módulos de Lógica
import { initPreloader } from "./modules/preloader.js";
import { initCurrency } from "./modules/currency.js";
import { initScrollEffects } from "./modules/scroll-effects.js";

// Inicializar Preloader inmediatamente
initPreloader();

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar gestor de divisas
  initCurrency();

  // Inicializar scroll suave y animaciones de navegación
  initScrollEffects();
});
