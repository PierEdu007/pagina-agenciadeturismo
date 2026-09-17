/**
 * Entrada ultra-liviana para la página de error 404
 */
import "../css/variables.css";
import "../css/base.css";
import "../css/components/nav.css";
import "../css/components/not-found.css";
import "../css/components/footer.css";
import { initScrollEffects } from "./modules/scroll-effects.js";

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
  document.body.style.opacity = "1";
  initScrollEffects();
});
