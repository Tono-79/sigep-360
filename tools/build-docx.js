const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, ShadingType, PageBreak, VerticalAlign
} = require("docx");

const ACCENT = "184F95";
const ACCENT2 = "2a78d6";
const MUTED = "6B6B66";

function H1(text, opts) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { before: 480, after: 200 }, ...opts });
}
function H2(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 320, after: 140 } });
}
function H3(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_3, spacing: { before: 220, after: 100 } });
}
function P(text, opts = {}) {
  const { bold, italic, size, color, align, spacingBefore = 0, spacingAfter = 160 } = opts;
  return new Paragraph({
    spacing: { before: spacingBefore, after: spacingAfter },
    alignment: align,
    children: [new TextRun({ text, bold, italics: italic, size, color })],
  });
}
function Quote(text, size = 24) {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { left: { color: ACCENT2, space: 12, style: BorderStyle.SINGLE, size: 18 } },
    indent: { left: 200 },
    children: [new TextRun({ text, bold: true, size, color: "222222" })],
  });
}
function Bullets(items) {
  return items.map(t => new Paragraph({ text: t, bullet: { level: 0 }, spacing: { after: 80 } }));
}
function cell(text, opts = {}) {
  const { header, width, align } = opts;
  return new TableCell({
    width: width ? { size: width, type: WidthType.PERCENTAGE } : undefined,
    shading: header ? { type: ShadingType.CLEAR, fill: "EDF2F8" } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [new Paragraph({
      alignment: align,
      children: [new TextRun({ text, bold: !!header, size: 20 })],
    })],
  });
}
function SimpleTable(headers, rows, widths) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
      left: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
      right: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: "E2E2E2" },
      insideVertical: { style: BorderStyle.SINGLE, size: 2, color: "E2E2E2" },
    },
    rows: [
      new TableRow({ children: headers.map((h, i) => cell(h, { header: true, width: widths ? widths[i] : undefined })) }),
      ...rows.map(r => new TableRow({ children: r.map((c, i) => cell(c, { width: widths ? widths[i] : undefined })) })),
    ],
  });
}
function Mejora(letra, titulo, texto) {
  return [
    new Paragraph({
      spacing: { before: 160, after: 40 },
      children: [
        new TextRun({ text: `MEJORA (${letra})  `, bold: true, color: ACCENT2, size: 20 }),
        new TextRun({ text: titulo, bold: true, size: 22 }),
      ],
    }),
    P(texto, { spacingAfter: 160 }),
  ];
}
function Roadmap(items) {
  const out = [];
  items.forEach(([tag, text]) => {
    out.push(new Paragraph({
      spacing: { before: 100, after: 20 },
      children: [new TextRun({ text: tag, bold: true, color: ACCENT, size: 21 })],
    }));
    out.push(P(text, { spacingAfter: 120 }));
  });
  return out;
}
function Flow(steps) {
  return P(steps.join("  →  "), { italic: true, color: MUTED, size: 20, spacingAfter: 160 });
}
function PageBreakPara() {
  return new Paragraph({ children: [new PageBreak()] });
}

const children = [];

// ---------- COVER ----------
children.push(
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "CONCURSO DE JEFATURA DE OBRAS PÚBLICAS · MUNICIPALIDAD DE AYACUCHO", bold: true, color: ACCENT2, size: 20 })] }),
  new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "SIGEP 360", bold: true, size: 72, color: "111111" })] }),
  new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Sistema Inteligente de Gestión para los Edificios Públicos", size: 26, color: "333333" })] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Programa de diagnóstico, prevención de patologías y mantenimiento de los Edificios Públicos", italics: true, size: 22, color: MUTED })] }),
  P("SIGEP 360 es la propuesta de implementación del programa de diagnóstico, prevención de patologías y mantenimiento de los Edificios Públicos solicitado para este concurso: ordena el diagnóstico (ISE, Historia Clínica Edilicia), sistematiza la prevención de patologías (mapa de riesgo, patologías activas, enfoque preventivo/predictivo) y rediseña el mantenimiento (flujo operativo, Orden de Trabajo, materiales, cuadrillas). Plan estratégico de transformación de la Jefatura de Obras Públicas, período 2027–2037.", { spacingAfter: 220 }),
  SimpleTable(
    ["Partido", "Dependencias relevadas", "Dotación operativa", "Horizonte"],
    [["Ayacucho, Buenos Aires", "≈ 71 edificios municipales", "15 trabajadores en 4 cuadrillas", "Inicio 2027 → consolidación 2037"]]
  ),
  Quote("\"De reparar edificios a gestionar patrimonio.\"", 26),
  PageBreakPara()
);

// ---------- TOC ----------
children.push(H1("Índice"));
[
  "01 · Diagnóstico actual", "02 · Concepto central", "03 · Arquitectura y pilares",
  "04 · Flujo operativo", "05 · Prevención, mapa y sustentabilidad", "06 · Personas, gobernanza y riesgos",
  "07 · Indicadores e Inteligencia Artificial", "08 · Una sola plataforma y hoja de ruta",
  "09 · Caso piloto: EMEAI", "10 · Anexos operativos", "11 · Objetivo final"
].forEach(t => children.push(new Paragraph({ text: t, spacing: { after: 60 } })));
children.push(PageBreakPara());

// ---------- 01 DIAGNÓSTICO ----------
children.push(H1("01 · Diagnóstico actual"));
children.push(P("El punto de partida real de Obras Públicas — es sobre esta base que se construye SIGEP 360, no sobre un escenario ideal.", { italic: true, color: MUTED }));
children.push(P("Obras Públicas gestiona el mantenimiento, reparación, mejora y planificación de los edificios y dependencias del Partido de Ayacucho: ≈71 dependencias municipales, un número que debe tratarse como dinámico, no como un padrón cerrado. La Planta Urbana aportada al proyecto se adopta como base cartográfica real para la localización territorial (ver capítulo 5)."));
children.push(P("La dotación operativa es de 15 trabajadores: un capataz, cuatro cuadrillas —dos de albañilería (2 + 3 agentes), una de electricidad (4) y una de plomería (3)— y dos agentes administrativos, en horario de 07:00 a 13:00, con vehículos, herramientas y maquinaria propios, dependientes de la Secretaría de Obras y Servicios Públicos. La oportunidad de mejora no es necesariamente equipar más, sino programar y medir mejor el uso de los recursos existentes."));
children.push(P("Los pedidos de reparación hoy entran por WhatsApp, teléfono, notas, expedientes o en persona. La multiplicidad de canales no es solo el problema: también lo es que no existe una puerta operativa única que consolide el pedido, su prioridad, responsable, materiales, tiempos y cierre. Sin eso, se dificulta construir estadísticas, comparar tiempos de respuesta, reconocer reincidencias y convertir el trabajo realizado en conocimiento institucional."));
children.push(P("El circuito de materiales existe, pero su trazabilidad es débil porque distintos usuarios pueden retirar elementos sin un circuito suficientemente controlado — esto afecta la confiabilidad del stock y dificulta preservar materiales de valor (ver BAMUR, capítulo 4)."));
children.push(P("Los problemas recurrentes son los esperables en un parque edilicio de esta escala sin mantenimiento preventivo sistemático: filtraciones y fallas de cubiertas, revoques en mal estado, problemas eléctricos, problemas en instalaciones sanitarias y mantenimiento general. Estas cinco familias serán los primeros campos de estandarización de SIGEP 360."));
children.push(P("Un punto importante a desarrollar en esta Jefatura es la consolidación de una política pública referida a la puesta en valor de Edificios Públicos Municipales que en lo cotidiano no se realiza debido al trajín diario no planificado."));
children.push(H3("Un caso real: la Biblioteca"));
children.push(P("Una intervención arbitraria y no evaluada por el personal competente, vinculada a una ampliación, derivó posteriormente en una solución provisoria e incómoda — se resolvió una necesidad puntual sin pasar por una evaluación técnica integral. No es un caso para personalizar responsabilidades: es el ejemplo exacto de por qué las decisiones edilicias relevantes necesitan evaluación técnica documentada antes de ejecutarse, y no una corrección después. Los responsables políticos, directores y usuarios cambian; el edificio permanece."));
children.push(H3("Diagnóstico síntesis"));
children.push(SimpleTable(["Situación actual", "Transformación SIGEP 360"], [
  ["Pedidos por múltiples vías", "Registro único mediante Orden de Trabajo"],
  ["Información distribuida", "Historia Clínica Edilicia"],
  ["Predominio reactivo", "Mantenimiento preventivo y predictivo"],
  ["Prioridad circunstancial", "Matriz técnica de prioridad"],
  ["Stock poco trazable", "BAMUR e inventario de materiales"],
  ["Consumos sin lectura integral", "Pasaporte energético y ambiental"],
  ["Conocimiento personal", "Memoria institucional"],
  ["Obras aisladas", "Plan Director 2027–2037"],
  ["Trabajo ejecutado", "Trabajo medido, evaluado y documentado"],
]));
children.push(Quote("El desafío no es la falta de trabajo. Es transformar todo el trabajo que ya se realiza en información capaz de mejorar el trabajo que todavía falta realizar.", 21));
children.push(PageBreakPara());

// ---------- 02 CONCEPTO ----------
children.push(H1("02 · Concepto central"));
children.push(P("SIGEP 360 no es, en primer lugar, una aplicación. Es un sistema de trabajo municipal — la plataforma digital es la herramienta que lo ejecuta.", { italic: true, color: MUTED }));
children.push(P("La transformación que propone es de modelo: de una gestión predominantemente reactiva a una gestión integral, preventiva, documentada y progresivamente predictiva del patrimonio edilicio municipal. No consiste en crear una estructura paralela ni en informatizar por informatizar: consiste en ordenar lo que ya existe y convertir cada intervención en información útil para la siguiente decisión."));
children.push(P("Propósito: que SIGEP 360 sea excelente por su alcance, creíble por su gradualidad y replicable por su método: un modelo que pueda incentivar procesos de modernización en otras áreas municipales.", { italic: true }));
children.push(H3("Objetivos estratégicos"));
children.push(SimpleTable(["Verbo", "Significa"], [
  ["Conocer", "Inventariar, georreferenciar y diagnosticar el patrimonio edilicio."],
  ["Prevenir", "Reducir progresivamente emergencias mediante mantenimiento programado."],
  ["Priorizar", "Asignar recursos según riesgo, criticidad, estado e impacto."],
  ["Optimizar", "Mejorar las capacidades de personal, materiales, equipos y presupuesto."],
  ["Transformar", "Mejorar desempeño energético, ambiental y funcional."],
  ["Valorar", "Capacitar, organizar y reconocer a las personas que ejecutan el trabajo."],
  ["Preservar", "Construir memoria técnica institucional y continuidad de criterios."],
  ["Replicar", "Desarrollar un método que pueda inspirar mejoras en otras áreas municipales."],
], [20, 80]));
children.push(H3("El giro conceptual"));
children.push(...Bullets([
  "De reparar edificios a gestionar patrimonio.",
  "De resolver urgencias a anticiparlas.",
  "De decisiones circunstanciales a decisiones técnicas documentadas.",
]));
children.push(Quote("\"La información pertenece al Municipio, no a una gestión. Cada acción deja capacidad instalada para la próxima.\"", 21));
children.push(PageBreakPara());

// ---------- 03 ARQUITECTURA Y PILARES ----------
children.push(H1("03 · Arquitectura y pilares"));
children.push(P("Siete niveles de información por edificio, y cuatro pilares que le dan sentido operativo a esos niveles.", { italic: true, color: MUTED }));
children.push(H3("Arquitectura del sistema, en 7 niveles"));
children.push(SimpleTable(["Nivel", "Contenido"], [
  ["1 · Identidad", "Código SIGEP, función, dirección, nomenclatura, superficie y ubicación GIS (Sistema de Información Geográfica)."],
  ["2 · Historia Clínica Edilicia", "Planos, fotografías, sistema constructivo, estructura, cubierta, instalaciones y antecedentes."],
  ["3 · Estado", "Inspecciones, patologías, ISE (Índice de Salud Edilicia) y criticidad funcional."],
  ["4 · Mantenimiento", "Rutinas, alertas, órdenes de trabajo y cierre documentado."],
  ["5 · Recursos", "Cuadrillas, horas, materiales, equipos y costos."],
  ["6 · Ambiente", "Electricidad, gas, agua, residuos, vegetación y potencial de mejora."],
  ["7 · Evolución", "Historial completo de intervenciones y resultados."],
], [28, 72]));
children.push(H3("Los cuatro pilares operativos"));
children.push(SimpleTable(["Pilar", "Descripción"], [
  ["01 · Inventario — Identidad digital por edificio", "Código SIGEP, ubicación, catastro, superficies, planos, fotos, instalaciones, responsables, costos, consumos e historial — visualizados también en un mapa GIS. Dinámico: se dan de alta, baja o modifican edificios."],
  ["02 · Historia Clínica — Cada edificio, un paciente", "Patología → diagnóstico → intervención → materiales → fotos → costo → resultado → control → próxima inspección. Dentro de 10 o 20 años se sabrá exactamente qué ocurrió en cada edificio."],
  ["03 · ISE (Índice de Salud Edilicia)", "Calificación 0–100, complementada con un factor de criticidad funcional. Ayuda a decidir; nunca reemplaza el criterio profesional."],
  ["04 · Priorización — Orden objetivo, decisión humana", "Urgencia, riesgo, ISE, criticidad funcional, antigüedad del reclamo, recursos y posibilidad de agrupar tareas. Las emergencias superan el orden normal automáticamente."],
], [30, 70]));
children.push(H3("Ponderación del ISE"));
children.push(SimpleTable(["Componente", "Peso"], [
  ["Estructura", "20%"], ["Cubiertas e impermeabilización", "15%"], ["Instalación eléctrica", "15%"],
  ["Instalaciones sanitarias", "10%"], ["Gas y climatización", "10%"], ["Fachadas y revoques", "10%"],
  ["Accesibilidad y seguridad", "10%"], ["Carpinterías y terminaciones", "5%"], ["Mantenimiento general", "5%"],
], [75, 25]));
children.push(P("Bandas: 80–100 Bueno · 60–79 Atención · 40–59 Prioritario · 0–39 Crítico.", { bold: true, spacingBefore: 100 }));
children.push(P("La prioridad final combina el ISE con la Criticidad Funcional, el riesgo para las personas, la continuidad del servicio, el costo de no intervenir y la oportunidad de ejecución: dos patologías iguales pueden recibir prioridades distintas según el uso del edificio. Ver un cálculo de ejemplo aplicado a EMEAI, con datos reales, en el capítulo 9."));
children.push(H3("Sistema de priorización, factor por factor"));
children.push(SimpleTable(["Factor", "Pregunta de gestión"], [
  ["Urgencia", "¿Cuánto puede esperar la intervención?"],
  ["Riesgo y seguridad", "¿Existe peligro para personas, bienes o instalaciones?"],
  ["Afectación del servicio", "¿Impide o limita el funcionamiento del edificio?"],
  ["Usuarios afectados", "¿A cuántas personas impacta?"],
  ["Estado / ISE", "¿El problema se inserta en un edificio ya deteriorado o crítico?"],
  ["Antigüedad del reclamo", "¿Cuánto tiempo lleva pendiente?"],
  ["Costo y disponibilidad", "¿Puede resolverse con recursos disponibles?"],
  ["Oportunidad de agrupamiento", "¿Puede combinarse con otras tareas cercanas o del mismo rubro?"],
  ["Materiales disponibles", "¿Existe stock, BAMUR o compra ya preparada?"],
], [35, 65]));
children.push(P("El puntaje es una ayuda a la decisión, no un reemplazo del criterio profesional: una emergencia de seguridad puede escalarse inmediatamente aunque su puntaje ordinario no haya sido completado."));
children.push(PageBreakPara());

// ---------- 04 FLUJO ----------
children.push(H1("04 · Flujo operativo"));
children.push(P("De la solicitud a la Historia Clínica, pasando por materiales, cuadrillas y depósito — un único circuito.", { italic: true, color: MUTED }));
children.push(H3("Solicitud → Orden de Trabajo"));
children.push(Flow(["Solicitud", "Registro", "Evaluación técnica", "Prioridad", "Autorización", "Orden de Trabajo", "Materiales", "Programación", "Cuadrilla", "Ejecución", "Control / verificación", "Cierre", "Historia Clínica"]));
children.push(P("Cada solicitud incluye edificio, solicitante, fecha, sector, descripción, fotografías y tipo de necesidad. Sin importar el canal de entrada, existe un único registro SIGEP. Cada Orden de Trabajo lleva número, edificio, sector, problema, prioridad, fotos, cuadrilla, responsable, materiales, horas, fecha, resultado y observaciones."));
children.push(P("Al registrarse, el sistema clasifica automáticamente cada solicitud por rubro —albañilería, electricidad, plomería, pintura, y los que se agreguen— y calcula su prioridad en función de urgencia, riesgo, afectación del servicio y antigüedad del reclamo (además de ISE, criticidad funcional y recursos disponibles, ver capítulo 3). Esa prioridad calculada alimenta directamente, sin paso manual intermedio, la agenda de cada cuadrilla y el listado consolidado de materiales que se arma más abajo."));
children.push(H3("Programación inteligente de cuadrillas"));
children.push(P("Agendas diarias y semanales que resuelven qué hacer, cuándo, quién, dónde y con qué materiales — agrupando tareas por prioridad, cercanía geográfica, rubro, edificio, herramientas y disponibilidad, para reducir viajes y tiempos improductivos. Determinadas intervenciones pueden programarse fuera del horario habitual de funcionamiento del edificio cuando sea técnicamente conveniente. El tablero diferencia, como mínimo, seis estados: Pendiente de evaluación, Pendiente de autorización, Pendiente de materiales, Programada, En ejecución y Finalizada — una tarea no se incorpora al cronograma como \"lista para ejecutar\" si necesita materiales que aún no están disponibles."));
children.push(H3("Compras, depósito y BAMUR"));
children.push(Flow(["OT", "Necesidad", "Stock municipal", "BAMUR", "Compra si es necesaria", "Comparación de proveedores", "Autorización", "Retiro / entrega", "Ejecución"]));
children.push(P("Antes de comprar: primero se verifica si hay material en depósito, después si hay material recuperado técnicamente reutilizable (BAMUR), y recién entonces se compra lo faltante. El depósito digital registra stock, ingresos, egresos, reservas, destino, responsable del retiro, OT asociada y edificio de destino — con identificación por QR o código. Objetivo: que una cuadrilla nunca llegue a una tarea y descubra en obra que le faltan materiales."));
children.push(H3("Base de proveedores y comparación previa"));
children.push(P("Los corralones y proveedores habituales del Municipio quedan cargados en una base común, y Obras Públicas compara alternativas antes de autorizar el retiro — no después. Cuando una OT o una tarea programada requiere materiales, el responsable carga las cantidades previstas (por ejemplo: 20 bolsas de cemento, 10 de cal y 2 m³ de arena), y esa necesidad queda asociada al edificio, la intervención, la cuadrilla y la fecha prevista."));
children.push(SimpleTable(["Dato comparado", "Finalidad"], [
  ["Precio unitario y total", "Comparar económicamente la necesidad completa."],
  ["Disponibilidad", "Evitar seleccionar una oferta que no pueda abastecer la tarea."],
  ["Vigencia del precio", "Evitar autorizar una compra con un presupuesto ya vencido."],
  ["Marca / calidad", "Evitar comparar productos técnicamente diferentes como si fueran iguales."],
  ["Flete o condición de retiro", "Conocer el costo y la logística real."],
  ["Plazo de entrega", "Coordinar la compra con la programación de la cuadrilla."],
  ["Condición de pago", "Aportar información a la autorización administrativa."],
], [35, 65]));
children.push(P("La vigencia del precio y el retiro de materiales sin un precio estipulado de antemano son los tipos de errores administrativos que SIGEP 360 debe impedir por diseño, no corregir después. Cada movimiento queda relacionado con solicitante, autorización, proveedor, precio, fecha, edificio, OT, persona que retira y destino final — esto permite conocer cuánto material consume cada edificio o tipo de reparación y construir mejores presupuestos futuros."));
children.push(P("La base de datos cuenta con un listado de precios que cada casa proveedora de materiales inscripta provee —con acceso limitado para actualizar su propio catálogo y precios— para poder hacer comparativas inmediatas, ya con un precio estipulado por los comercios, y generar el presupuesto antes del retiro."));
children.push(H3("BAMUR (Banco Municipal de Materiales Recuperados)"));
children.push(P("Inventario de materiales reutilizables (madera, pisos, puertas, ventanas, chapas, sanitarios, adoquines, mobiliario, elementos históricos), cada uno con código, origen, cantidad, estado, fotos y destino posterior. El caso real: en una intervención sobre el edificio original de la Escuela de Música se recuperó piso de pinotea en buen estado, que fue separado y resguardado para futuras reutilizaciones. Sin un registro como BAMUR, ese material se pierde de la memoria institucional en cuanto termina la obra. Con él, queda disponible para la próxima. Es economía circular aplicada a la gestión municipal — ver el caso documentado en el capítulo 9."));
children.push(H3("Ejemplo de funcionamiento integrado"));
children.push(P("Un recorrido completo, de punta a punta, usando un escenario real de EMEAI:"));
children.push(...Roadmap([
  ["1 · Solicitud", "EMEAI informa una filtración de cubierta y adjunta fotografías. (En el archivo real esto ya ocurrió: la \"Reparación Cubierta\" de 2013, $136.980, a cargo de Barrios Salvador — historia clínica real en el capítulo 9.)"],
  ["2 · Registro", "SIGEP identifica automáticamente el edificio y crea el pedido."],
  ["3 · Evaluación", "Obras Públicas confirma que corresponde a cubierta/albañilería y evalúa riesgo."],
  ["4 · Prioridad", "El sistema pondera urgencia, afectación del servicio, usuarios, ISE y antigüedad."],
  ["5 · Materiales", "Se determinan membrana, selladores y otros insumos; primero se consulta depósito/BAMUR y luego proveedores."],
  ["6 · Compra", "Se comparan precios y disponibilidad; la opción seleccionada continúa por el circuito de autorización municipal."],
  ["7 · Programación", "La OT se asigna a una cuadrilla y fecha en la que materiales y personal estarán disponibles."],
  ["8 · Ejecución", "La cuadrilla recibe en el celular tarea, ubicación, fotos, materiales y observaciones."],
  ["9 · Cierre", "Se registran horas, materiales reales y fotografías antes/después."],
  ["10 · Aprendizaje", "La intervención se incorpora a la Historia Clínica Edilicia y alimenta costos, estadísticas y mantenimiento futuro."],
]));
children.push(Quote("EL EDIFICIO SOLICITA → EL SISTEMA REGISTRA → OBRAS PÚBLICAS EVALÚA → LA PRIORIDAD ORDENA → LOS MATERIALES SE PREPARAN → LA CUADRILLA EJECUTA → EL SISTEMA APRENDE", 18));
children.push(H3("Qué resuelve, en concreto, este circuito"));
children.push(P("Menos pedidos perdidos o sin seguimiento. Prioridades técnicamente justificables. Mejor aprovechamiento de las cuatro cuadrillas. Menos viajes innecesarios para retirar o consultar materiales. Compras con información previa y comparación trazable. Costos históricos por edificio y tipo de intervención. En síntesis: pasar de resolver reclamos aislados a gestionar Obras Públicas de manera planificada, eficiente y trazable."));
children.push(PageBreakPara());

// ---------- 05 PREVENCION ----------
children.push(H1("05 · Prevención, mapa y sustentabilidad"));
children.push(P("El mantenimiento preventivo, la georreferenciación real, el acceso por QR y la agenda ambiental — la parte del sistema que evita que se repita el ciclo de reparar siempre lo mismo.", { italic: true, color: MUTED }));
children.push(H3("Calendario de mantenimiento preventivo"));
children.push(SimpleTable(["Período", "Frente de trabajo"], [
  ["Enero–marzo", "Cubiertas, canaletas y desagües"],
  ["Marzo–abril", "Calefacción y gas"],
  ["Mayo–junio", "Limpieza de canaletas post otoño"],
  ["Septiembre", "Sanitarios y tanques"],
], [30, 70]));
children.push(P("Cada edificio tiene sus propias inspecciones y alertas dentro del sistema."));
children.push(H3("Programa piloto 2027 — Mapa de Riesgo de Cubiertas Municipales"));
children.push(P("Se releva cada cubierta del parque edilicio y se clasifica en una de cuatro bandas, programando acciones antes de los períodos críticos: Correcta · Observar · Intervenir · Urgente."));
children.push(H3("Mapa SIGEP 360 y QR por edificio"));
children.push(P("La cartografía de base es real: la Planta Urbana aportada por el Municipio, no un dibujo inventado. Incluye las 71 manzanas y barrios que la componen (Santa Teresita, El Embarcadero, La Terminal, El Tropezón, El Progreso, Martín Fierro, Padre Gallo, 25 de Mayo, La Perla, El Estadio, Jardín, La Feria, Villa Aurora, Bellas Artes, FONAVI 1 y 2, entre otros), con el Hospital y Obras Públicas ya identificados sobre el propio plano oficial."));
children.push(P("Sobre esta base, el mapa SIGEP 360 permitirá filtrar los edificios por función y, en una segunda capa, por estado técnico (ISE), prioridad, OT abiertas, alertas e intervenciones — una cartografía viva que se actualiza junto con el inventario, no un dibujo estático. Cada edificio tiene además su propio código QR (Código de Respuesta Rápida): al escanearlo, según el rol del usuario, se puede consultar información, generar una solicitud, ver las OT, registrar una inspección o actualizar trabajos."));
children.push(H3("SIGEP Verde y Edificios Vivos"));
children.push(P("Cada edificio incorpora progresivamente un Pasaporte Energético y Ambiental: electricidad, gas, agua, superficie, costo anual y consumo específico por m². Las medidas se priorizan por relación costo-beneficio y factibilidad: LED, reducción de pérdidas, mejoras de envolvente, protecciones solares, aislaciones, automatización, solar térmica, fotovoltaica y, donde un estudio de viabilidad lo justifique, bombas de calor o geotermia. Se suman acciones de bajo costo y alto valor ambiental: captación de agua de lluvia, compostaje, reducción de residuos, forestación estratégica y especies nativas — y, en dependencias con espacio adecuado, pequeños sectores de aromáticas (romero, burrito, lavanda) de uso responsable y bajo mantenimiento (Edificios Vivos)."));
children.push(...Mejora("e", "Financiamiento externo para SIGEP Verde", "La fase 2031–2033 (energías renovables, eficiencia energética) no tiene por qué salir solo de rentas generales: existen líneas provinciales y nacionales de eficiencia energética y energía renovable municipal a las que Ayacucho puede postularse. Incluir esa gestión de financiamiento como tarea explícita de la Jefatura, no como una esperanza tácita."));
children.push(PageBreakPara());

// ---------- 06 GOBERNANZA ----------
children.push(H1("06 · Personas, gobernanza y riesgos"));
children.push(P("SIGEP 360 no es un mecanismo de vigilancia del trabajador, y no puede depender de la buena voluntad de una sola gestión para sobrevivir. Son los puntos que un jurado técnico va a mirar con más atención.", { italic: true, color: MUTED }));
children.push(H3("Personal, capacitación e incentivos"));
children.push(P("La tecnología debe reducir improvisación y tareas administrativas innecesarias, no vigilar al trabajador. Se propone un Programa de Reconocimiento por Objetivos de Equipo —sujeto a normativa laboral, disponibilidad presupuestaria y autorización competente— que puede considerar plazo, calidad, seguridad, orden, uso responsable de materiales, documentación y ausencia de retrabajos. Los reconocimientos podrán combinar incentivos económicos cuando legalmente sean posibles con capacitación, certificaciones y reconocimiento institucional; el enfoque es colectivo, para evitar competencia improductiva."));
children.push(H3("Autonomía técnica y continuidad institucional"));
children.push(P("Las intervenciones que afecten estructura, accesibilidad, instalaciones, seguridad, patrimonio o funcionamiento cuentan con evaluación técnica previa de Obras Públicas. Los responsables de cada dependencia conservan la capacidad de plantear necesidades, pero la solución edilicia se integra a criterios técnicos y al historial del edificio (el caso de la Biblioteca, capítulo 1, es exactamente lo que este principio busca evitar). La información, los planos, los diagnósticos y las decisiones técnicas permanecen como patrimonio del Municipio más allá de quién ocupe temporalmente cada función — pero \"la información pertenece al Municipio, no a una gestión\" es una frase que necesita un instrumento concreto detrás:"));
children.push(...Mejora("a", "Ordenanza de creación de SIGEP 360", "Proyecto de ordenanza breve que declare a SIGEP 360 sistema de gestión patrimonial obligatorio de la Jefatura de Obras Públicas, establezca que los datos cargados son propiedad municipal (no de un proveedor ni de una gestión) y fije una continuidad presupuestaria mínima para su operación. Es la única garantía real, más allá del discurso, de que el sistema sobrevive a un cambio de gobierno."));
children.push(H3("Riesgos y medidas de control"));
children.push(SimpleTable(["Riesgo", "Respuesta propuesta"], [
  ["Resistencia al cambio", "Implementación gradual, capacitación y participación de cuadrillas."],
  ["Datos incompletos", "Campos mínimos obligatorios y revisión periódica."],
  ["Sistema demasiado complejo", "Comenzar simple; incorporar funciones solo cuando agreguen valor."],
  ["Pérdida de continuidad", "Procedimientos institucionales, roles definidos y respaldo de información."],
  ["Incentivos mal diseñados", "Objetivos colectivos, control de calidad y sujeción a normativa."],
  ["Tecnología sin uso real", "Priorizar problemas concretos y medir adopción."],
  ["Decisiones políticas sin evaluación técnica", "Informe técnico previo para intervenciones relevantes."],
], [35, 65]));
children.push(PageBreakPara());

// ---------- 07 INDICADORES ----------
children.push(H1("07 · Indicadores e Inteligencia Artificial"));
children.push(P("Lo que el Dashboard mide, y el rol —siempre asistente, nunca reemplazo— de la IA dentro del sistema.", { italic: true, color: MUTED }));
children.push(SimpleTable(["Indicador", "Qué permite medir"], [
  ["% de edificios con ficha completa", "Cobertura del sistema"],
  ["% de edificios inspeccionados en plazo", "Disciplina preventiva"],
  ["% OT preventivas / total OT", "Cambio reactivo → preventivo"],
  ["Tiempo medio de respuesta por prioridad", "Capacidad operativa"],
  ["% de OT cerradas con documentación completa", "Calidad de información"],
  ["Reincidencia de fallas por edificio", "Calidad de solución"],
  ["Costo de mantenimiento por m²", "Eficiencia económica"],
  ["Consumo energético por m²", "Eficiencia energética"],
  ["% materiales recuperados con trazabilidad", "Economía circular"],
  ["% cumplimiento del plan anual", "Gestión"],
  ["Capacitación por agente/año", "Desarrollo de personas"],
  ["Satisfacción interna de áreas usuarias", "Calidad del servicio"],
], [55, 45]));
children.push(...Mejora("k", "Costo en valor real, no en pesos nominales acumulados", "El propio archivo histórico de Obras Públicas (2013–2023) lo demuestra: sumar el monto de una reparación de 2013 con el de una de 2023 no da una cifra financieramente significativa, por la inflación acumulada en el período. \"Costo de mantenimiento por m²\" debe expresarse en una unidad de valor real y no en pesos históricos sumados sin ajustar. Es un detalle técnico, pero es el tipo de detalle que un jurado con formación económica nota inmediatamente."));
children.push(H3("Inteligencia Artificial: asistente, no reemplazo"));
children.push(P("La IA se incorpora de forma gradual como herramienta de apoyo, nunca como sustituto de la inspección y responsabilidad profesional. Puede ayudar a ordenar fotografías, detectar patrones, comparar antecedentes, sugerir reincidencias y priorizar revisiones. Ejemplo: si un edificio acumula varias reparaciones similares de cubierta en pocos años, el sistema puede advertir la repetición y sugerir evaluar una solución integral en lugar de continuar con parches aislados. Toda recomendación generada por herramientas automáticas debe ser validada por personal técnico antes de transformarse en una decisión de obra."));
children.push(...Mejora("f", "Tablero público de gobierno abierto", "Una versión pública y de solo lectura del Dashboard —ISE por edificio, OT en curso, sin datos sensibles— sobre la misma base de datos, con otra interfaz. Convierte un argumento de transparencia en un entregable concreto, sin desarrollo adicional relevante sobre la arquitectura ya planteada."));
children.push(...Mejora("h", "ROI cuantificado del enfoque preventivo", "Según referencias del sector, una intervención preventiva cuesta entre 3 y 5 veces menos que la reparación reactiva de la misma falla agravada. Vale citarlo, con esa prudencia, como argumento económico del cambio de modelo — el \"% OT preventivas / total OT\" es, en definitiva, un indicador de ahorro."));
children.push(PageBreakPara());

// ---------- 08 PLATAFORMA ----------
children.push(H1("08 · Una sola plataforma y hoja de ruta"));
children.push(P("Una decisión conceptual (una sola base de datos, distintas interfaces), una arquitectura tecnológica deliberadamente liviana, y un camino de diez años que empieza con un inicio chico y real.", { italic: true, color: MUTED }));
children.push(H3("Una plataforma, distintas interfaces"));
children.push(P("No se desarrollan aplicaciones independientes. Una única base de datos central, con interfaces distintas según el usuario: Jefe de Obras Públicas (mapa, patrimonio, ISE, prioridades, OT, cuadrillas, materiales, indicadores), Responsable de edificio (solicitud, fotos, seguimiento), Cuadrilla (trabajos del día, ubicación, instrucciones, materiales, cierre), Depósito (stock, reservas, BAMUR), Compras (necesidades, presupuestos, proveedores), Secretaría (autorizaciones, presupuesto, tablero ejecutivo) y, más adelante, Proveedor (actualización limitada de catálogo/precios)."));
children.push(H3("Presupuesto e implementación"));
children.push(P("El presupuesto de Obras Públicas es organizado y autorizado por la Secretaría — SIGEP 360 no propone una autonomía presupuestaria ajena a la estructura vigente. Propone mejorar la calidad de la información con la que se formula, solicita, autoriza y controla el gasto. La implementación inicial privilegia herramientas de bajo costo: inventario, procedimientos, formularios digitales, cartografía, QR y tableros; las inversiones mayores —sensores, renovables, software específico— se justifican mediante proyectos, ahorro esperado, criticidad y disponibilidad presupuestaria."));
children.push(...Mejora("d", "Costos por fase, en orden de magnitud", "El MVP (Producto Mínimo Viable) 2027 se construye sobre un stack de bajo costo —PWA más base de datos abierta, sin licenciamiento por usuario— precisamente para no atar al Municipio a un proveedor caro desde el día uno. Un jurado evalúa viabilidad económica tanto como idea."));
children.push(H3("MVP 2027"));
children.push(P("Pequeño, pero funcionando de verdad. No se intenta construir todo SIGEP 360 al mismo tiempo."));
children.push(...Bullets([
  "1. Inventario de las 71 dependencias", "2. Ficha digital", "3. Planos / fotos / documentos",
  "4. Solicitudes (SIGEP + WhatsApp)", "5. Órdenes de Trabajo", "6. Priorización",
  "7. Agenda de cuadrillas", "8. Materiales / depósito básico", "9. QR", "10. Dashboard básico",
]));
children.push(...Mejora("c", "Sprint de diagnóstico \"Año 0\"", "Antes de que el MVP esté operativo, un relevamiento acotado (fines de 2026 / inicio de 2027) calcula el ISE inicial de los 71 edificios. Es barato —una planilla y una recorrida— y resuelve el problema de fondo: hoy no existe una línea de base contra la cual medir, en 2031, si el sistema efectivamente mejoró algo."));
children.push(H3("Hoja de ruta 2027–2037"));
children.push(...Roadmap([
  ["2027 — Ordenar", "Inventario dinámico, codificación, mapa, fichas, relevamiento inicial, piloto de cubiertas y Orden de Trabajo. Incluye el sprint de diagnóstico Año 0."],
  ["2028 — Estandarizar", "ISE, criticidad, protocolos preventivos, QR, planificación sistemática de cuadrillas."],
  ["2029–2030 — Medir", "Pasaporte energético, indicadores, BAMUR, consumos y primeros proyectos de eficiencia."],
  ["2031–2033 — Integrar", "Tablero avanzado, sensores donde aporten valor, automatización, proyectos ambientales y energéticos piloto, con financiamiento externo gestionado."],
  ["2034–2037 — Anticipar", "Analítica histórica, asistencia con IA, mantenimiento predictivo y consolidación del Plan Director."],
]));
children.push(PageBreakPara());

// ---------- 09 EMEAI ----------
children.push(H1("09 · Caso piloto: EMEAI (Escuela Municipal de Enseñanza Artística e Idiomas)"));
children.push(P("Antes Escuela de Música — no es un ejemplo hipotético: es el edificio con el que se probó el concepto, con material real del archivo municipal.", { italic: true, color: MUTED }));
children.push(P("El Municipio ya produjo, durante más de una década, planos, fotografías y conocimiento técnico sobre EMEAI: relevamiento fotográfico desde 2013, plano de obra existente actualizado a 2026, y el registro de 25 intervenciones reales en el archivo de compras de Obras Públicas. El problema nunca fue la falta de información — fue que esa información vive dispersa en carpetas, discos y memorias individuales. SIGEP 360 convierte años de trabajo en memoria institucional, y la vuelve información para decidir qué hacer mañana."));
children.push(SimpleTable(["Dato", "Valor"], [
  ["m² construidos (cubierta + semicubierta)", "1.150,73"],
  ["m² de terreno (parcelas 10 y 11)", "1.641,87"],
  ["Intervenciones documentadas, 2013–2023", "25"],
  ["ISE de ejemplo (ilustrativo)", "≈72 — banda \"Atención\""],
], [70, 30]));
children.push(P("El plano de obra existente identifica aulas, Dirección, Preceptoría, Secretaría, depósitos, aula de percusión, estudio de grabación, Sala de Presentaciones, sanitarios, patios y salidas de emergencia — la base exacta sobre la que se construyó el plano interactivo del piloto: tocar un sector del plano y ver su historia real, incluidos los sectores que no tienen intervenciones registradas, que son tan reveladores como los que sí."));
children.push(H3("Piloto interactivo completo (online)"));
children.push(P("Plano clickeable, línea de tiempo fotográfica 2013–2026, historia clínica real, ISE de ejemplo, caso BAMUR, trayectoria institucional y cálculo de energía sustentable (SIGEP Verde):"));
children.push(new Paragraph({ children: [new TextRun({ text: "https://claude.ai/artifact/U6BukbG2iSU7AodF3CCBdX", color: ACCENT2, underline: {} })], spacing: { after: 160 } }));
children.push(PageBreakPara());

// ---------- 10 ANEXOS ----------
children.push(H1("10 · Anexos operativos"));
children.push(P("Dos plantillas de referencia — el contenido mínimo que va a pedir el sistema, independientemente de la pantalla en la que termine implementado.", { italic: true, color: MUTED }));
children.push(H3("Anexo A — Modelo de Ficha SIGEP"));
children.push(P("Código SIGEP · Dependencia · Función · Dirección / ubicación · Nomenclatura / partida · Superficie · Responsable de uso · Año / antigüedad estimada · Sistema constructivo · Estructura · Cubierta · Instalación eléctrica · Instalación sanitaria · Gas / climatización · Accesibilidad · Seguridad · ISE · Criticidad funcional · Última inspección · Próxima inspección · OT abiertas · Consumos · Fotografías / planos"));
children.push(H3("Anexo B — Modelo de Orden de Trabajo"));
children.push(P("N.° OT · Fecha y hora de ingreso · Dependencia · Solicitante / canal · Descripción · Fotografías · Especialidad · Prioridad · Evaluación técnica · Autorización · Cuadrilla asignada · Fecha programada · Horario conveniente · Materiales previstos · Trabajo ejecutado · Horas utilizadas · Materiales utilizados · Control final · Fotos antes/después · Próxima acción · Fecha de cierre"));
children.push(H3("Anexo C — Fuentes de trabajo utilizadas"));
children.push(P("Inventario de dependencias municipales aportado para el proyecto (base inicial de 71 dependencias, sujeto a actualización). Planta Urbana 2024 de Ayacucho, aportada como base cartográfica (capítulo 5). Documento \"Pautas y recomendaciones generales para establecer un programa de trabajos y mantenimiento...\" aportado como antecedente conceptual. Información operativa suministrada por la Jefatura: estructura de cuadrillas, horario, circuito de pedidos, presupuesto, depósito, equipamiento, patologías recurrentes y criterios de gestión. A esto se suma, para el caso piloto EMEAI (capítulo 9): el plano de obra existente, el archivo fotográfico municipal 2013–2023 y el registro real de órdenes de compra de Obras Públicas."));
children.push(P("Nota: los indicadores, ponderaciones del ISE, circuitos y etapas de este documento son propuestas de diseño de SIGEP 360 y deberán validarse durante la implementación.", { italic: true, color: MUTED, size: 18 }));
children.push(PageBreakPara());

// ---------- 11 OBJETIVO ----------
children.push(H1("11 · Objetivo final"));
children.push(P("SIGEP 360 busca que Obras Públicas deje de ser, exclusivamente, el área que responde cuando algo se rompe. Debe convertirse en el área municipal que conoce, diagnostica, prioriza, planifica, presupuesta, programa, ejecuta, controla, documenta, mide, aprende y anticipa."));
children.push(P("El objetivo no es digitalizar el desorden. Es rediseñar primero el sistema de trabajo, y usar la tecnología para hacerlo posible. Técnicamente sólido. Económicamente realizable. Escalable. Fácil de usar. Sostenible en el tiempo. Independiente de los cambios de gestión. Replicable por otras áreas municipales y otros municipios."));
children.push(H3("Resultado esperado al 2037"));
children.push(...Bullets([
  "100% del patrimonio incorporado a un inventario dinámico.",
  "Historial técnico disponible para cada dependencia.",
  "Mayor proporción de mantenimiento preventivo y menor dependencia de emergencias.",
  "Prioridades justificadas mediante criterios objetivos.",
  "Mejor trazabilidad de materiales y reutilización.",
  "Información energética para orientar inversiones.",
  "Cuadrillas con planificación, objetivos y reconocimiento.",
  "Decisiones edilicias documentadas y técnicamente respaldadas.",
  "Indicadores que permitan demostrar resultados y corregir desvíos.",
  "Un modelo de gestión replicable en otras áreas municipales.",
]));
children.push(Quote("El éxito de SIGEP 360 no se medirá solamente por cuántas obras se ejecuten, sino por cuánto conocimiento, capacidad preventiva y orden institucional quede instalado para quienes continúen gestionando el patrimonio municipal.", 20));
children.push(Quote("\"De reparar edificios a gestionar patrimonio.\"", 26));
children.push(new Paragraph({
  spacing: { before: 400 },
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: "SIGEP 360 — Sistema Inteligente de Gestión del Patrimonio Edilicio Municipal · Plan estratégico 2027–2037 · Municipalidad de Ayacucho.", italics: true, color: MUTED, size: 18 })],
}));

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Calibri", size: 22 } },
    },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 34, bold: true, color: "111111", font: "Calibri" }, paragraph: { spacing: { before: 400, after: 200 } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 26, bold: true, color: ACCENT, font: "Calibri" } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 23, bold: true, color: "333333", font: "Calibri" } },
    ],
  },
  sections: [{
    properties: { page: { margin: { top: 1000, bottom: 1000, left: 1100, right: 1100 } } },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  const out = "D:\\Usuario\\Escritorio\\proyectos Claude\\sigep-360\\SIGEP_360_Dossier.docx";
  fs.writeFileSync(out, buf);
  console.log("OK ->", out, buf.length, "bytes");
});
