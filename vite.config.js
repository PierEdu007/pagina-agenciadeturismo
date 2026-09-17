import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // Garantizar que los mapas de origen (sourcemaps) NO se generen ni se expongan en producción
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        ong: resolve(import.meta.dirname, "ong.html"),
        notFound: resolve(import.meta.dirname, "404.html"),
      },
      output: {
        // Desacoplar librerías de terceros y datos en chunks pequeños y eficientes en caché
        manualChunks(id) {
          if (id.includes("node_modules/swiper")) {
            return "vendor-swiper";
          }
          if (id.includes("node_modules/flatpickr")) {
            return "vendor-flatpickr";
          }
          if (id.includes("node_modules/lenis")) {
            return "vendor-lenis";
          }
          if (id.includes("src/data/tours.js")) {
            return "tours-data";
          }
        },
      },
    },
  },
});
