/**
 * Efectos de Scroll, Lenis Smooth Scroll y Navbar Glassmorphism
 */

import Lenis from "lenis";

export function initScrollEffects() {
  // Inicializar Lenis para scroll ultra suave
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Navbar dinámico al scrollear
  const headerWrapper = document.querySelector(".header-wrapper");
  if (headerWrapper) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        headerWrapper.classList.add("scrolled");
      } else {
        headerWrapper.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // Menú móvil hamburguesa con animaciones
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navOverlay = document.getElementById("nav-overlay");

  function openMobileMenu() {
    navMenu.classList.add("open");
    mobileToggle.classList.add("is-active");
    mobileToggle.setAttribute("aria-label", "Cerrar menú de navegación");
    document.body.classList.add("nav-open");
    if (navOverlay) navOverlay.classList.add("is-visible");
  }

  function closeMobileMenu() {
    navMenu.classList.remove("open");
    mobileToggle.classList.remove("is-active");
    mobileToggle.setAttribute("aria-label", "Abrir menú de navegación");
    document.body.classList.remove("nav-open");
    if (navOverlay) navOverlay.classList.remove("is-visible");
  }

  if (mobileToggle && navMenu) {
    // Toggle al hacer clic en el botón hamburguesa
    mobileToggle.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Cerrar al hacer clic en el overlay
    if (navOverlay) {
      navOverlay.addEventListener("click", closeMobileMenu);
    }

    // Cerrar al hacer clic en un enlace del menú
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Cerrar con la tecla Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        closeMobileMenu();
      }
    });
  }

  // Animaciones de entrada al Viewport (IntersectionObserver)
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("is-visible"));
  }
}
