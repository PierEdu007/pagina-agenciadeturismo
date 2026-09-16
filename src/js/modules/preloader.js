/**
 * Gestor del Loading Screen / Preloader & Skeleton Transitions
 * Hampinahuasi Travel S.A.C.
 */

export function initPreloader() {
  const preloader = document.getElementById("app-preloader");
  if (!preloader) return;

  const minDisplayTime = 750; // Garantiza una transición estética sin parpadeos
  const startTime = performance.now();

  function hidePreloader() {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);

    setTimeout(() => {
      preloader.classList.add("preloader-hidden");
      document.body.classList.remove("preload");

      // Remover del DOM una vez terminada la animación CSS
      setTimeout(() => {
        if (preloader.parentNode) {
          preloader.style.display = "none";
        }
      }, 700);
    }, remaining);
  }

  if (document.readyState === "complete") {
    hidePreloader();
  } else {
    window.addEventListener("load", hidePreloader);
    // Fallback de seguridad en caso de demora de assets externos
    setTimeout(hidePreloader, 2800);
  }
}
