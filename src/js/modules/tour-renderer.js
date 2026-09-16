/**
 * Renderizador de Tarjetas de Experiencias y Filtros de Categoría
 * Hampinahuasi Travel S.A.C.
 */

import { TOURS_DATA, TOUR_CATEGORIES } from "../../data/tours.js";
import { getCurrentCurrency, formatPrice } from "./currency.js";
import { openBookingDrawer } from "./booking-engine.js";
import { initCarousel } from "./carousel.js";

let currentCategory = "all";

export function renderTours(category = "all") {
  currentCategory = category;
  const container = document.getElementById("tours-slider-wrapper");
  if (!container) return;

  container.innerHTML = "";

  const filteredTours = category === "all" 
    ? TOURS_DATA 
    : TOURS_DATA.filter(t => t.category === category);

  const currency = getCurrentCurrency();

  filteredTours.forEach(tour => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const price = currency === "USD" ? tour.priceUSD : tour.pricePEN;

    slide.innerHTML = `
      <article class="tour-card" data-tour-id="${tour.id}" data-category="${tour.category}">
        <div class="tour-media-frame">
          <span class="tour-tag-badge ${tour.isFeatured ? 'featured' : ''}">${tour.tag}</span>
          <span class="tour-pax-badge">
            <i class="fa-solid fa-users-line"></i> ${typeof tour.maxGroup === "number" ? `Máx. ${tour.maxGroup}` : tour.maxGroup}
          </span>
          <img 
            src="${tour.image}" 
            alt="${tour.title} en Cusco Perú" 
            class="tour-card-img" 
            loading="lazy"
          />
        </div>
        <div class="tour-body">
          <div class="tour-meta-row">
            <span class="tour-meta-item">
              <i class="fa-regular fa-clock"></i> ${tour.duration}
            </span>
            <span class="tour-meta-item">
              <i class="fa-solid fa-mountain"></i> ${tour.difficulty}
            </span>
            <span class="tour-meta-item">
              <i class="fa-solid fa-location-arrow"></i> ${tour.altitude}
            </span>
          </div>

          <span class="tour-category-pill">${tour.categoryLabel}</span>

          <h3 class="tour-title">${tour.title}</h3>
          <p class="tour-summary">${tour.summary}</p>

          <ul class="tour-features-list">
            ${tour.inclusions.slice(0, 3).map(inc => `
              <li><i class="fa-solid fa-check"></i> <span>${inc}</span></li>
            `).join("")}
            ${tour.nonInclusions ? `
              <li style="color: var(--color-text-muted); font-size: 0.8rem;"><i class="fa-solid fa-circle-exclamation" style="color: var(--color-terracotta); background-color: var(--color-terracotta-subtle);"></i> <span>No incl. entradas (S/. 20 - 70)</span></li>
            ` : ""}
          </ul>

          <div class="tour-card-footer">
            <div class="tour-pricing">
              <span class="price-subtext" data-tour-subtext>
                ${tour.pricePrivateUSD 
                  ? (currency === "USD" ? `Grupal $${tour.priceUSD} · Privado $${tour.pricePrivateUSD}` : `Grupal S/ ${tour.pricePEN} · Privado S/ ${tour.pricePrivatePEN}`)
                  : "Tarifa por persona"}
              </span>
              <div class="price-amount" data-tour-price>
                ${formatPrice(price, currency)}
                <span class="price-currency">${currency}</span>
              </div>
            </div>
            <button class="btn-book-action" data-action="book" data-tour-id="${tour.id}">
              <i class="fa-solid fa-calendar-check"></i> Reservar
            </button>
          </div>
        </div>
      </article>
    `;

    container.appendChild(slide);
  });

  // Mostrar u ocultar nota legal/ética para experiencias místicas
  const mysticalNotice = document.getElementById("mystical-disclaimer-note");
  if (mysticalNotice) {
    if (category === "mistica") {
      mysticalNotice.style.display = "flex";
    } else {
      mysticalNotice.style.display = "none";
    }
  }

  // Vincular eventos de apertura de reserva
  container.querySelectorAll("[data-action='book']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const tourId = e.currentTarget.dataset.tourId;
      openBookingDrawer(tourId);
    });
  });

  // Re-inicializar el carrusel de Swiper con los slides actuales
  initCarousel();
}

/**
 * Inicializar botones de filtro por pestañas
 */
export function initTourTabs() {
  const tabsContainer = document.getElementById("tours-filter-tabs");
  if (!tabsContainer) return;

  tabsContainer.querySelectorAll(".tour-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".tour-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category || "all";
      renderTours(category);
    });
  });

  // Escuchar cambio de moneda para actualizar tarjetas sin re-renderizar todo
  window.addEventListener("currency-change", (e) => {
    const newCurrency = e.detail.currency;
    document.querySelectorAll(".tour-card").forEach(card => {
      const tourId = card.dataset.tourId;
      const tour = TOURS_DATA.find(t => t.id === tourId);
      if (tour) {
        const priceElement = card.querySelector("[data-tour-price]");
        if (priceElement) {
          const price = newCurrency === "USD" ? tour.priceUSD : tour.pricePEN;
          priceElement.innerHTML = `
            ${formatPrice(price, newCurrency)}
            <span class="price-currency">${newCurrency}</span>
          `;
        }
        const subtextElement = card.querySelector("[data-tour-subtext]");
        if (subtextElement && tour.pricePrivateUSD) {
          subtextElement.textContent = newCurrency === "USD"
            ? `Grupal $${tour.priceUSD} · Privado $${tour.pricePrivateUSD}`
            : `Grupal S/ ${tour.pricePEN} · Privado S/ ${tour.pricePrivatePEN}`;
        }
      }
    });
  });
}
