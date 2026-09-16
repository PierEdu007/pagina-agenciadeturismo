/**
 * Modelo de Datos Desacoplado de Experiencias y Tours
 * Hampinahuasi Travel S.A.C.
 * Organizado en 3 secciones oficiales: Cultura y Patrimonio, Naturaleza y Aventura, Experiencias Místicas y de Bienestar
 */

export const TOUR_CATEGORIES = [
  { id: "all", label: "Todas las Experiencias", icon: "fa-compass" },
  { id: "cultura", label: "Cultura y Patrimonio", icon: "fa-landmark" },
  { id: "naturaleza", label: "Naturaleza y Aventura", icon: "fa-mountain-sun" },
  { id: "mistica", label: "Místicas y de Bienestar", icon: "fa-leaf" }
];

export const TOURS_DATA = [
  // =========================================================================
  // 1. CULTURA Y PATRIMONIO
  // =========================================================================
  {
    id: "machu-picchu-clasico",
    title: "Machu Picchu Full Day - Privado",
    category: "cultura",
    categoryLabel: "Cultura y patrimonio",
    tag: "Servicio Privado",
    isFeatured: true,
    duration: "Full Day",
    difficulty: "Nivel Fácil",
    altitude: "2,430 msnm",
    maxGroup: 8,
    priceUSD: 295,
    pricePEN: 1120,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    summary: "Experiencia privada exclusiva a la ciudadela inca con tren panorámico, boleto oficial garantizado ante el Ministerio de Cultura y guía arqueológico de élite.",
    inclusions: [
      "Tren ida y vuelta desde Ollantaytambo",
      "Bus Consettur oficial subida y bajada",
      "Boleto oficial a ciudadela inca garantizado",
      "Guía oficial privado bilingüe certificado"
    ],
    extras: [
      { id: "vistadome", name: "Upgrade Tren Panorámico Vistadome", priceUSD: 45, pricePEN: 170 },
      { id: "huayna_picchu", name: "Acceso Montaña Huayna Picchu", priceUSD: 65, pricePEN: 245 }
    ]
  },
  {
    id: "valle-sagrado",
    title: "Valle Sagrado de los Incas",
    category: "cultura",
    categoryLabel: "Cultura y patrimonio",
    tag: "Patrimonio Vivo",
    isFeatured: false,
    duration: "1 Día Completo",
    difficulty: "Nivel Fácil",
    altitude: "2,870 msnm",
    maxGroup: 8,
    priceUSD: 48,
    pricePEN: 180,
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
    summary: "Recorrido por los templos y andenerías de Pisac, la fortaleza viva de Ollantaytambo y textilería en Chinchero con almuerzo buffet andino gourmet en Urubamba.",
    inclusions: [
      "Recojo y retorno en tu hotel en Cusco",
      "Almuerzo buffet campestre gourmet en Urubamba",
      "Transporte turístico privado con aire acondicionado",
      "Guía oficial bilingüe especialista en cosmovisión andina"
    ],
    extras: [
      { id: "maridaje", name: "Degustación de cervezas artesanales del Valle", priceUSD: 20, pricePEN: 75 }
    ]
  },
  {
    id: "salineras-maras-moray",
    title: "Salineras de Maras & Moray",
    category: "cultura",
    categoryLabel: "Cultura y patrimonio",
    tag: "Ingeniería Inca",
    isFeatured: false,
    duration: "Medio Día (8:00 - 14:30)",
    difficulty: "Nivel Fácil",
    altitude: "3,500 msnm",
    maxGroup: 8,
    priceUSD: 35,
    pricePEN: 130,
    image: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=800&q=80",
    summary: "Visita los milenarios pozos de sal rosada de Maras y el laboratorio agrícola concéntrico de Moray, maravillas de la arquitectura precolombina.",
    inclusions: [
      "Transporte turístico confortable ida y vuelta",
      "Visita guiada a las terrazas agrícolas de Moray",
      "Recorrido por las minas de sal artesanal de Maras",
      "Guía profesional y degustación de sal medicinal andina"
    ],
    extras: [
      { id: "visita_taller", name: "Taller artesanal de chocolates y sal rosada", priceUSD: 15, pricePEN: 55 }
    ]
  },
  {
    id: "city-tour-cusco",
    title: "City Tour Cusco: Templos & Fortalezas",
    category: "cultura",
    categoryLabel: "Cultura y patrimonio",
    tag: "Medio Día",
    isFeatured: true,
    duration: "5 hrs aprox",
    departureTime: "13:00 hrs",
    departureLocation: "Plaza de Armas de Cusco",
    returnTime: "18:00 hrs aprox",
    returnLocation: "Centro histórico de Cusco",
    difficulty: "Nivel Fácil",
    altitude: "3,400 - 3,700 msnm",
    maxGroup: "Grupal o Privado",
    priceUSD: 16,
    pricePEN: 60,
    pricePrivateUSD: 48,
    pricePrivatePEN: 180,
    image: "/images/city-tour-cusco.jpg",
    summary: "Partida a las 13:00 hrs desde la Plaza de Armas. Visita guiada a la Catedral de Cusco, Qoricancha, Sacsayhuamán, Qenqo, Puca Pucara y Tambomachay. Retorno al centro histórico a las 18:00 hrs.",
    places: [
      "Catedral de Cusco",
      "Qoricancha",
      "Sacsayhuamán",
      "Qenqo",
      "Puca Pucara",
      "Tambomachay"
    ],
    inclusions: [
      "Recojo de pasajeros",
      "Transporte turístico equipado",
      "Guía oficial bilingüe (Español e Inglés)"
    ],
    nonInclusions: [
      "Entradas: Catedral S/.40, Qoricancha S/.20, Boleto Turístico S/.70"
    ],
    notes: "Tour en grupo. En el centro arqueológico de Sacsayhuamán pueden comprar sus Boletos Turísticos: General (Extranjeros S/.130 / Nacional S/.70 válido 10 días) o Parcial (Extranjero S/.70 / Nacional S/.40 válido 1-2 días).",
    extras: [
      { id: "tour_privado", name: "Servicio Privado Exclusivo ($48 USD / S/. 180 PEN por persona)", priceUSD: 32, pricePEN: 120 },
      { id: "entrada_catedral", name: "Entrada a la Catedral del Cusco (S/. 40 PEN)", priceUSD: 11, pricePEN: 40 },
      { id: "entrada_qoricancha", name: "Entrada al Templo Qoricancha (S/. 20 PEN)", priceUSD: 6, pricePEN: 20 },
      { id: "boleto_turistico_parcial", name: "Boleto Turístico Parcial Circuito I (S/. 70 PEN)", priceUSD: 19, pricePEN: 70 }
    ]
  },

  // =========================================================================
  // 2. NATURALEZA Y AVENTURA
  // =========================================================================
  {
    id: "laguna-humantay",
    title: "Laguna Humantay",
    category: "naturaleza",
    categoryLabel: "Naturaleza y aventura",
    tag: "Aguas Turquesas",
    isFeatured: false,
    duration: "4:00 AM - 5:30 PM",
    difficulty: "Nivel Exigente",
    altitude: "4,200 msnm",
    maxGroup: 8,
    priceUSD: 38,
    pricePEN: 140,
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=800&q=80",
    summary: "Expedición a la laguna turquesa custodiada por el Apu Salkantay. Salida temprana para evitar multitudes, con bastones, desayuno andino y asistencia médica.",
    inclusions: [
      "Desayuno andino y almuerzo buffet en Mollepata",
      "Bastones ergonómicos de trekking incluidos",
      "Oxígeno medicinal portátil y monitoreo con pulsioxímetro",
      "Guía especialista en rutas de alta montaña"
    ],
    extras: [
      { id: "caballo", name: "Caballo de auxilio para ascenso", priceUSD: 25, pricePEN: 95 }
    ]
  },
  {
    id: "montana-7-colores",
    title: "Montaña de 7 Colores",
    category: "naturaleza",
    categoryLabel: "Naturaleza y aventura",
    tag: "Cordillera Vilcanota",
    isFeatured: false,
    duration: "3:30 AM - 4:30 PM",
    difficulty: "Nivel Exigente",
    altitude: "5,036 msnm",
    maxGroup: 8,
    priceUSD: 40,
    pricePEN: 150,
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=800&q=80",
    summary: "Admira la estratigrafía mineral de Vinicunca y el espectacular mirador del Valle Rojo con un ritmo de caminata seguro, oxígeno y grupos reducidos.",
    inclusions: [
      "Desayuno buffet energético y almuerzo caliente",
      "Entradas oficiales a Vinicunca y Valle Rojo",
      "Pulsioxímetro, botiquín y oxígeno medicinal permanente",
      "Guía profesional bilingüe con radio satelital"
    ],
    extras: [
      { id: "moto", name: "Moto de apoyo en tramo local", priceUSD: 30, pricePEN: 110 }
    ]
  },
  {
    id: "cuatrimotos",
    title: "Cuatrimotos en los Andes",
    category: "naturaleza",
    categoryLabel: "Naturaleza y aventura",
    tag: "Adrenalina",
    isFeatured: false,
    duration: "Medio Día (7:00 - 13:00 / 13:00 - 18:30)",
    difficulty: "Nivel Moderado",
    altitude: "3,750 msnm",
    maxGroup: 8,
    priceUSD: 45,
    pricePEN: 170,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    summary: "Conduce cuatrimotos ATV por senderos de tierra andinos entre Maras, Moray y la mística Laguna de Huaypo con vistas panorámicas a los picos nevados.",
    inclusions: [
      "Cuatrimoto individual o doble con casco y equipo de seguridad",
      "Instrucción previa y práctica guiada de manejo",
      "Transporte privado desde Cusco ida y vuelta",
      "Guía instructor bilingüe de aventura"
    ],
    extras: [
      { id: "fotos_gopro", name: "Pack de fotografía y video en acción", priceUSD: 15, pricePEN: 55 }
    ]
  },
  {
    id: "cabalgata",
    title: "Cabalgata Andina",
    category: "naturaleza",
    categoryLabel: "Naturaleza y aventura",
    tag: "Paseo Escénico",
    isFeatured: false,
    duration: "Medio Día (9:00 - 14:00)",
    difficulty: "Nivel Fácil",
    altitude: "3,650 msnm",
    maxGroup: 6,
    priceUSD: 55,
    pricePEN: 205,
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
    summary: "Paseo a caballo criollo o de paso por los caminos ancestrales de Sacsayhuamán, el Templo de la Luna y bosques andinos, en conexión profunda con la naturaleza.",
    inclusions: [
      "Caballos andinos mansos y equipamiento completo de montar",
      "Arriero local y guía bilingüe especializado",
      "Transporte privado al rancho andino ida y vuelta",
      "Snacks locales y agua mineral"
    ],
    extras: [
      { id: "sombrero_poncho", name: "Alquiler de poncho andino tradicional para fotos", priceUSD: 10, pricePEN: 38 }
    ]
  },
  {
    id: "picnic-andino",
    title: "Picnic Andino Gourmet",
    category: "naturaleza",
    categoryLabel: "Naturaleza y aventura",
    tag: "Experiencia Exclusiva",
    isFeatured: true,
    duration: "4 Horas",
    difficulty: "Nivel Relajado",
    altitude: "3,100 msnm",
    maxGroup: 6,
    priceUSD: 65,
    pricePEN: 245,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    summary: "Almuerzo al aire libre montado con alfombras y cojines andinos frente a lagunas sagradas o miradores del Valle Sagrado. Gastronomía orgánica de altura y vino de cortesía.",
    inclusions: [
      "Montaje bohemio andino privado (alfombras, mesas bajas, vajilla fina)",
      "Menú gourmet de 3 tiempos con ingredientes nativos orgánicos",
      "Copa de vino o cerveza artesanal local y bebidas calientes de hierbas",
      "Transporte privado exclusivo hacia el mirador natural"
    ],
    extras: [
      { id: "musico", name: "Música andina en vivo con quena y charango", priceUSD: 35, pricePEN: 130 }
    ]
  },

  // =========================================================================
  // 3. EXPERIENCIAS MÍSTICAS Y DE BIENESTAR
  // =========================================================================
  {
    id: "lectura-de-coca",
    title: "Lectura de Coca Sagrada",
    category: "mistica",
    categoryLabel: "Experiencias místicas y de bienestar",
    tag: "Sabiduría Ancestral",
    isFeatured: true,
    duration: "1 Hora y media",
    difficulty: "Espiritual",
    altitude: "3,400 msnm",
    maxGroup: 4,
    priceUSD: 45,
    pricePEN: 170,
    image: "/images/medicina-ancestral-mamita.jpg",
    summary: "Consulta ceremonial con las hojas sagradas de coca guiada por un maestro andino (Pampamisayoc). Espacio de orientación, introspección personal y respeto por la tradición inca.",
    inclusions: [
      "Sesión privada con maestro o abuela sabia andina",
      "Hojas sagradas de coca seleccionadas (Kintu ceremonial)",
      "Traducción personalizada quechua - español / inglés",
      "Ambiente privado y aromaterapia con palo santo"
    ],
    extras: [
      { id: "amuleto", name: "Amuleto consagrado de protección andina (Chumpi)", priceUSD: 15, pricePEN: 55 }
    ]
  },
  {
    id: "ritual-pachamama",
    title: "Ritual a la Pachamama (Pago a la Tierra)",
    category: "mistica",
    categoryLabel: "Experiencias místicas y de bienestar",
    tag: "Ayni Sagrado",
    isFeatured: true,
    duration: "2 Horas y media",
    difficulty: "Ceremonial",
    altitude: "3,600 msnm",
    maxGroup: 6,
    priceUSD: 75,
    pricePEN: 280,
    image: "/images/comunidad-nino-andes.jpg",
    summary: "Ofrenda tradicional andina (Haywarikuy) en agradecimiento a la Madre Tierra y los Apus tutelares. Conecta con el principio de reciprocidad sagrada (Ayni) de los incas.",
    inclusions: [
      "Ceremonia completa guiada por sacerdote andino tradicional",
      "Mesa de ofrenda con semillas sagradas, flores, lanas y dulces ceremoniales",
      "Bebida ceremonial andina para chicha de agradecimiento",
      "Lugar sagrado al aire libre o santuario privado"
    ],
    extras: [
      { id: "fotografia_respetuosa", name: "Registro fotográfico documental respetuoso", priceUSD: 20, pricePEN: 75 }
    ]
  },
  {
    id: "ritual-armonia",
    title: "Ritual de Armonía & Equilibrio",
    category: "mistica",
    categoryLabel: "Experiencias místicas y de bienestar",
    tag: "Bienestar Andino",
    isFeatured: false,
    duration: "2 Horas",
    difficulty: "Relajación",
    altitude: "3,400 msnm",
    maxGroup: 6,
    priceUSD: 60,
    pricePEN: 225,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    summary: "Ceremonia de alineación energética y meditación andina que armoniza mente, cuerpo y espíritu mediante sonidos de caracolas (pututu), campanas y cantos quechuas.",
    inclusions: [
      "Sesión guiada de meditación y respiración consciente andina",
      "Alineación energética con piedras sagradas (Ilas y Khuyas)",
      "Terapia de sonido con instrumentos autóctonos milenarios",
      "Infusión caliente de hierbas medicinales de altura"
    ],
    extras: [
      { id: "bano_florecimiento", name: "Baño de florecimiento con agua de flores andinas", priceUSD: 25, pricePEN: 95 }
    ]
  },
  {
    id: "ritual-limpieza",
    title: "Ritual de Limpieza Energética",
    category: "mistica",
    categoryLabel: "Experiencias místicas y de bienestar",
    tag: "Purificación",
    isFeatured: false,
    duration: "1 Hora y media",
    difficulty: "Espiritual",
    altitude: "3,400 msnm",
    maxGroup: 4,
    priceUSD: 50,
    pricePEN: 190,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    summary: "Limpieza profunda con sahumado tradicional de copal, ruda, palo santo, flores andinas y plumas de aves sagradas para liberar tensiones y renovar la vitalidad.",
    inclusions: [
      "Sahumado con hierbas maestras aromáticas del Cusco",
      "Limpieza tradicional con agua bendecida de manantial andino",
      "Acompañamiento personalizado y respetuoso",
      "Espacio sereno reservado para introspección"
    ],
    extras: [
      { id: "esencia_floral", name: "Frasco de esencia floral andina artesanal", priceUSD: 12, pricePEN: 45 }
    ]
  },
  {
    id: "ritual-cuti",
    title: "Ritual Cuti de Protección",
    category: "mistica",
    categoryLabel: "Experiencias místicas y de bienestar",
    tag: "Corte y Retorno",
    isFeatured: false,
    duration: "2 Horas",
    difficulty: "Místico",
    altitude: "3,400 msnm",
    maxGroup: 4,
    priceUSD: 65,
    pricePEN: 245,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    summary: "Milenario ritual andino 'Cuti' de corte y retorno de energías densas. Restablece la protección áurica y la paz interior según las enseñanzas transmitidas de los sacerdotes Q'ero.",
    inclusions: [
      "Ceremonia especializada de corte con espinas de cactus y lanas sagradas",
      "Sellado de protección energética con aceites andinos",
      "Consejo y diálogo con el maestro sanador tradicional",
      "Té medicinal de muña y cedrón orgánico"
    ],
    extras: [
      { id: "piedra_proteccion", name: "Piedra andina consagrada para viaje", priceUSD: 15, pricePEN: 55 }
    ]
  }
];
