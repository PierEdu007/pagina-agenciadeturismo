/**
 * Catálogo Oficial de Experiencias y Tours
 * Hampinahuasi Travel S.A.C. - Cusco, Perú
 * Salidas garantizadas desde la ciudad del Cusco
 */

export const TOUR_CATEGORIES = [
  { id: "all", label: "Todas las Experiencias", icon: "fa-compass" },
  { id: "cultural", label: "Culturales & Arqueología", icon: "fa-landmark" },
  { id: "aventura", label: "Aventura & Trekking", icon: "fa-mountain-sun" },
  { id: "mistica", label: "Mística & Sabiduría Ancestral", icon: "fa-leaf" },
  { id: "exclusivo", label: "Picnic & Exclusivas", icon: "fa-wine-glass-empty" }
];

export const TOURS_DATA = [
  // =========================================================================
  // 1. CULTURALES & ARQUEOLOGÍA
  // =========================================================================
  {
    id: "city-tour-cusco",
    title: "City Tour Arqueológico Cusco",
    category: "cultural",
    categoryLabel: "Culturales & Arqueología",
    tag: "Imperdible Clásico",
    isFeatured: true,
    duration: "5 hrs aprox",
    departureLocation: "Plaza de Armas de Cusco (Salida desde Cusco)",
    departureTime: "13:00 hrs",
    returnLocation: "Centro Histórico de Cusco",
    returnTime: "18:00 hrs aprox",
    difficulty: "Nivel Fácil",
    altitude: "3,400 - 3,700 msnm",
    maxGroup: "Grupal o Privado",
    priceUSD: 16,
    pricePEN: 60,
    pricePrivateUSD: 48,
    pricePrivatePEN: 180,
    pricingNote: "$16 por persona (Tour grupal) · $48 por persona (Tour privado)",
    image: "/images/city-tour-cusco.webp",
    summary: "Partida desde la Plaza de Armas de Cusco. Recorrido guiado por la Catedral, Qoricancha y los templos megalíticos de Sacsayhuamán, Qenqo, Puca Pucara y Tambomachay.",
    description: "Una inmersión fundamental en la historia inca y colonial de la Capital Arqueológica de América. Desde los muros de oro del Templo del Sol (Qoricancha) y las joyas del arte cusqueño en la Catedral, hasta la asombrosa arquitectura megalítica de Sacsayhuamán y los altares ceremoniales de Tambomachay.",
    places: [
      "Catedral Basílica de la Virgen de la Asunción (Cusco)",
      "Templo Sagrado del Qoricancha",
      "Fortaleza Megalítica de Sacsayhuamán",
      "Centro Ceremonial de Qenqo",
      "Puca Pucara (Fortaleza Roja)",
      "Santuario del Agua de Tambomachay"
    ],
    inclusions: [
      "Recojo de pasajeros en punto acordado",
      "Transporte turístico moderno y equipado",
      "Guía oficial de turismo bilingüe (Español e Inglés)"
    ],
    nonInclusions: [
      "Boleto Turístico del Cusco (BTC)",
      "Entrada a la Catedral de Cusco (S/. 40 soles)",
      "Entrada al Templo del Qoricancha (S/. 20 soles)"
    ],
    notes: [
      "Tour en grupo con opción de upgrade a tour privado.",
      "Los Boletos Turísticos se pueden adquirir directamente en el centro arqueológico de Sacsayhuamán.",
      "Boleto Turístico General: Extranjeros S/. 130 · Nacionales S/. 70 (Válido por 10 días para 16 lugares).",
      "Boleto Turístico Parcial: Extranjeros S/. 70 · Nacionales S/. 40 (Válido por 1 a 2 días según circuito)."
    ]
  },
  {
    id: "valle-sagrado-full-day",
    title: "Full Day Tour Valle Sagrado de los Incas",
    category: "cultural",
    categoryLabel: "Culturales & Arqueología",
    tag: "Patrimonio Imperial",
    isFeatured: true,
    duration: "8 - 9 hrs aprox",
    departureLocation: "Centro Histórico del Cusco (Salida desde Cusco)",
    departureTime: "07:45 hrs",
    returnLocation: "Centro Histórico del Cusco",
    returnTime: "17:30 hrs aprox",
    difficulty: "Nivel Moderado",
    altitude: "2,790 - 3,762 msnm",
    maxGroup: "Tour Grupal",
    priceUSD: 40,
    pricePEN: 150,
    pricingNote: "$40 por persona (Tour Grupal con Almuerzo Buffet de primera categoría)",
    image: "/images/fullday-valle-sagrado.webp",
    summary: "Salida desde Cusco al Valle Sagrado. Visita los centros arqueológicos de Pisaq, mercado artesanal, fortaleza viva de Ollantaytambo, Chinchero y almuerzo buffet gourmet.",
    description: "El recorrido más completo por el corazón fértil del Imperio Incaico. Admira las terrazas agrícolas de Pisac suspendidas en la montaña, recorre las callejuelas incas intactas de Ollantaytambo y contempla la herencia textil milenaria en Chinchero, degustando un almuerzo buffet de alta cocina andina.",
    places: [
      "Pisaq Centro Arqueológico (3,300 msnm)",
      "Pisaq Mercado Típico Artesanal (2,972 msnm)",
      "Ollantaytambo Fortaleza y Ciudad Inca Viviente (2,790 msnm)",
      "Chinchero Centro Arqueológico y Demostración de Tejidos (3,762 msnm)"
    ],
    inclusions: [
      "Recojo en hotel o punto céntrico en Cusco",
      "Transporte turístico confortable ida y vuelta",
      "Guía oficial de turismo bilingüe (Español e Inglés)",
      "Almuerzo Buffet en uno de los restaurantes más prestigiosos del Valle Sagrado"
    ],
    nonInclusions: [
      "Boleto Turístico del Cusco (General o Parcial)"
    ],
    notes: [
      "Boleto Turístico General: Extranjeros S/. 130 · Nacionales S/. 70 (Válido por 10 días).",
      "Boleto Turístico Parcial: Extranjeros S/. 70 · Nacionales S/. 40 (Válido por 1 a 2 días)."
    ],
    important: "En este recorrido es necesario subir a algunos centros arqueológicos por varias escaleras incas de piedra. Las personas con limitaciones físicas o que no realizan actividad física habitualmente pueden visitar los sitios desde los miradores panorámicos o zonas bajas. Infórmenos si alguien de su grupo tiene esta condición al momento de reservar."
  },
  {
    id: "valle-sagrado-vistas-arin",
    title: "Valle Sagrado Privado: Vistas de Arín & Terrazas",
    category: "cultural",
    categoryLabel: "Culturales & Arqueología",
    tag: "Servicio Privado",
    isFeatured: false,
    duration: "Full Day flexible (1h 30m caminata)",
    departureLocation: "Cusco / Recojo en Urubamba, Huayllabamba o Yucay",
    departureTime: "09:00 hrs o 13:00 hrs (Turno Mañana o Tarde)",
    returnLocation: "Valle Sagrado / Retorno a Cusco",
    returnTime: "13:00 hrs o 17:00 hrs",
    difficulty: "Nivel Fácil",
    altitude: "2,857 - 3,045 msnm",
    maxGroup: "Privado (Mínimo 2 personas)",
    priceUSD: 36,
    pricePEN: 135,
    pricingNote: "$36 por persona · Mínimo 2 personas (Tour 100% Privado)",
    image: "/images/valle-sagrado-arim.webp",
    summary: "Ruta privada por terrazas de agricultura ancestral y la catarata de Arín. Caminata suave de 4.9 km entre la flora nativa del Valle Sagrado.",
    description: "Una joya poco transitada en el Valle Sagrado para quienes buscan escapar de las multitudes. Ascenso suave hacia el mirador de Arín y sus terrazas agrícolas precolombinas, con vistas espléndidas a la cordillera del Urubamba y paso por su cascada natural durante la época de lluvias.",
    places: [
      "Terrazas y andenes agrícolas de Arín",
      "Catarata natural de Arín (caudal activo en temporada de lluvia)",
      "Miradores de montaña del Valle Sagrado"
    ],
    technicalSheet: {
      travelTime: "50 min en carro (ida y vuelta)",
      hikeDistance: "4.9 km (3.1 mi)",
      hikeTime: "1 hr 30 min aprox",
      difficulty: "Fácil",
      maxAltitude: "3,045 msnm (9,990 ft)",
      minAltitude: "2,857 msnm (9,373 ft)",
      elevationGain: "+250 m (820 ft)",
      elevationLoss: "-250 m (820 ft)"
    },
    inclusions: [
      "Recojo personalizado en punto de encuentro",
      "Transporte turístico privado ida y retorno",
      "Guía oficial de turismo especializado"
    ],
    nonInclusions: [
      "Lunch Box gourmet opcional (S/. 30 soles por persona)",
      "Gastos personales o propinas"
    ],
    notes: [
      "Horarios de inicio flexibles según la preferencia de su grupo.",
      "Recojo y retorno disponibles en Huayllabamba, Yucay y Urubamba con conexión directa desde y hacia Cusco."
    ],
    important: "En este recorrido es necesario ascender por escalinatas y senderos rústicos. Personas con limitaciones de movilidad pueden disfrutar el paisaje desde las zonas de base."
  },
  {
    id: "moray-salineras",
    title: "Medio Día: Moray & Salineras de Maras",
    category: "cultural",
    categoryLabel: "Culturales & Arqueología",
    tag: "Laboratorio Inca & Sal",
    isFeatured: false,
    duration: "4 hrs aprox",
    departureLocation: "Centro Histórico de Cusco (09:00 hrs) o Valle Sagrado (09:45 hrs)",
    departureTime: "09:00 hrs (Cusco) / 09:45 hrs (Valle)",
    returnLocation: "Centro Histórico de Cusco (14:00 hrs) o Valle (13:30 hrs)",
    returnTime: "14:00 hrs aprox (Cusco)",
    difficulty: "Nivel Fácil",
    altitude: "3,200 - 3,500 msnm",
    maxGroup: "Tour en Grupo",
    priceUSD: 20,
    pricePEN: 75,
    pricingNote: "$20 por persona desde Cusco · $29 por persona desde Valle Sagrado (mín. 2)",
    image: "/images/moray-salineras.webp",
    summary: "Salida desde Cusco al anfiteatro agrícola concéntrico de Moray y los más de 3,000 pozos de sal artesanal milenaria en las Salineras de Maras.",
    description: "Descubre los secretos agronómicos de los incas en los andenes circulares de Moray, que generaban hasta 20 microclimas diferentes para domesticar cultivos. Luego maravíllate con las terrazas evaporíticas de sal rosada de Maras, explotadas desde tiempos preincaicos por familias de la comunidad.",
    places: [
      "Laboratorio Agrícola de Moray (3,500 msnm)",
      "Pozas Evaporíticas de Salineras de Maras (3,200 msnm)",
      "Pampas tradicionales de Maras"
    ],
    inclusions: [
      "Transporte turístico ida y vuelta",
      "Guía oficial de turismo bilingüe (Español e Inglés)"
    ],
    nonInclusions: [
      "Boleto Turístico del Cusco (Parcial o General)",
      "Boleto de ingreso comunal a Salineras de Maras (S/. 10 - 20 soles)"
    ],
    notes: [
      "Si están hospedados en el Valle Sagrado (Urubamba, Yucay, Huayllabamba o Yanahuara) pueden unirse al grupo con un mínimo de 2 personas.",
      "Boleto Turístico General: Extranjeros S/. 130 · Nacionales S/. 70 (10 días).",
      "Boleto Turístico Parcial: Extranjeros S/. 70 · Nacionales S/. 40 (1 a 2 días)."
    ]
  },

  // =========================================================================
  // 2. AVENTURA & TREKKING
  // =========================================================================
  {
    id: "cabalgatas-maras",
    title: "Cabalgata Ecuestre en Pampas de Maras",
    category: "aventura",
    categoryLabel: "Aventura & Trekking",
    tag: "Aventura Ecuestre",
    isFeatured: false,
    duration: "1 hr a caballo / 3 hrs total",
    departureLocation: "Salida desde Cusco con enlace al Valle Sagrado (Yucay, Urubamba, Huayllabamba)",
    departureTime: "Horario a elección del pasajero (08:00 a 15:00 hrs)",
    returnLocation: "Valle Sagrado / Retorno a Cusco",
    returnTime: "Flexible según horario escogido",
    difficulty: "Nivel Fácil - Principiantes",
    altitude: "3,300 msnm",
    maxGroup: "Tour Privado (Mínimo 2 personas)",
    priceUSD: 59,
    pricePEN: 220,
    pricingNote: "$59 por persona · Mínimo 2 personas (Tour Privado)",
    image: "/images/cabalgatas-maras.webp",
    summary: "Cabalgata privada por las pampas andinas de Maras con caballos de paso dóciles y adiestrados, con vistas panorámicas a los glaciares Verónica y Chicón.",
    description: "Una experiencia tranquila y elegante recorriendo senderos ancestrales a lomo de caballos de paso peruano y andinos. Guiado por un instructor experto, cruzarás campos de cultivo dorados con el telón de fondo de los nevados de la cordillera del Urubamba.",
    places: [
      "Pampas de Maras - Urubamba (3,300 msnm)",
      "Miradores de la Cordillera de Vilcanota",
      "Senderos de herradura del Valle Sagrado"
    ],
    inclusions: [
      "Recojo de su alojamiento",
      "Transporte turístico privado ida y vuelta",
      "Guía e instructor ecuestre bilingüe",
      "Caballos adiestrados y equipo de seguridad (casco, montura)"
    ],
    nonInclusions: [
      "Bebidas extras o propinas"
    ],
    notes: [
      "Apto para principiantes y jinetes sin experiencia previa.",
      "Se provee inducción básica de monta y manejo de riendas antes de iniciar la cabalgata."
    ]
  },
  {
    id: "cuatrimotos-moray",
    title: "Aventura en Cuatrimotos: Moray, Salineras o Huaypo",
    category: "aventura",
    categoryLabel: "Aventura & Trekking",
    tag: "Adrenalina Andina",
    isFeatured: true,
    duration: "5 hrs aprox (desde Cusco)",
    departureLocation: "Cusco: 06:50 hrs y 12:50 hrs · Urubamba: 07:40 hrs y 13:40 hrs",
    departureTime: "Turno Mañana (06:50) o Tarde (12:50)",
    returnLocation: "Retorno a Cusco (13:00 hrs / 19:00 hrs) o Urubamba (12:00 / 18:00 hrs)",
    returnTime: "13:00 hrs o 19:00 hrs",
    difficulty: "Moderada - Aventura",
    altitude: "3,200 - 3,507 msnm",
    maxGroup: "Tour Grupal",
    priceUSD: 29,
    pricePEN: 110,
    pricingNote: "Desde Cusco: $29 Simple / $38 Doble · Desde Urubamba: $40 Simple / $68 Doble",
    image: "/images/cuatrimotos-moray.webp",
    summary: "Conduce cuatrimotos todoterreno a través de mesetas andinas. Dos rutas a elegir: Moray y Salineras, o Laguna de Huaypo y Salineras.",
    description: "Siente la emoción de manejar una cuatrimoto todoterreno entre campos de cebada y vistas panorámicas de las montañas sagradas. Podrás elegir entre la ruta arqueológica de Moray y Salineras o la ruta paisajística hacia la mística Laguna de Huaypo.",
    places: [
      "Ruta A: Complejo Arqueológico de Moray (3,385 msnm) y Salineras",
      "Ruta B: Laguna de Huaypo (3,507 msnm) y Salineras (3,380 msnm)",
      "Pampas y caminos rurales de Maras"
    ],
    inclusions: [
      "Transporte turístico ida y vuelta",
      "Guía oficial bilingüe e instructor de cuatrimotos",
      "Cuatrimoto automática moderna y equipo de seguridad (casco, guantes)",
      "Práctica de manejo previo al recorrido"
    ],
    nonInclusions: [
      "Boleto Turístico General (Extranjeros S/. 130 / Nacionales S/. 70)",
      "Entrada a Salineras de Maras (S/. 10 - 20 soles)",
      "Entrada a la Laguna de Huaypo (S/. 5 soles, solo en Ruta B)"
    ],
    notes: [
      "Precios desde Cusco: $29 USD (Cuatrimoto Simple) / $38 USD (Cuatrimoto Doble para 2 pax).",
      "Precios desde Urubamba: $40 USD (Simple) / $68 USD (Doble) con recojo directo desde su hotel (mín. 2 pax)."
    ],
    important: "No se requiere licencia de conducir formal, pero sí un manejo prudente. Los conductores deben tener al menos 16 años. No apto para mujeres embarazadas."
  },
  {
    id: "laguna-humantay",
    title: "Trek Laguna Humantay & Glaciar Salkantay",
    category: "aventura",
    categoryLabel: "Aventura & Trekking",
    tag: "Aguas Turquesas",
    isFeatured: true,
    duration: "Full Day (4 hrs caminata)",
    departureLocation: "Centro Histórico del Cusco (04:00 - 05:00 hrs)",
    departureTime: "04:00 a 05:00 hrs",
    returnLocation: "Centro Histórico de Cusco",
    returnTime: "17:00 hrs aprox",
    difficulty: "Nivel Moderado a Exigente",
    altitude: "3,852 - 4,340 msnm",
    maxGroup: "Grupal desde Cusco / Privado desde Valle",
    priceUSD: 30,
    pricePEN: 115,
    pricingNote: "$30 por persona desde Cusco (Grupal) · $105 privado desde Valle Sagrado",
    image: "/images/laguna-humantay.webp",
    summary: "Trek de alta montaña hacia la mística laguna de origen glaciar a 4,340 msnm, custodiada por los majestuosos nevados Salkantay y Humantay.",
    description: "Una de las caminatas de alta montaña más codiciadas de Sudamérica. El ascenso a través del valle de Mollepata y Soraypampa te llevará hasta las aguas color esmeralda y turquesa de la Laguna Humantay, un santuario natural venerado por los chamanes andinos para pedir la bendición del Apu Salkantay.",
    places: [
      "Comunidad de Mollepata (desayuno)",
      "Campamento base de Soraypampa (3,852 msnm)",
      "Laguna Glaciar Humantay (4,340 msnm)",
      "Miradores al Apu Salkantay"
    ],
    technicalSheet: {
      travelTime: "3 hrs en carro por tramo",
      hikeDistance: "7.08 km (4.4 mi) ida y vuelta",
      hikeTime: "4 hrs aprox",
      difficulty: "Moderada a Exigente",
      maxAltitude: "4,340 msnm (14,241 ft)",
      minAltitude: "3,852 msnm (12,691 ft)",
      elevationGain: "+599 m (1,962 ft)",
      elevationLoss: "-599 m (1,962 ft)"
    },
    inclusions: [
      "Recojo en hotel (si se ubica dentro del centro histórico de Cusco)",
      "Transporte turístico ida y vuelta",
      "Guía oficial de turismo de montaña bilingüe",
      "Desayuno buffet andino energizante",
      "Almuerzo buffet reconfortante",
      "Botiquín de primeros auxilios y balón de oxígeno de emergencia"
    ],
    nonInclusions: [
      "Boleto de ingreso comunal (Nacional S/. 10 soles / Extranjero S/. 20 soles)",
      "Caballo de apoyo opcional (alquilado directamente a los comuneros en Soraypampa: S/. 80 - 100)"
    ],
    notes: [
      "Opción desde Valle Sagrado: $105 USD por persona (Mínimo 2 pax, servicio privado que incluye guía, transporte, breakfast box y snacks con partida a las 04:00 hrs)."
    ],
    important: "No recomendable para niños menores de 14 años, adultos mayores a 65 años, personas que no hagan actividad física regularmente, con limitaciones físicas severas o afecciones cardíacas/circulatorias. Se recomienda al menos 1 o 2 días de aclimatación en Cusco previa al ascenso."
  },
  {
    id: "montana-7-colores",
    title: "Trek Montaña de 7 Colores (Vinicunca)",
    category: "aventura",
    categoryLabel: "Aventura & Trekking",
    tag: "Maravilla Natural",
    isFeatured: true,
    duration: "Full Day (3.5 hrs caminata)",
    departureLocation: "Centro Histórico del Cusco (04:00 - 05:00 hrs)",
    departureTime: "04:00 a 05:00 hrs",
    returnLocation: "Centro Histórico de Cusco",
    returnTime: "17:00 hrs aprox",
    difficulty: "Nivel Moderado - Gran Altitud",
    altitude: "4,236 - 5,200 msnm",
    maxGroup: "Grupal desde Cusco / Privado desde Valle",
    priceUSD: 30,
    pricePEN: 115,
    pricingNote: "$30 por persona desde Cusco (Grupal) · $105 privado desde Valle Sagrado",
    image: "/images/montana-7-colores.webp",
    summary: "Asciende a 5,200 msnm frente al Apu Ausangate para contemplar los estratos minerales policromáticos de Vinicunca y el Valle Rojo.",
    description: "Una travesía inolvidable por la cordillera del Vilcanota. Caminarás junto a rebaños de alpacas y llamas hacia la cresta de Vinicunca, donde millones de años de sedimentación mineral han creado franjas fucsias, turquesas y doradas bajo la atenta mirada del nevado tutelar Ausangate.",
    places: [
      "Comunidad andina de Cusipata (desayuno y almuerzo)",
      "Sendero de pastores altoandinos",
      "Mirador principal de la Montaña de 7 Colores (5,200 msnm)",
      "Vista panorámica del Apu Ausangate y Valle Rojo"
    ],
    technicalSheet: {
      travelTime: "3 hrs en carro por tramo",
      hikeDistance: "8 km (4.9 mi) ida y vuelta",
      hikeTime: "3.5 hrs aprox",
      difficulty: "Moderada (Gran altitud)",
      maxAltitude: "5,200 msnm (17,060 ft)",
      minAltitude: "4,236 msnm (14,192 ft)",
      elevationGain: "+510 m (1,673 ft)",
      elevationLoss: "-510 m (1,673 ft)"
    },
    inclusions: [
      "Recojo de su hotel en el centro histórico de Cusco",
      "Transporte turístico ida y vuelta",
      "Guía oficial de turismo de montaña bilingüe",
      "Desayuno buffet andino",
      "Almuerzo buffet nutritivo",
      "Balón de oxígeno de emergencia y botiquín de primeros auxilios"
    ],
    nonInclusions: [
      "Boleto de entrada comunal (Nacional S/. 15 soles / Extranjero S/. 25 soles)",
      "Caballo de monta opcional (alquilado por arrieros locales)"
    ],
    notes: [
      "Opción desde Valle Sagrado: $105 USD por persona (Mínimo 2 personas, tour privado con guía, transporte, breakfast box y snacks, salida a las 04:00 hrs)."
    ],
    important: "No recomendable para niños menores de 14 años, adultos mayores de 65 años, personas sin hábito de actividad física, con limitaciones motrices o con antecedentes cardíacos y respiratorios. Requiere aclimatación mínima de 48 horas en Cusco."
  },

  // =========================================================================
  // 3. EXCLUSIVAS & GASTRONOMÍA
  // =========================================================================
  {
    id: "picnic-andino",
    title: "Picnic Andino de Autor en Maras o Huaypo",
    category: "exclusivo",
    categoryLabel: "Picnic & Exclusivas",
    tag: "Lujo & Paisaje",
    isFeatured: true,
    duration: "4 hrs (desde Cusco) / 3 hrs (desde Urubamba)",
    departureLocation: "Cusco Ciudad o Urubamba (Recomendado por la mañana)",
    departureTime: "Horario matutino personalizado",
    returnLocation: "Cusco Ciudad o Urubamba",
    returnTime: "Flexible según la experiencia",
    difficulty: "Nivel Relajante",
    altitude: "3,300 - 3,507 msnm",
    maxGroup: "Tour Privado Exclusivo",
    priceUSD: 67,
    pricePEN: 250,
    pricingNote: "$67 por persona · Mínimo 4 pax desde Cusco / Mínimo 2 pax desde Urubamba",
    image: "/images/picnic-andino.webp",
    summary: "Experiencia gastronómica privada en medio de las pampas de Maras o a orillas de la Laguna de Huaypo, con montaje campestre de diseño y productos orgánicos locales.",
    description: "Una experiencia sensorial única rodeada por el silencio de los Andes. Montamos para ti un elegante espacio de picnic con mantas andinas, cojines artesanales, flores nativas y una propuesta culinaria de primer nivel inspirada en la despensa del Valle Sagrado.",
    places: [
      "Pampas de Maras o orillas de la Laguna de Huaypo (a elección)",
      "Miradores privados con vista a los glaciares Chicón y Verónica"
    ],
    inclusions: [
      "Recojo privado en hotel o punto acordado",
      "Transporte turístico privado ida y vuelta",
      "Montaje campestre completo (sombrillas, mantas, mesa baja, cojines, copas y cubertería fina)",
      "Picnic Premium o Menú Vegetariano a elección",
      "Botella de vino seleccionado y bebidas refrescantes"
    ],
    nonInclusions: [
      "Bebidas alcohólicas adicionales no especificadas"
    ],
    picnicMenu: {
      premium: [
        "Canasta de frutas frescas de temporada",
        "Selección de frutos secos (almendras, pecanas, nueces, pasas, orejones y guindones)",
        "Sándwich de pollo deshilachado con mayonesa artesanal y apio crocante",
        "Sándwich caprese con tomate del huerto, albahaca fresca y mozzarella andina",
        "Tabla variada de quesos artesanales (andino tradicional, finas hierbas y paprika)",
        "Extracto natural de naranja recién exprimido",
        "Tabla de embutidos selectos (jamón, salame, prosciutto)",
        "Vino selecto y agua mineral embotellada"
      ],
      vegetariano: [
        "Canasta de frutas frescas de temporada",
        "Selección de frutos secos andinos",
        "Mini ceviche vegetal de tarwi (chocho) con choclo y camote glaseado",
        "Quenelle de chaufa de quinua real orgánica",
        "Sándwich de vegetales asados con salsa de berenjena ahumada",
        "Sándwich de zucchini grillado con pesto andino",
        "Extracto natural de naranja",
        "Vino selecto y agua mineral embotellada"
      ]
    },
    notes: [
      "Tour 100% privado con atención personalizada de anfitrión.",
      "Mínimo 4 personas con salida y retorno desde la ciudad de Cusco.",
      "Mínimo 2 personas con salida y retorno desde Urubamba / Valle Sagrado."
    ]
  },

  // =========================================================================
  // 4. MÍSTICA & SABIDURÍA ANCESTRAL
  // =========================================================================
  {
    id: "lectura-de-coca",
    title: "Lectura Sagrada de Hojas de Coca",
    category: "mistica",
    categoryLabel: "Mística & Sabiduría Ancestral",
    tag: "Oráculo Andino",
    isFeatured: true,
    duration: "1 hr y media",
    departureLocation: "Cusco (Espacio ceremonial o santuario privado)",
    departureTime: "Horario coordinado con el maestro",
    returnLocation: "Cusco Centro",
    returnTime: "Al culminar la sesión",
    difficulty: "Espiritual - Introspectivo",
    altitude: "3,400 msnm",
    maxGroup: "Sesión Privada (1 a 4 personas)",
    priceUSD: 45,
    pricePEN: 170,
    pricingNote: "$45 por persona · Sesión Privada Ceremonial",
    image: "/images/lectura-de-coca.webp",
    summary: "Consulta ceremonial ancestral guiada por un maestro andino (Pampamisayoc) mediante el sagrado Kintu de hojas de coca para orientar pasado, presente y futuro.",
    description: "La lectura de coca es una práctica ancestral milenaria realizada mediante técnicas tradicionales incas. A través de la interpretación de las hojas sagradas de coca, podrás formular preguntas sobre tu pasado, presente y futuro, despejando dudas clave en temas personales, familiares, laborales, espirituales o decisiones trascendentales.",
    places: [
      "Espacio ceremonial privado consagrado en Cusco",
      "Altar andino tradicional (Mesa ceremonial)"
    ],
    inclusions: [
      "Sesión privada con maestro andino tradicional (Pampamisayoc)",
      "Hojas sagradas de coca seleccionadas para el Kintu ritual",
      "Traducción personalizada quechua - español / inglés",
      "Ambiente privado consagrado con aromaterapia de palo santo y flores andinas"
    ],
    nonInclusions: [
      "Amuletos o trabajos espirituales adicionales no acordados"
    ],
    notes: [
      "Experiencia desarrollada con absoluto respeto ético y cultural hacia las tradiciones vivas de los Andes.",
      "Se sugiere asistir con mente abierta, intención clara y prendas cómodas."
    ]
  },
  {
    id: "ritual-apu",
    title: "Ritual a los Apus (Espíritus de las Montañas)",
    category: "mistica",
    categoryLabel: "Mística & Sabiduría Ancestral",
    tag: "Conexión Sagrada",
    isFeatured: false,
    duration: "2 hrs aprox",
    departureLocation: "Salida desde Cusco (Mirador sagrado o espacio ceremonial)",
    departureTime: "Horario matutino o vespertino coordinado",
    returnLocation: "Cusco Centro",
    returnTime: "Al culminar la ceremonia",
    difficulty: "Ceremonial - Espiritual",
    altitude: "3,400 - 3,600 msnm",
    maxGroup: "Ceremonia Privada",
    priceUSD: 65,
    pricePEN: 245,
    pricingNote: "$65 por persona · Ceremonia Privada",
    image: "/images/ritual-apu.webp",
    summary: "Ceremonia inca de conexión espiritual con los Apus tutelares (Ausangate, Salkantay, Pachatusan) para gratitud, protección y fuerza vital.",
    description: "El ritual Apu es una ceremonia ancestral inca utilizada para establecer conexión espiritual con los Apus, considerados espíritus protectores de las montañas tutelares del Cusco. Mediante este ritual sagrado, la persona puede realizar peticiones, agradecer, buscar protección, guía o ayuda para alcanzar aquello que más anhela en su camino de vida.",
    places: [
      "Santuario andino al aire libre con vista a los Apus o espacio ceremonial tradicional",
      "Mesa de ofrenda consagrada a las cumbres andinas"
    ],
    inclusions: [
      "Ceremonia guiada por maestro sacerdote andino tradicional",
      "Mesa ritual con elementos ceremoniales, minerales y ofrendas tradicionales a los Apus",
      "Traducción quechua - español / inglés",
      "Bebida ceremonial para el brindis sagrado de conexión"
    ],
    nonInclusions: [
      "Gastos de transporte fuera del perímetro urbano si se elige locación remota"
    ],
    notes: [
      "Ceremonia realizada en un marco de reciprocidad y profunda reverencia por las montañas sagradas del Cusco."
    ]
  },
  {
    id: "ritual-pachamama",
    title: "Ritual a la Pachamama (Pago a la Tierra - Haywarikuy)",
    category: "mistica",
    categoryLabel: "Mística & Sabiduría Ancestral",
    tag: "Ayni Sagrado",
    isFeatured: true,
    duration: "2 hrs y media",
    departureLocation: "Salida desde Cusco (Santuario andino natural o privado)",
    departureTime: "Mañana o Tarde (Previa coordinación)",
    returnLocation: "Cusco Centro",
    returnTime: "Al finalizar el ritual",
    difficulty: "Ceremonial Andino",
    altitude: "3,500 msnm",
    maxGroup: "Ceremonia Privada (Máx. 6 personas)",
    priceUSD: 75,
    pricePEN: 280,
    pricingNote: "$75 por persona · Ceremonia Privada Completa",
    image: "/images/ritual-pachamama.webp",
    summary: "Ofrenda tradicional andina (Haywarikuy) en agradecimiento a la Madre Tierra para pedir equilibrio, salud energética y resolver dificultades personales.",
    description: "El ritual a la Pachamama es una ceremonia solemne dirigida a la Madre Tierra. Su finalidad es establecer un puente espiritual con ella para agradecer los frutos recibidos, pedir protección, armonía y auxilio ante bloqueos o dificultades personales, familiares, laborales o de salud energética, restableciendo el equilibrio sagrado del Ayni.",
    places: [
      "Santuario sagrado en contacto con la tierra viva",
      "Altar ceremonial tradicional con brasas sagradas"
    ],
    inclusions: [
      "Ceremonia completa guiada por sacerdote andino (Paqo / Pampamisayoc)",
      "Mesa de ofrenda rica en semillas autóctonas, flores, lanas de alpaca de colores y dulces ceremoniales",
      "Chicha de jora ceremonial para la reciprocidad con la tierra",
      "Traducción y explicación pormenorizada del significado de cada elemento ritual"
    ],
    nonInclusions: [
      "Tours turísticos arqueológicos en el mismo horario"
    ],
    notes: [
      "Al finalizar la ceremonia, la ofrenda se entrega con respeto al fuego sagrado o se entierra en la Madre Tierra según la tradición milenaria."
    ]
  },
  {
    id: "ritual-limpieza",
    title: "Ritual de Limpieza Energética & Descarga Andina",
    category: "mistica",
    categoryLabel: "Mística & Sabiduría Ancestral",
    tag: "Purificación del Alma",
    isFeatured: false,
    duration: "1 hr y media",
    departureLocation: "Cusco (Espacio terapéutico tradicional)",
    departureTime: "Coordinado con anticipación",
    returnLocation: "Cusco Centro",
    returnTime: "Al culminar la sesión",
    difficulty: "Purificación & Descanso",
    altitude: "3,400 msnm",
    maxGroup: "Sesión Individual o Pareja",
    priceUSD: 50,
    pricePEN: 190,
    pricingNote: "$50 por persona · Sesión Privada de Sanación",
    image: "/images/ritual-limpieza.webp",
    summary: "Purificación profunda del cuerpo, mente y campo energético con plantas maestras, sahumados andinos y minerales para desbloquear pesadez y cansancio.",
    description: "Un ritual especial destinado a purificar el cuerpo, el alma y el campo áurico de la persona. Su propósito es liberar energías densas, cargas espirituales acumuladas, tensiones enviadas por terceros o bloqueos que merman la vitalidad y el optimismo, restaurando la paz interior, la claridad mental y el bienestar integral.",
    places: [
      "Recinto ceremonial cerrado y consagrado en Cusco",
      "Espacio de relajación y reposo posterior"
    ],
    inclusions: [
      "Sesión dirigida por abuela sabia o maestro curandero andino",
      "Sahumerio con resinas sagradas (copal, palo santo, mirra andina y romero)",
      "Aplicación de agua florida consagrada y esencias florales autóctonas",
      "Descarga energética con campanas ceremoniales o plumas sagradas"
    ],
    nonInclusions: [
      "Consultas médicas alopáticas (el ritual es de naturaleza tradicional y espiritual)"
    ],
    notes: [
      "Se aconseja acudir hidratado y con ropa clara y holgada para facilitar la relajación."
    ]
  },
  {
    id: "banos-florecimiento",
    title: "Baños de Florecimiento Andino",
    category: "mistica",
    categoryLabel: "Mística & Sabiduría Ancestral",
    tag: "Apertura & Prosperidad",
    isFeatured: false,
    duration: "1 hr y media",
    departureLocation: "Cusco (Templo o recinto terapéutico andino)",
    departureTime: "Coordinado con la sabia andina",
    returnLocation: "Cusco Centro",
    returnTime: "Al culminar la sesión",
    difficulty: "Bienestar & Renovación",
    altitude: "3,400 msnm",
    maxGroup: "Servicio Privado",
    priceUSD: 55,
    pricePEN: 210,
    pricingNote: "$55 por persona · Experiencia Privada",
    image: "/images/banos-florecimiento.webp",
    summary: "Baño ritual preparado con flores sagradas andinas y plantas aromáticas maestras para abrir caminos en trabajo, amor, prosperidad y vitalidad.",
    description: "Los baños de florecimiento son baños rituales preparados con una maceración de flores frescas de alta montaña (retama, rosas silvestres, clavelinas) y plantas maestras (muña, ruda, romero). Su propósito es atraer vibraciones positivas, potenciar la buena fortuna, despejar senderos y fortalecer la alegría de vivir.",
    places: [
      "Sala terapéutica con tina o área ceremonial preparada en Cusco",
      "Espacio de reposo y té de hierbas andinas digestivas"
    ],
    inclusions: [
      "Preparado ceremonial personalizado con flores frescas y extractos herbales",
      "Acompañamiento por sabia andina durante la consagración del baño",
      "Infusión caliente de hierbas medicinales aromáticas",
      "Toallas limpias y elementos de aseo orgánicos"
    ],
    nonInclusions: [
      "Transporte interprovincial"
    ],
    notes: [
      "Ideal para recibir antes de iniciar una nueva etapa de vida, un viaje o un proyecto importante."
    ]
  }
];
