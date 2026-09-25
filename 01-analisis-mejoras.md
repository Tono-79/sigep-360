# SIGEP 360 — Análisis y mejoras propuestas

Análisis del plan original (`00-plan-original.md`) de cara al concurso de Jefatura de Obras Públicas de la Municipalidad de Ayacucho, con foco en fortalezas a explotar y mejoras concretas a incorporar.

## Fortalezas a preservar y destacar en la presentación

- **El giro conceptual (reactivo → preventivo → predictivo)** es el verdadero producto, no el software. Separa "otro sistema de tickets" de "un rediseño del área". Debe ser la columna vertebral del discurso.
- **ISE (Índice de Salud Edilicia)**: número único, ponderación transparente (suma 100%), fácil de explicar a un jurado no técnico en 30 segundos.
- **Historia Clínica Edilicia**: metáfora médica memorable, se vende sola en una presentación oral. Enganche perfecto con el caso EMEAI (Escuela Municipal de Enseñanza Artística e Idiomas).
- **BAMUR (Banco Municipal de Materiales Recuperados) con el caso real de la pinotea**: el mejor argumento del proyecto — un ejemplo concreto y verificable vale más que diez páginas de conceptos. Debe aparecer en los primeros minutos de cualquier presentación, no enterrado en el punto 10.
- **MVP (Producto Mínimo Viable) 2027 acotado + hoja de ruta a 10 años**: demuestra la diferencia entre "visión" y "plan de ejecución".
- **"La información pertenece al Municipio, no a una gestión"**: la defensa natural contra la objeción política más obvia ("¿y si cambia el intendente?"), pero necesita mecanismo concreto (ver abajo).

## Huecos detectados

1. Sin ningún número de costo, ni siquiera un orden de magnitud para el MVP 2027.
2. "Independiente de los cambios de gestión" es una aspiración sin instrumento legal.
3. Nada sobre protección de datos personales (legajos de los 15 trabajadores, fotos de escuelas con menores, domicilios).
4. No hay línea de base: el ISE promedio municipal hoy no existe como dato, así que no se podrá demostrar mejora futura sin un diagnóstico inicial.
5. Riesgo de adopción de las cuadrillas abordado solo con buenas intenciones, sin mecanismo concreto de onboarding.
6. Conectividad: probablemente varios de los 71 edificios están en zona rural sin buena señal; falta modo offline en la PWA (Aplicación Web Progresiva).
7. No se menciona financiamiento externo, en particular para SIGEP Verde (líneas provinciales/nacionales de eficiencia energética existen).

## Mejoras concretas a incorporar

- **(a) Ordenanza de creación de SIGEP 360**: proyecto de ordenanza breve que declare el sistema obligatorio, defina propiedad municipal de los datos y fije continuidad presupuestaria mínima. Es lo único que blinda el proyecto contra el cambio de gestión.
- ~~(b) Comité de Continuidad~~ — **retirada a pedido del usuario** (comité de seguimiento trimestral con Concejo Deliberante, Secretaría y referente técnico). Ya no figura en el dossier, capítulo 6.
- **(c) Sprint de diagnóstico "Año 0"** (fines 2026/inicio 2027): relevar el ISE inicial de los 71 edificios antes de que el sistema esté operativo — barato, y da la línea de base que hoy falta.
- **(d) Marco de costos por fases** (aunque sea en órdenes de magnitud bajo/medio/alto): MVP 2027 con stack de bajo costo (PWA + base de datos abierta, sin licencias por usuario), para mostrar que no se ata al Municipio a un proveedor caro.
- **(e) Financiamiento externo para SIGEP Verde**: citar líneas provinciales/nacionales de eficiencia energética y energías renovables municipales como fuente de fondeo de la fase 2031-2033.
- **(f) Tablero público simplificado (gobierno abierto)**: versión pública de solo lectura del Dashboard (ISE por edificio, OT (Orden de Trabajo) en curso, sin datos sensibles) — mismo backend, otra interfaz. Argumento fuerte de transparencia para un concurso público.
- **(g) Equidad territorial como indicador**: Ayacucho tiene zona rural extensa; agregar al Dashboard un indicador de distribución geográfica de la inversión evita que el sistema termine priorizando siempre el centro urbano.
- **(h) ROI cuantificado del enfoque preventivo**: la literatura de mantenimiento edilicio sostiene que una intervención preventiva cuesta entre 3 y 5 veces menos que la reparación reactiva de la misma falla agravada — vale citarlo (con prudencia, "según referencias del sector") como argumento económico del cambio de modelo.
- **(i) Modo offline en la PWA**: para cuadrillas en edificios sin buena señal, con sincronización diferida.
- **(j) Onboarding concreto de las cuadrillas**: "referente digital" por cuadrilla, capacitación práctica antes de cortar el canal informal, y WhatsApp como canal de entrada válido desde el día uno (no como "etapa posterior") para no perder pedidos durante la transición.

## Módulo de gestión de trabajos, materiales y proveedores (aporte del usuario)

El usuario acercó una síntesis propia de este módulo, ya integrada al dossier (capítulo 4 — Flujo operativo):

- **Clasificación automática por rubro**: cada solicitud se etiqueta sola (albañilería, electricidad, plomería, pintura, etc.) al ingresar.
- **Prioridad calculada** según urgencia, riesgo, afectación del servicio y antigüedad del reclamo, que alimenta directamente la agenda de cuadrillas y el listado consolidado de materiales — sin paso manual intermedio.
- **Vigencia del precio** como campo explícito de la base de proveedores (no solo "fecha del precio"): evita autorizar compras con presupuestos ya vencidos.
- **Circuito integrado explícito**: Solicitud → Prioridad → Cuadrilla → Materiales → Comparación de proveedores → Autorización → Retiro/entrega → Ejecución → Verificación.
- Síntesis del objetivo: "pasar de resolver reclamos aislados a gestionar Obras Públicas de manera planificada, eficiente y trazable" — incorporada como callout de cierre del capítulo 4.

## Fusión con la versión más desarrollada del usuario (SIGEP_360_.pdf)

El usuario compartió un PDF que resultó ser una versión bastante más completa del plan (probablemente trabajada en paralelo en su proyecto de ChatGPT). Se comparó contra este dossier y se incorporó todo lo que esa versión tenía y el dossier no:

- Diagnóstico más matizado (por qué la multiplicidad de canales no es en sí el problema; gestión de materiales con trazabilidad débil).
- Marco de "Objetivos estratégicos" en 8 verbos (Conocer–Prevenir–Priorizar–Optimizar–Transformar–Valorar–Preservar–Replicar).
- Arquitectura del sistema en 7 niveles (Identidad, Historia Clínica, Estado, Mantenimiento, Recursos, Ambiente, Evolución).
- Caso real de la Biblioteca (intervención de accesibilidad que derivó en una solución provisoria incómoda) como ejemplo de aprendizaje institucional, distinto de EMEAI.
- Mapa oficial real de Ayacucho (Planta Urbana 2024, aportada por la Secretaría de Obras y Servicios Públicos) en reemplazo del mosaico aproximado de OpenStreetMap.
- Tabla de riesgos y medidas de control.
- Módulo de compras completo (tabla de comparación de precios, flujo de materiales) y sistema de priorización con "pregunta de gestión" por factor.
- Ejemplo de funcionamiento integrado en 10 pasos, cruzado con el dato real de la reparación de cubierta de EMEAI en 2013.
- Anexos operativos: modelo de Ficha SIGEP y modelo de Orden de Trabajo.
- Piloto adicional "Edificio de alto consumo".
- Hoja de ruta con verbos más disciplinados (Ordenar/Estandarizar/Medir/Integrar/Anticipar).

Lo que el dossier tenía y el PDF del usuario no (se conservó): la integración real de EMEAI (fotos, historia clínica, trayectoria, ISE de ejemplo), y las mejoras (c), (f), (g), (h), (k) que no estaban en ninguna de las dos versiones originales.

## Estado de incorporación

Todas las mejoras de este documento, el módulo de compras/solicitudes, y la fusión con el PDF del usuario ya están incorporados al dossier final del proyecto (`dossier/index.html`, publicado como artifact), junto con el caso EMEAI ilustrado con material real (fotos históricas 2013-2023, plano oficial, datos reales de obras del Excel municipal).

## Ronda de correcciones del usuario (SIGEP_360_Dossier corrección.docx)

El usuario exportó el Word generado, lo corrigió a mano con conocimiento directo de la operación real de la Jefatura, y pidió aplicar esos cambios al proyecto. Se comparó ese archivo contra el original (`diff` de texto extraído de ambos `.docx`) y se incorporaron los cambios reales, descartando lo que parecía corrupción accidental de edición (ver detalle abajo). Cambios aplicados en `dossier/index.html` y `tools/build-docx.js`:

- **Nombre completo del sistema corregido**: "Sistema Inteligente de Gestión del Patrimonio Edilicio Municipal" → "Sistema Inteligente de Gestión para los Edificios Públicos" — esta versión sí arma correctamente el acróstico S-I-G-E-P.
- **Dotación operativa: 12 → 15 trabajadores** — se integran un capataz y los 2 agentes administrativos (antes descriptos como "compartidos" con la Secretaría) al conteo total.
- **Caso de la Biblioteca reescrito**: el motivo real fue una ampliación mal evaluada (no accesibilidad), y la intervención se describe como arbitraria y sin evaluación técnica previa — corrección de un dato que se había asumido, no inventado desde cero pero sí impreciso.
- **Calendario de mantenimiento preventivo actualizado** (nuevos períodos, se agrega "limpieza de canaletas post otoño").
- **Se retiran del dossier**: mejora (g) Equidad territorial, mejora (i) Modo offline en la PWA (con toda la sub-sección "Arquitectura tecnológica"), mejora (j) Onboarding real de las cuadrillas, y la lista "Proyectos piloto 2027" (incluido el piloto "Edificio de alto consumo", que no queda mencionado en ningún otro lugar del documento tras esta edición).
- Reescritura del párrafo de vigencia de precios de proveedores, sumando un párrafo nuevo sobre la base de datos de precios por proveedor.
- Ajustes menores: "MVP 2027" se reemplaza por "Inicio 2027" en dos lugares de encabezado (se mantiene "MVP" como término explicado en el resto del documento), texto de "Optimizar" (verbo estratégico), expansión de ISE en el Nivel 3.
- **Se descartó 1 cambio del archivo del usuario** por parecer corrupción accidental de edición (texto con sentido roto, típico de borrar/pegar en Word): "ausencia de retrabajos" → "ausencia de trabajos" (pierde sentido) — se mantiene "retrabajos".
- El otro cambio marcado como dudoso sí era intencional: se retiró "y canaletas embutidas" de la lista de sectores de EMEAI en el capítulo 9 (el typo de espacio era de edición, pero la intención de sacar esa mención era real). El sector sigue existiendo como hotspot real en el piloto interactivo — solo se quitó de esa lista descriptiva del dossier.

`SIGEP_360_Dossier.docx` fue regenerado con `node tools/build-docx.js` para reflejar todos estos cambios.
