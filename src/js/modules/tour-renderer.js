/**
 * Renderizador de Tarjetas de Tour
 * Desacoplado para consumir datos locales o Supabase REST API
 */

import { TOURS_DATA } from "../../data/tours.js";
import { getCurrentCurrency, formatPrice } from "./currency.js";
import { openBookingDrawer } from "./booking-engine.js";

export function renderTours() {
  const container = document.getElementById("tours-slider-wrapper");
  if (!container) return;

  container.innerHTML = "";

  TOURS_DATA.forEach(tour => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const currency = getCurrentCurrency();
    const price = currency === "USD" ? tour.priceUSD : tour.pricePEN;

    slide.innerHTML = `
      <article class="tour-card" data-tour-id="${tour.id}">
        <div class="tour-media-frame">
          <span class="tour-tag-badge ${tour.isFeatured ? 'featured' : ''}">${tour.tag}</span>
          <span class="tour-pax-badge">
            <i class="fa-solid fa-users-line"></i> Máx. ${tour.maxGroup}
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

          <h3 class="tour-title">${tour.title}</h3>
          <p class="tour-summary">${tour.summary}</p>

          <ul class="tour-features-list">
            ${tour.inclusions.slice(0, 3).map(inc => `
              <li><i class="fa-solid fa-check"></i> <span>${inc}</span></li>
            `).join("")}
          </ul>

          <div class="tour-card-footer">
            <div class="tour-pricing">
              <span class="price-subtext">Tarifa por persona</span>
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

  // Vincular eventos de apertura de reserva
  container.querySelectorAll("[data-action='book']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const tourId = e.currentTarget.dataset.tourId;
      openBookingDrawer(tourId);
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
      }
    });
  });
}
