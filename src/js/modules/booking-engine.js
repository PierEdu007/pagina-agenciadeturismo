/**
 * Motor de Pre-Reserva y Cotización Dinámica
 * Preparado para Pasarela Culqi Checkout y Supabase DB
 */

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { TOURS_DATA } from "../../data/tours.js";
import { getCurrentCurrency, formatPrice } from "./currency.js";

let bookingState = {
  tourId: null,
  tour: null,
  date: null,
  adults: 2,
  children: 0,
  extras: new Set(),
  currency: "USD"
};

let datepickerInstance = null;

export function initBookingEngine() {
  const backdrop = document.getElementById("booking-modal-backdrop");
  if (!backdrop) return;

  const closeBtn = backdrop.querySelector(".drawer-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeBookingDrawer);
  }

  // Cerrar al hacer clic fuera del drawer
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeBookingDrawer();
    }
  });

  // Cerrar con Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
      closeBookingDrawer();
    }
  });

  // Inicializar Flatpickr
  const dateInput = document.getElementById("booking-date");
  if (dateInput) {
    datepickerInstance = flatpickr(dateInput, {
      minDate: "today",
      dateFormat: "Y-m-d",
      altInput: true,
      altFormat: "F j, Y",
      defaultDate: new Date().fp_incr(3), // Sugerir 3 días después
      onChange: (selectedDates, dateStr) => {
        bookingState.date = dateStr;
        recalculateTotals();
      }
    });
  }

  // Controladores de Pasajeros Adultos
  setupCounter("adults", 1, 12, (val) => {
    bookingState.adults = val;
    recalculateTotals();
  });

  // Controladores de Pasajeros Niños
  setupCounter("children", 0, 8, (val) => {
    bookingState.children = val;
    recalculateTotals();
  });

  // Botón de Checkout Culqi (Simulación y payload listo)
  const culqiBtn = document.getElementById("btn-culqi-checkout");
  if (culqiBtn) {
    culqiBtn.addEventListener("click", handleCulqiCheckout);
  }

  // Botón de Cotización por WhatsApp
  const whatsappQuoteBtn = document.getElementById("btn-whatsapp-quote");
  if (whatsappQuoteBtn) {
    whatsappQuoteBtn.addEventListener("click", handleWhatsAppQuote);
  }

  // Escuchar cambios de moneda
  window.addEventListener("currency-change", (e) => {
    bookingState.currency = e.detail.currency;
    recalculateTotals();
  });
}

function setupCounter(type, min, max, onChange) {
  const container = document.querySelector(`[data-counter-type="${type}"]`);
  if (!container) return;

  const minusBtn = container.querySelector(".btn-counter-minus");
  const plusBtn = container.querySelector(".btn-counter-plus");
  const display = container.querySelector(".counter-value");

  let count = type === "adults" ? bookingState.adults : bookingState.children;

  minusBtn.addEventListener("click", () => {
    if (count > min) {
      count--;
      display.textContent = count;
      onChange(count);
    }
  });

  plusBtn.addEventListener("click", () => {
    if (count < max) {
      count++;
      display.textContent = count;
      onChange(count);
    }
  });
}

export function openBookingDrawer(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId) || TOURS_DATA[0];
  bookingState.tourId = tour.id;
  bookingState.tour = tour;
  bookingState.currency = getCurrentCurrency();
  bookingState.extras.clear();

  const backdrop = document.getElementById("booking-modal-backdrop");
  if (!backdrop) return;

  // Actualizar banner de información del tour
  const thumbnail = backdrop.querySelector(".selected-tour-thumbnail");
  const title = backdrop.querySelector(".selected-tour-title");
  const meta = backdrop.querySelector(".selected-tour-meta");

  if (thumbnail) thumbnail.src = tour.image;
  if (title) title.textContent = tour.title;
  if (meta) meta.innerHTML = `<i class="fa-solid fa-clock"></i> ${tour.duration} | <i class="fa-solid fa-mountain"></i> ${tour.difficulty}`;

  // Renderizar extras del tour
  renderTourExtras(tour);

  // Recalcular y abrir
  recalculateTotals();
  backdrop.style.display = "flex";
  void backdrop.offsetWidth; // Forzar reflow para que la animación CSS corra suavemente
  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

export function closeBookingDrawer() {
  const backdrop = document.getElementById("booking-modal-backdrop");
  if (!backdrop) return;

  backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => {
    if (!backdrop.classList.contains("is-open")) {
      backdrop.style.display = "none";
    }
  }, 350);
}

function renderTourExtras(tour) {
  const extrasContainer = document.getElementById("booking-extras-container");
  if (!extrasContainer) return;

  extrasContainer.innerHTML = "";

  if (!tour.extras || tour.extras.length === 0) {
    extrasContainer.innerHTML = `<span style="font-size: 0.8rem; color: var(--color-text-muted);">Sin adicionales requeridos para esta ruta.</span>`;
    return;
  }

  tour.extras.forEach(extra => {
    const extraPrice = bookingState.currency === "USD" ? extra.priceUSD : extra.pricePEN;
    const label = document.createElement("label");
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.justifyContent = "space-between";
    label.style.padding = "0.75rem";
    label.style.background = "#FFFFFF";
    label.style.border = "1px solid var(--border-light)";
    label.style.borderRadius = "var(--radius-sm)";
    label.style.fontSize = "0.85rem";
    label.style.cursor = "pointer";

    label.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <input type="checkbox" value="${extra.id}" class="extra-checkbox" style="accent-color: var(--color-terracotta);" />
        <span>${extra.name}</span>
      </div>
      <strong style="color: var(--color-terracotta);">+${formatPrice(extraPrice, bookingState.currency)}</strong>
    `;

    const checkbox = label.querySelector(".extra-checkbox");
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        bookingState.extras.add(extra.id);
      } else {
        bookingState.extras.delete(extra.id);
      }
      recalculateTotals();
    });

    extrasContainer.appendChild(label);
  });
}

function recalculateTotals() {
  if (!bookingState.tour) return;

  const tour = bookingState.tour;
  const currency = bookingState.currency;
  const baseRate = currency === "USD" ? tour.priceUSD : tour.pricePEN;

  // Descuento del 30% en niños
  const adultSubtotal = bookingState.adults * baseRate;
  const childSubtotal = bookingState.children * (baseRate * 0.7);

  // Extras
  let extrasSubtotal = 0;
  const totalPax = bookingState.adults + bookingState.children;
  bookingState.extras.forEach(extraId => {
    const extraObj = tour.extras.find(e => e.id === extraId);
    if (extraObj) {
      const extraRate = currency === "USD" ? extraObj.priceUSD : extraObj.pricePEN;
      extrasSubtotal += extraRate * totalPax;
    }
  });

  const grandTotal = Math.round(adultSubtotal + childSubtotal + extrasSubtotal);

  // Actualizar UI del desglose
  const adultRow = document.getElementById("summary-adults-row");
  const childRow = document.getElementById("summary-children-row");
  const extrasRow = document.getElementById("summary-extras-row");
  const totalDisplay = document.getElementById("summary-grand-total");

  if (adultRow) {
    adultRow.innerHTML = `<span>${bookingState.adults}x Adulto(s)</span> <span>${formatPrice(Math.round(adultSubtotal), currency)}</span>`;
  }

  if (childRow) {
    if (bookingState.children > 0) {
      childRow.style.display = "flex";
      childRow.innerHTML = `<span>${bookingState.children}x Menor(es) (-30%)</span> <span>${formatPrice(Math.round(childSubtotal), currency)}</span>`;
    } else {
      childRow.style.display = "none";
    }
  }

  if (extrasRow) {
    if (extrasSubtotal > 0) {
      extrasRow.style.display = "flex";
      extrasRow.innerHTML = `<span>Servicios Adicionales</span> <span>+${formatPrice(Math.round(extrasSubtotal), currency)}</span>`;
    } else {
      extrasRow.style.display = "none";
    }
  }

  if (totalDisplay) {
    totalDisplay.innerHTML = `${formatPrice(grandTotal, currency)} <small style="font-size: 0.8rem; font-family: var(--font-body);">${currency}</small>`;
  }

  bookingState.calculatedTotal = grandTotal;
}

function handleCulqiCheckout() {
  if (!bookingState.tour) return;

  const totalInCents = bookingState.calculatedTotal * 100;
  const currencyCode = bookingState.currency;

  const checkoutPayload = {
    title: bookingState.tour.title,
    currency: currencyCode,
    description: `Reserva ${bookingState.tour.title} (${bookingState.adults} adultos)`,
    amount: totalInCents,
    date: bookingState.date,
    pax: bookingState.adults + bookingState.children
  };

  // Preparación para Culqi.js SDK
  if (window.Culqi) {
    window.Culqi.settings({
      title: checkoutPayload.title,
      currency: checkoutPayload.currency,
      amount: checkoutPayload.amount
    });
    window.Culqi.open();
  } else {
    // Si la pasarela aún no tiene la clave pública configurada, confirmamos y derivamos a WhatsApp con el desglose exacto
    alert(`Preparando pasarela Culqi para ${checkoutPayload.title} por ${formatPrice(bookingState.calculatedTotal, bookingState.currency)}. Transfiriendo resumen a confirmación asistida.`);
    handleWhatsAppQuote();
  }
}

function handleWhatsAppQuote() {
  if (!bookingState.tour) return;

  const nameInput = document.getElementById("booking-name");
  const clientName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Viajero";

  const message = [
    `Hola Hanpinahuasi Travel, solicito confirmación de reserva formal:`,
    `*Tour:* ${bookingState.tour.title}`,
    `*Fecha Prevista:* ${bookingState.date || "Por definir"}`,
    `*Pasajeros:* ${bookingState.adults} Adulto(s)${bookingState.children > 0 ? `, ${bookingState.children} Niño(s)` : ""}`,
    `*Total Cotizado:* ${formatPrice(bookingState.calculatedTotal, bookingState.currency)} ${bookingState.currency}`,
    `*Nombre Titular:* ${clientName}`,
    `Quedo atento a la disponibilidad y link de pago Culqi.`
  ].join("\n");

  const whatsappUrl = `https://wa.me/51984000000?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}
