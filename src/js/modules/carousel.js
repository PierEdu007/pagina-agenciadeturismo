/**
 * Inicialización de Swiper Carousel
 */

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function initCarousel() {
  const swiperElement = document.querySelector(".swiper-container-tours");
  if (!swiperElement) return;

  const swiper = new Swiper(swiperElement, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1.12,
    spaceBetween: 16,
    centeredSlides: false,
    grabCursor: true,
    speed: 600,
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
        spaceBetween: 32,
      },
    },
  });

  return swiper;
}
