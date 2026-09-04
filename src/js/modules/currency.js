/**
 * Gestor de Moneda Interactivo (USD $ / PEN S/)
 */

let currentCurrency = localStorage.getItem("ayni_currency") || "USD";

export function initCurrency() {
  const toggleContainer = document.querySelector(".currency-toggle");
  if (!toggleContainer) return;

  const buttons = toggleContainer.querySelectorAll(".currency-btn");
  
  // Sincronizar estado inicial
  updateActiveButtons(buttons, currentCurrency);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.currency;
      if (selected && selected !== currentCurrency) {
        currentCurrency = selected;
        localStorage.setItem("ayni_currency", currentCurrency);
        updateActiveButtons(buttons, currentCurrency);
        
        // Notificar a toda la aplicación
        window.dispatchEvent(new CustomEvent("currency-change", {
          detail: { currency: currentCurrency }
        }));
      }
    });
  });
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

export function getCurrentCurrency() {
  return currentCurrency;
}

export function formatPrice(amount, currency = currentCurrency) {
  if (currency === "USD") {
    return `$${amount}`;
  }
  return `S/ ${amount}`;
}
