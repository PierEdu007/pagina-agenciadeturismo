/**
 * Gestor de Moneda y Tipo de Cambio en Tiempo Real (USD $ / PEN S/)
 * Hanpinawasi Travel S.A.C. - Cusco, Perú
 * 
 * - API oficial y gratuita de tipo de cambio en tiempo real actualizada diariamente
 * - Conversión precisa de Soles (PEN) a Dólares (USD) redondeada estrictamente al entero
 * - Múltiples proveedores de respaldo (Open Exchange Rates, Fawaz Ahmed Global CDN)
 * - Caché local inteligente de 12 horas para máxima velocidad (0ms) y operatividad offline
 */

import { TOURS_DATA } from "../../data/tours.js";

const STORAGE_KEY_CURRENCY = "hanpinawasi_currency";
const STORAGE_KEY_RATE_DATA = "hanpinawasi_exchange_rate";
const LEGACY_KEY_CURRENCY = "ayni_currency";

// Tipo de cambio referencial base (USD a PEN) utilizado si aún no hay red ni caché
const FALLBACK_USD_TO_PEN_RATE = 3.44;

let currentCurrency = localStorage.getItem(STORAGE_KEY_CURRENCY) || 
                      localStorage.getItem(LEGACY_KEY_CURRENCY) || 
                      "USD";

let currentExchangeRate = FALLBACK_USD_TO_PEN_RATE;
let rateLastUpdated = "";

// Cargar de inmediato la última tasa guardada en caché para evitar cualquier parpadeo
try {
  const cached = localStorage.getItem(STORAGE_KEY_RATE_DATA);
  if (cached) {
    const parsed = JSON.parse(cached);
    if (parsed && typeof parsed.rate === "number" && parsed.rate > 2 && parsed.rate < 6) {
      currentExchangeRate = parsed.rate;
      rateLastUpdated = parsed.date || "";
    }
  }
} catch (e) {
  // Ignorar errores de acceso a almacenamiento local
}

// Sincronizar catálogo inicial de tours con la tasa activa
updateTourPrices(currentExchangeRate);

/**
 * Actualiza los precios en dólares (priceUSD y pricePrivateUSD) en TOURS_DATA
 * convirtiendo los precios base en Soles (pricePEN) y redondeando al entero más cercano.
 */
export function updateTourPrices(rate = currentExchangeRate) {
  if (!rate || rate <= 0) return;
  TOURS_DATA.forEach(tour => {
    if (typeof tour.pricePEN === "number") {
      tour.priceUSD = Math.round(tour.pricePEN / rate);
    }
    if (typeof tour.pricePrivatePEN === "number") {
      tour.pricePrivateUSD = Math.round(tour.pricePrivatePEN / rate);
    }
  });
}

/**
 * Obtiene el tipo de cambio numérico actual (1 USD = X PEN)
 */
export function getExchangeRate() {
  return currentExchangeRate;
}

/**
 * Obtiene la fecha o estado del tipo de cambio registrado
 */
export function getExchangeRateDate() {
  return rateLastUpdated;
}

/**
 * Obtiene la moneda actualmente seleccionada ("USD" o "PEN")
 */
export function getCurrentCurrency() {
  return currentCurrency;
}

/**
 * Convierte un monto en Soles (PEN) a Dólares (USD) redondeando al entero
 */
export function convertPenToUsd(penAmount) {
  if (typeof penAmount !== "number") return 0;
  return Math.round(penAmount / currentExchangeRate);
}

/**
 * Obtiene el precio referencial de un tour según la moneda activa
 * Siempre redondeado al entero más cercano
 */
export function getTourPrice(tour, currency = currentCurrency) {
  if (!tour) return 0;
  if (currency === "USD") {
    return typeof tour.priceUSD === "number"
      ? tour.priceUSD
      : Math.round(tour.pricePEN / currentExchangeRate);
  }
  return Math.round(tour.pricePEN);
}

/**
 * Obtiene el precio en servicio privado de un tour si existe, redondeado al entero
 */
export function getTourPrivatePrice(tour, currency = currentCurrency) {
  if (!tour || tour.pricePrivatePEN == null) return null;
  if (currency === "USD") {
    return typeof tour.pricePrivateUSD === "number"
      ? tour.pricePrivateUSD
      : Math.round(tour.pricePrivatePEN / currentExchangeRate);
  }
  return Math.round(tour.pricePrivatePEN);
}

/**
 * Formatea un valor monetario redondeado al entero con su símbolo correspondiente
 * USD: $44
 * PEN: S/ 150
 */
export function formatPrice(amount, currency = currentCurrency) {
  const rounded = Math.round(Number(amount) || 0);
  if (currency === "USD") {
    return `$${rounded}`;
  }
  return `S/ ${rounded}`;
}

/**
 * Obtiene la descripción de tarifa adaptada dinámicamente a la moneda activa
 */
export function getPricingNote(tour, currency = currentCurrency) {
  if (!tour) return "";
  const price = getTourPrice(tour, currency);
  const formattedPrice = formatPrice(price, currency);

  if (tour.pricePrivatePEN) {
    const privPrice = getTourPrivatePrice(tour, currency);
    const formattedPriv = formatPrice(privPrice, currency);
    return `Grupal ${formattedPrice} / pers. · Privado ${formattedPriv} / pers.`;
  }

  const baseNote = tour.pricingNote ? ` · ${tour.pricingNote}` : "";
  return `${formattedPrice} por persona${baseNote}`;
}

/**
 * Consulta la API pública de tipo de cambio en tiempo real con endpoints de alta disponibilidad
 */
async function fetchDailyExchangeRate() {
  const sources = [
    // 1. Open Exchange Rate API (actualizado diariamente a 00:00 UTC, sin key requerida, CORS abierto)
    async () => {
      const res = await fetch("https://open.er-api.com/v6/latest/USD", {
        signal: AbortSignal.timeout(4500)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && data.rates && typeof data.rates.PEN === "number") {
        return {
          rate: data.rates.PEN,
          date: data.time_last_update_utc ? new Date(data.time_last_update_utc).toLocaleDateString("es-PE") : "Hoy"
        };
      }
      throw new Error("Respuesta no válida de open.er-api.com");
    },
    // 2. ExchangeRate-API endpoint alternativo
    async () => {
      const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD", {
        signal: AbortSignal.timeout(4500)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && data.rates && typeof data.rates.PEN === "number") {
        return {
          rate: data.rates.PEN,
          date: data.date || "Hoy"
        };
      }
      throw new Error("Respuesta no válida de api.exchangerate-api.com");
    },
    // 3. Fawaz Ahmed Currency API (Cloudflare Pages edge CDN global)
    async () => {
      const res = await fetch("https://latest.currency-api.pages.dev/v1/currencies/usd.json", {
        signal: AbortSignal.timeout(4500)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && data.usd && typeof data.usd.pen === "number") {
        return {
          rate: data.usd.pen,
          date: data.date || "Hoy"
        };
      }
      throw new Error("Respuesta no válida de currency-api");
    }
  ];

  for (const source of sources) {
    try {
      const result = await source();
      if (result && typeof result.rate === "number" && result.rate > 2 && result.rate < 6) {
        return result;
      }
    } catch (e) {
      // Intentar con el siguiente proveedor
    }
  }

  return null;
}

/**
 * Sincroniza el tipo de cambio diario si la caché ha expirado (más de 12 horas)
 */
async function syncDailyExchangeRate() {
  try {
    const cached = localStorage.getItem(STORAGE_KEY_RATE_DATA);
    if (cached) {
      const parsed = JSON.parse(cached);
      const isFresh = parsed.timestamp && (Date.now() - parsed.timestamp < 12 * 60 * 60 * 1000);
      if (isFresh && typeof parsed.rate === "number") {
        currentExchangeRate = parsed.rate;
        rateLastUpdated = parsed.date || "";
        updateTourPrices(currentExchangeRate);
        updateToggleTooltips();
        return;
      }
    }
  } catch (e) {
    // Si la lectura falla, continuar con petición de red
  }

  const fetched = await fetchDailyExchangeRate();
  if (fetched && fetched.rate) {
    const rateDiff = Math.abs(fetched.rate - currentExchangeRate);
    currentExchangeRate = fetched.rate;
    rateLastUpdated = fetched.date;

    try {
      localStorage.setItem(STORAGE_KEY_RATE_DATA, JSON.stringify({
        rate: fetched.rate,
        date: fetched.date,
        timestamp: Date.now()
      }));
    } catch (e) {
      // Almacenamiento no disponible
    }

    // Actualizar precios dinámicos de los tours
    updateTourPrices(currentExchangeRate);
    updateToggleTooltips();

    // Notificar a toda la interfaz si hubo actualización relevante de la tasa
    if (rateDiff > 0.005) {
      window.dispatchEvent(new CustomEvent("currency-change", {
        detail: { currency: currentCurrency, rate: currentExchangeRate }
      }));
    }
  }
}

/**
 * Actualiza el atributo title de los selectores de moneda con el tipo de cambio oficial
 */
function updateToggleTooltips() {
  const toggles = document.querySelectorAll(".currency-toggle");
  const formattedRate = currentExchangeRate.toFixed(2);
  toggles.forEach(toggle => {
    toggle.setAttribute(
      "title",
      `Moneda: ${currentCurrency} · Tipo de cambio oficial: $1 USD = S/ ${formattedRate} (Actualizado al día)`
    );
  });
}

/**
 * Inicializador principal del módulo de moneda
 */
export function initCurrency() {
  const toggles = document.querySelectorAll(".currency-toggle");
  
  toggles.forEach(toggleContainer => {
    const buttons = toggleContainer.querySelectorAll(".currency-btn");
    updateActiveButtons(buttons, currentCurrency);

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selected = btn.dataset.currency;
        if (selected && selected !== currentCurrency) {
          currentCurrency = selected;
          localStorage.setItem(STORAGE_KEY_CURRENCY, currentCurrency);
          localStorage.setItem(LEGACY_KEY_CURRENCY, currentCurrency);
          
          toggles.forEach(t => {
            updateActiveButtons(t.querySelectorAll(".currency-btn"), currentCurrency);
          });
          updateToggleTooltips();

          // Notificar a toda la aplicación para recalcular y re-renderizar
          window.dispatchEvent(new CustomEvent("currency-change", {
            detail: { currency: currentCurrency, rate: currentExchangeRate }
          }));
        }
      });
    });
  });

  updateToggleTooltips();

  // Sincronizar en segundo plano el tipo de cambio en tiempo real
  syncDailyExchangeRate();
}

function updateActiveButtons(buttons, currency) {
  buttons.forEach(btn => {
    if (btn.dataset.currency === currency) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}
