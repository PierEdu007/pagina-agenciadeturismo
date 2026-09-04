/**
 * Modelo de Datos Desacoplado de Experiencias y Tours
 * Preparado para sincronizar con Supabase DB y motor de pagos Culqi
 */

export const TOURS_DATA = [
  {
    id: "machu-picchu-clasico",
    title: "Machu Picchu Clásico",
    tag: "Imperdible",
    isFeatured: true,
    duration: "Full Day",
    difficulty: "Nivel Fácil",
    altitude: "2,430 msnm",
    maxGroup: 8,
    priceUSD: 285,
    pricePEN: 1080,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    summary: "Visita la maravilla inca con tren panorámico Expedition/Voyager, boleto circuito oficial garantizado y guiado privado de alto nivel.",
    inclusions: [
      "Tren ida y retorno desde Ollantaytambo",
      "Bus Consettur oficial subida y bajada",
      "Boleto oficial a ciudadela inca garantizado",
      "Guía oficial bilingüe certificado"
    ],
    extras: [
      { id: "vistadome", name: "Upgrade Tren Panorámico Vistadome", priceUSD: 45, pricePEN: 170 },
      { id: "huayna_picchu", name: "Acceso Montaña Huayna Picchu", priceUSD: 65, pricePEN: 245 }
    ]
  },
  {
    id: "valle-sagrado-vip",
    title: "Valle Sagrado & Salineras VIP",
    tag: "Cultural",
    isFeatured: false,
    duration: "1 Día Completo",
    difficulty: "Nivel Moderado",
    altitude: "2,870 msnm",
    maxGroup: 8,
    priceUSD: 45,
    pricePEN: 165,
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
    summary: "Pisac, Ollantaytambo, Chinchero y las terrazas de sal de Maras en transporte privado con almuerzo buffet campestre gourmet en Urubamba.",
    inclusions: [
      "Recojo directo en hotel del centro histórico",
      "Almuerzo buffet andino gourmet en Urubamba",
      "Transporte turístico privado con aire acondicionado",
      "Guía oficial de turismo bilingüe"
    ],
    extras: [
      { id: "maridaje", name: "Degustación de cervezas artesanales del Valle", priceUSD: 20, pricePEN: 75 }
    ]
  },
  {
    id: "laguna-humantay-early",
    title: "Laguna Humantay Anti-Estrés",
    tag: "Aventura",
    isFeatured: false,
    duration: "4:00 AM - 5:30 PM",
    difficulty: "Nivel Exigente",
    altitude: "4,200 msnm",
    maxGroup: 8,
    priceUSD: 35,
    pricePEN: 130,
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=800&q=80",
    summary: "Salida temprana para llegar antes que las multitudes. Caminata asistida con bastones de trekking, botiquín médico y soporte constante.",
    inclusions: [
      "Desayuno andino y almuerzo buffet en Mollepata",
      "Bastones de trekking ergonómicos incluidos",
      "Tanque de oxígeno medicinal portátil en ruta",
      "Guía especialista en rutas de altura"
    ],
    extras: [
      { id: "caballo", name: "Caballo de auxilio para ascenso", priceUSD: 25, pricePEN: 95 }
    ]
  },
  {
    id: "montana-7-colores-vip",
    title: "Montaña de 7 Colores & Valle Rojo",
    tag: "Paisajístico",
    isFeatured: false,
    duration: "3:30 AM - 4:30 PM",
    difficulty: "Nivel Exigente",
    altitude: "5,036 msnm",
    maxGroup: 8,
    priceUSD: 38,
    pricePEN: 140,
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=800&q=80",
    summary: "Admira la majestuosidad de Vinicunca y el espectacular mirador del Valle Rojo con un ritmo de caminata seguro y sin aglomeraciones.",
    inclusions: [
      "Desayuno buffet energético y almuerzo caliente",
      "Entradas a Vinicunca y Valle Rojo incluidas",
      "Pulsioxímetro y asistencia médica permanente",
      "Guía profesional bilingüe con radio satelital"
    ],
    extras: [
      { id: "moto", name: "Acceso moto de apoyo en ruta local", priceUSD: 30, pricePEN: 110 }
    ]
  },
  {
    id: "city-tour-sacsayhuaman",
    title: "Cusco Milenario & Sacsayhuamán",
    tag: "Historia Viva",
    isFeatured: false,
    duration: "Medio Día",
    difficulty: "Nivel Fácil",
    altitude: "3,600 msnm",
    maxGroup: 8,
    priceUSD: 30,
    pricePEN: 110,
    image: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=800&q=80",
    summary: "Descubre Qorikancha, la imponente fortaleza megalítica de Sacsayhuamán, Q'enqo y Tambomachay en un recorrido exclusivo sin prisas.",
    inclusions: [
      "Transporte privado exclusivo",
      "Ingreso al templo del sol Qorikancha",
      "Guía arqueológico especializado",
      "Agua mineral embotellada y snacks locales"
    ],
    extras: []
  },
  {
    id: "waqrapukara-trekking",
    title: "Fortaleza Sagrada de Waqrapukara",
    tag: "Exclusivo",
    isFeatured: false,
    duration: "4:00 AM - 6:00 PM",
    difficulty: "Nivel Moderado",
    altitude: "4,140 msnm",
    maxGroup: 6,
    priceUSD: 55,
    pricePEN: 200,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    summary: "Santuario ceremonial y fortaleza inca en forma de cuernos sobre el cañón del río Apurímac. Ruta virgen con paisajes fuera de serie.",
    inclusions: [
      "Transporte 4x4 privado ida y vuelta",
      "Desayuno y almuerzo campestre con vista al cañón",
      "Bastones de trekking y botiquín de primeros auxilios",
      "Guía local experto en mitología andina"
    ],
    extras: []
  }
];
