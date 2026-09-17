/**
 * Controlador de Álbum Dinámico estilo Pinterest y Visor Lightbox
 * Hampinahuasi Travel S.A.C.
 */

import { openExperienceModal } from "./experience-modal.js";

export function initGallery() {
  const filterPills = document.querySelectorAll(".gallery-filter-pill");
  const cards = document.querySelectorAll(".pinterest-card");
  const lightbox = document.getElementById("gallery-lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-target-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxBtnTour = document.getElementById("lightbox-btn-tour");
  const lightboxCloseBtn = document.getElementById("lightbox-close-btn");

  if (!cards.length) return;

  // Filtrado por Categorías en el Álbum Pinterest
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      if (pill.classList.contains("active")) return;
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const category = pill.dataset.category || "all";

      cards.forEach(card => {
        const cardCat = card.dataset.category;
        if (category === "all" || cardCat === category) {
          card.classList.remove("is-hidden");
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 30);
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  // Apertura de Lightbox y/o Ficha de Experiencia al hacer clic en un Pin
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      const tourId = card.dataset.tourId;
      const isActionBtn = e.target.closest(".pin-action-btn");

      // Si se pulsa específicamente el botón de experiencia vinculada
      if (isActionBtn && tourId) {
        e.stopPropagation();
        openExperienceModal(tourId);
        return;
      }

      // Si se pulsa en la foto o el pin, abrir el Lightbox cinematográfico
      const img = card.querySelector(".pinterest-img");
      const title = card.querySelector(".pin-title")?.textContent || "";
      const caption = card.querySelector(".pin-caption")?.textContent || "";

      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxCaption) lightboxCaption.textContent = caption;

        if (lightboxBtnTour) {
          if (tourId) {
            lightboxBtnTour.style.display = "inline-flex";
            lightboxBtnTour.onclick = () => {
              closeLightbox();
              openExperienceModal(tourId);
            };
          } else {
            lightboxBtnTour.style.display = "none";
          }
        }

        openLightbox();
      } else if (tourId) {
        openExperienceModal(tourId);
      }
    });
  });

  // Funciones del Lightbox
  function openLightbox() {
    if (!lightbox) return;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox?.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
