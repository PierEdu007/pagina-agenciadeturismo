# Hanpinahuasi Travel - Plataforma Web Oficial

Plataforma web oficial y landing page interactiva de **Hanpinahuasi Travel**, agencia y operador turístico formal con sede en la ciudad del Cusco, Perú. Especializada en turismo vivencial, medicina ancestral andina y expediciones exclusivas en grupos reducidos de máximo 8 personas hacia Machu Picchu y las rutas sagradas de los Andes.

---

## Significado Cultural & Identidad
* **Hanpi:** En quechua significa *medicina, curación, sanación sagrada*.
* **Huasi / Wasi:** En quechua significa *casa, hogar, templo acogedor*.
* **Concepto:** *La Casa de la Sanación y Experiencias Ancestrales*.

---

## Tecnologías Utilizadas
* **Vite** (Entorno de empaquetado y construcción ultra-rápido)
* **Vanilla JavaScript (ES Modules)** (Arquitectura modular desacoplada)
* **CSS Moderno & Design Tokens** (Variables CSS, Glassmorphism, Flexbox, CSS Grid)
* **Swiper.js** (Carrusel táctil responsivo optimizado para móviles)
* **Lenis** (Scroll suave y cinemático)
* **Flatpickr** (Selector interactivo de fechas para reservas)
* **FontAwesome 6** (Iconografía vectorial optimizada)

---

## Estructura del Proyecto

```
pagina-agenciadeturismo/
├── index.html                  # Punto de entrada HTML5 semántico
├── package.json                # Configuración de dependencias y scripts
├── public/                     # Archivos estáticos directos
│   └── images/                 # Logo oficial y fotos de la agencia
├── src/
│   ├── css/
│   │   ├── variables.css       # Tokens de color, tipografía y sombras
│   │   ├── base.css            # Estilos base y reset
│   │   ├── animations.css      # Animaciones (shimmer, pulso radar, marquesina)
│   │   └── components/         # Estilos por componente
│   ├── data/
│   │   └── tours.js            # Modelo de datos de tours desacoplado
│   └── js/
│       ├── main.js             # Entrada JavaScript
│       └── modules/            # Módulos (divisas, carrusel, reservas, scroll)
```

---

## Instalación y Desarrollo Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/PierEdu007/pagina-agenciadeturismo.git
   cd pagina-agenciadeturismo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abrir en el navegador: `http://localhost:5173/`

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos listos para producción se generan en la carpeta `dist/`.

---

## Redes Sociales Oficiales
* **Instagram:** [https://www.instagram.com/hanpinahuasicusco/](https://www.instagram.com/hanpinahuasicusco/)
* **Facebook:** [https://www.facebook.com/hanpinahuasicusco?locale=es_LA](https://www.facebook.com/hanpinahuasicusco?locale=es_LA)

---

## Licencia y Propiedad
Todos los derechos reservados © 2026 Hanpinahuasi Travel E.I.R.L. - Cusco, Perú.
Registro DIRCETUR Nº: 4821-2024.
