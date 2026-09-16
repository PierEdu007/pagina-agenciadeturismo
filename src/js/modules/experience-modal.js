/**
 * Controlador de Modal de Detalle de Experiencia y Ficha Técnica
 * Hampinahuasi Travel S.A.C.
 */

import { TOURS_DATA } from "../../data/tours.js";
import { getCurrentCurrency, formatPrice } from "./currency.js";
import { openBookingDrawer } from "./booking-engine.js";

let activeTourId = null;

export function initExperienceModal() {
  const backdrop = document.getElementById("experience-modal-backdrop");
  if (!backdrop) return;

  // Cerrar al hacer clic en el backdrop fuera del diálogo
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeExperienceModal();
    }
  });

  // Cerrar con Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
      closeExperienceModal();
    }
  });

  // Escuchar cambios de divisa para actualizar el footer si el modal está abierto
  window.addEventListener("currency-change", () => {
    if (activeTourId && backdrop.classList.contains("is-open")) {
      updateModalPricing(activeTourId);
    }
  });
}

export function openExperienceModal(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;

  activeTourId = tourId;
  const backdrop = document.getElementById("experience-modal-backdrop");
  const dialog = document.getElementById("experience-modal-dialog");
  if (!backdrop || !dialog) return;

  const currency = getCurrentCurrency();
  const price = currency === "USD" ? tour.priceUSD : tour.pricePEN;

  // Construcción del contenido del modal
  dialog.innerHTML = `
    <!-- Hero con Imagen y Badges -->
    <div class="exp-modal-hero">
      <img src="${tour.image}" alt="${tour.title}" class="exp-modal-hero-img" decoding="async" />
      <div class="exp-modal-hero-overlay"></div>
      
      <button class="exp-modal-close-btn" id="btn-close-exp-modal" aria-label="Cerrar ficha de experiencia">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="exp-modal-hero-caption">
        <div class="exp-modal-badges">
          <span class="exp-modal-tag"><i class="fa-solid fa-certificate"></i> ${tour.tag}</span>
          <span class="exp-modal-category"><i class="fa-solid fa-bookmark"></i> ${tour.categoryLabel}</span>
        </div>
        <h2 class="exp-modal-title">${tour.title}</h2>
      </div>
    </div>

    <!-- Contenido Detallado Scrolleable -->
    <div class="exp-modal-content-scroll">
      
      <!-- Cuadrícula de Métricas Clave -->
      <div class="exp-meta-grid">
        <div class="exp-meta-box">
          <div class="exp-meta-box-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div class="exp-meta-box-info">
            <span class="exp-meta-box-label">Punto de Salida</span>
            <span class="exp-meta-box-value">${tour.departureLocation || 'Cusco'}</span>
          </div>
        </div>
        <div class="exp-meta-box">
          <div class="exp-meta-box-icon"><i class="fa-regular fa-clock"></i></div>
          <div class="exp-meta-box-info">
            <span class="exp-meta-box-label">Horario de Salida</span>
            <span class="exp-meta-box-value">${tour.departureTime || 'Horario Flexible'}</span>
          </div>
        </div>
        <div class="exp-meta-box">
          <div class="exp-meta-box-icon"><i class="fa-solid fa-hourglass-half"></i></div>
          <div class="exp-meta-box-info">
            <span class="exp-meta-box-label">Duración</span>
            <span class="exp-meta-box-value">${tour.duration}</span>
          </div>
        </div>
        <div class="exp-meta-box">
          <div class="exp-meta-box-icon"><i class="fa-solid fa-mountain"></i></div>
          <div class="exp-meta-box-info">
            <span class="exp-meta-box-label">Dificultad & Altitud</span>
            <span class="exp-meta-box-value">${tour.difficulty} (${tour.altitude})</span>
          </div>
        </div>
      </div>

      <!-- Descripción General -->
      <div class="exp-desc-box">
        ${tour.description || tour.summary}
      </div>

      <!-- Puntos y Horarios de Retorno -->
      ${tour.returnLocation ? `
        <div class="exp-route-strip">
          <div class="exp-route-row">
            <i class="fa-solid fa-van-shuttle"></i>
            <strong>Retorno garantizado:</strong>
            <span>${tour.returnLocation} a las ${tour.returnTime || 'culminar la ruta'}</span>
          </div>
          <div class="exp-route-row">
            <i class="fa-solid fa-users-line"></i>
            <strong>Modalidad de viaje:</strong>
            <span>${tour.maxGroup}</span>
          </div>
        </div>
      ` : ''}

      <!-- Lugares a Visitar -->
      ${tour.places && tour.places.length ? `
        <div class="exp-section-block">
          <h4><i class="fa-solid fa-map-location-dot"></i> Lugares y Atractivos a Visitar</h4>
          <div class="exp-places-chips">
            ${tour.places.map(place => `
              <span class="exp-place-chip">
                <i class="fa-solid fa-compass"></i> ${place}
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Ficha Técnica de Trekking (si existe) -->
      ${tour.technicalSheet ? `
        <div class="exp-section-block">
          <h4><i class="fa-solid fa-person-hiking"></i> Ficha Técnica de Caminata</h4>
          <div class="exp-tech-grid">
            <div class="exp-tech-item">
              <span class="exp-tech-label">Distancia Total</span>
              <span class="exp-tech-val">${tour.technicalSheet.hikeDistance}</span>
            </div>
            <div class="exp-tech-item">
              <span class="exp-tech-label">Tiempo de Caminata</span>
              <span class="exp-tech-val">${tour.technicalSheet.hikeTime}</span>
            </div>
            <div class="exp-tech-item">
              <span class="exp-tech-label">Altitud Máxima</span>
              <span class="exp-tech-val">${tour.technicalSheet.maxAltitude}</span>
            </div>
            <div class="exp-tech-item">
              <span class="exp-tech-label">Desnivel Positivo</span>
              <span class="exp-tech-val">${tour.technicalSheet.elevationGain}</span>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Menú de Picnic (si existe) -->
      ${tour.picnicMenu ? `
        <div class="exp-section-block">
          <h4><i class="fa-solid fa-utensils"></i> Menú Gastronómico Campestre</h4>
          <div class="exp-picnic-container">
            <div class="exp-picnic-card">
              <h5><i class="fa-solid fa-crown"></i> Menú Premium</h5>
              <ul>
                ${tour.picnicMenu.premium.map(item => `<li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>`).join('')}
              </ul>
            </div>
            <div class="exp-picnic-card">
              <h5><i class="fa-solid fa-seedling"></i> Menú Vegetariano</h5>
              <ul>
                ${tour.picnicMenu.vegetariano.map(item => `<li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Inclusiones y Exclusiones -->
      <div class="exp-inclusions-grid">
        <div class="exp-list-box inclusions-box">
          <h5><i class="fa-solid fa-circle-check" style="color: #2ECC71;"></i> Qué Incluye</h5>
          <ul>
            ${tour.inclusions.map(inc => `
              <li><i class="fa-solid fa-check"></i> <span>${inc}</span></li>
            `).join('')}
          </ul>
        </div>

        <div class="exp-list-box non-inclusions-box">
          <h5><i class="fa-solid fa-circle-xmark" style="color: var(--color-terracotta);"></i> Qué No Incluye</h5>
          <ul>
            ${tour.nonInclusions ? tour.nonInclusions.map(noInc => `
              <li><i class="fa-solid fa-xmark"></i> <span>${noInc}</span></li>
            `).join('') : '<li><i class="fa-solid fa-minus"></i> <span>Gastos personales no especificados</span></li>'}
          </ul>
        </div>
      </div>

      <!-- Notas sobre Boletos Turísticos -->
      ${tour.notes && tour.notes.length ? `
        <div class="exp-callout-notes">
          <h5><i class="fa-solid fa-ticket"></i> Información de Boletos y Notas Importantes</h5>
          <ul>
            ${tour.notes.map(note => `
              <li><i class="fa-solid fa-circle-info"></i> <span>${note}</span></li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Advertencia de Salud y Restricciones Físicas -->
      ${tour.important ? `
        <div class="exp-callout-alert">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <div>
            <strong style="display: block; color: var(--color-terracotta-light); margin-bottom: 0.25rem;">Recomendación y Condición Física:</strong>
            <p>${tour.important}</p>
          </div>
        </div>
      ` : ''}
    </div>

    <!-- Footer Fijo con Tarifa y Botones de Acción -->
    <div class="exp-modal-footer">
      <div class="exp-modal-pricing" id="modal-pricing-box">
        <span class="exp-modal-pricing-sub">Tarifa oficial</span>
        <div class="exp-modal-pricing-main">
          ${formatPrice(price, currency)}
          <span class="exp-modal-pricing-currency">${currency}</span>
        </div>
        <span class="exp-modal-pricing-note">${tour.pricingNote || 'Por persona (salida Cusco)'}</span>
      </div>

      <div class="exp-modal-actions">
        <button class="btn-modal-cotizar" id="btn-modal-open-drawer" title="Personalizar cotización y fecha">
          <i class="fa-solid fa-calculator"></i> Cotizar Fecha
        </button>
        <a href="${getWhatsAppBookingUrl(tour, currency, price)}" target="_blank" rel="noopener noreferrer" class="btn-modal-reserve" id="btn-modal-whatsapp">
          <i class="fa-brands fa-whatsapp"></i> Reservar Experiencia
        </a>
      </div>
    </div>
  `;

  // Eventos dentro del modal
  document.getElementById("btn-close-exp-modal")?.addEventListener("click", closeExperienceModal);

  document.getElementById("btn-modal-open-drawer")?.addEventListener("click", () => {
    closeExperienceModal();
    openBookingDrawer(tour.id);
  });

  // Abrir modal
  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

export function closeExperienceModal() {
  const backdrop = document.getElementById("experience-modal-backdrop");
  if (!backdrop) return;
  backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
  activeTourId = null;
}

function updateModalPricing(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;
  const currency = getCurrentCurrency();
  const price = currency === "USD" ? tour.priceUSD : tour.pricePEN;
  const pricingBox = document.getElementById("modal-pricing-box");
  if (pricingBox) {
    pricingBox.innerHTML = `
      <span class="exp-modal-pricing-sub">Tarifa oficial</span>
      <div class="exp-modal-pricing-main">
        ${formatPrice(price, currency)}
        <span class="exp-modal-pricing-currency">${currency}</span>
      </div>
      <span class="exp-modal-pricing-note">${tour.pricingNote || 'Por persona (salida Cusco)'}</span>
    `;
  }

  const whatsappBtn = document.getElementById("btn-modal-whatsapp");
  if (whatsappBtn) {
    whatsappBtn.href = getWhatsAppBookingUrl(tour, currency, price);
  }
}

function getWhatsAppBookingUrl(tour, currency, price) {
  const phone = "51983878473";
  const message = `Hola Hanpinahuasi Travel, deseo consultar disponibilidad y reservar la siguiente experiencia:
- Experiencia: ${tour.title}
- Salida desde: ${tour.departureLocation || 'Cusco'}
- Tarifa referencial: ${currency} ${price} por persona
- Duración: ${tour.duration}

Por favor, me podrían brindar los detalles de disponibilidad y proceso de reserva? Muchas gracias.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
