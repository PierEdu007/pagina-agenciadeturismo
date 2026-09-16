/**
 * Inicialización y Gestión del Swiper Carousel
 * Hampinahuasi Travel S.A.C.
 */

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

let swiperInstance = null;

export function initCarousel() {
  const swiperElement = document.querySelector(".swiper-container-tours");
  if (!swiperElement) return null;

  if (swiperInstance) {
    try {
      swiperInstance.destroy(true, true);
    } catch (e) {
      console.warn("Error reiniciando Swiper:", e);
    }
  }

  const slides = swiperElement.querySelectorAll(".swiper-slide");
  const shouldLoop = slides.length >= 4;

  swiperInstance = new Swiper(swiperElement, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: false,
    grabCursor: true,
    speed: 650,
    loop: shouldLoop,
    autoplay: {
      delay: 4200,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination-tours",
      clickable: true,
    },
    navigation: {
      nextEl: ".carousel-nav-btn.btn-next",
      prevEl: ".carousel-nav-btn.btn-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.15,
        spaceBetween: 24,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  return swiperInstance;
}

export function getSwiperInstance() {
  return swiperInstance;
}
