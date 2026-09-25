# Plan de Sustentabilidad Energética — EMEAI

Reemplaza al cálculo anterior (basado en un solo período de invierno). Esta versión usa **23 boletas reales de EDEA** descargadas por el usuario de la Oficina Virtual (`concurso obras publicas/boletas edea emeai/`) más la factura ya digitalizada en la sesión anterior — **8 bimestres consecutivos por cuenta, del 31/03/2025 al 31/07/2026 (16 meses, las 4 estaciones representadas, sin huecos)**. Datos estructurados completos en `consumo-energia-emeai.json`.

## 1. Resumen ejecutivo

| | |
|---|---:|
| Consumo real anualizado (3 cuentas, complejo EMEAI) | **≈23.850 kWh/año** |
| Potencia solar recomendada | **≈20 kWp** (~44 paneles de 450 Wp, ~115 m² de techo) |
| Inversión orden de magnitud | **USD 18.000 – 24.000** |
| Gasto eléctrico actual estimado | **≈ARS 10,1 millones/año** a tarifas de la última factura (sept. 2026) |
| Hallazgo clave | El consumo cae hasta 5 veces en verano (receso escolar) — justo cuando más sol hay. Define cómo dimensionar. |

## 2. Diagnóstico energético real

EDEA factura el complejo en 3 cuentas — edificio principal y dos anexos — con ciclos bimestrales (no mensuales). Consumo por cuenta y bimestre:

| Bimestre | Fechas | Edificio A (Rivadavia 1233) | Edificio B (A. del Valle 1443) | Edificio C (A. del Valle 1467) | Total complejo |
|---|---|---:|---:|---:|---:|
| 03/25 | 31/03–30/05/2025 | 2.077 | 838 | 564 | 3.479 |
| 04/25 | 30/05–31/07/2025 | 2.518 | 1.398 | 549 | 4.465 |
| 05/25 | 31/07–30/09/2025 | 3.501 | 1.279 | 683 | 5.463 |
| 06/25 | 30/09–28/11/2025 | 3.996 | 610 | 714 | 5.320 |
| **01/26** | **28/11/25–30/01/26** | **1.084** | **81** | **284** | **1.449** |
| **02/26** | **30/01–31/03/2026** | **539** | **157** | **440** | **1.136** |
| 03/26 | 31/03–29/05/2026 | 3.493 | 1.109 | 686 | 5.288 |
| 04/26 | 29/05–31/07/2026 | 3.148 | 1.501 | 574 | 5.223 |
| **Total (16 meses)** | | **20.356** | **6.973** | **4.494** | **31.823 kWh** |

(kWh; los dos bimestres resaltados corresponden al receso escolar de verano).

### Hallazgo estacional

Los bimestres 01/26 y 02/26 (fines de noviembre a fines de marzo, receso escolar de verano) son sistemáticamente los de **menor consumo del año en las 3 cuentas** — hasta 5 veces menos que el resto. Es exactamente el período de **mayor irradiación solar** del año. Esto es determinante para el dimensionamiento (ver punto 4): un sistema pensado para cubrir el promedio anual va a generar bastante más energía de la que el edificio puede autoconsumir en verano, y ese excedente sólo tiene valor si se gestiona la inyección a red.

## 3. Consumo anualizado real (por cuenta)

Con 487 días de datos reales por cuenta (más de un año), el consumo diario promedio y su equivalente anual son un dato observado, no una extrapolación:

| Cuenta | Domicilio | kWh/día | kWh/año real |
|---|---|---:|---:|
| Edificio A | Rivadavia 1233 (edificio principal) | 41,8 | **15.257** |
| Edificio B | Aristóbulo del Valle 1443 | 14,3 | **5.226** |
| Edificio C | Aristóbulo del Valle 1467 | 9,2 | **3.368** |
| **Total complejo** | | **65,3** | **≈23.850** |

**Por qué importa tener un año completo:** el cálculo anterior, hecho con un solo bimestre de invierno, extrapolaba a ≈29.800 kWh/año — un 25% más alto que el dato real. Sin este relevamiento más completo, el proyecto se habría sobredimensionado en esa misma proporción.

## 4. Dimensionamiento solar fotovoltaico

Con irradiación típica de esta zona de Buenos Aires (≈4–4,5 horas sol pico/día) y un rendimiento esperado de ≈1.200 kWh/kWp/año (performance ratio 0,75–0,80), dos escenarios:

| Escenario | Potencia combinada | Paneles (450 Wp) | Techo aprox. |
|---|---:|---:|---:|
| **Cobertura 100% del consumo anual** | ≈20 kWp | ≈44 | ≈115 m² |
| **Cobertura ≈85%, priorizando autoconsumo** (recomendado) | ≈17 kWp | ≈37 | ≈97 m² |

Por edificio (cobertura 100%):

| Cuenta | kWh/año | Potencia | Paneles |
|---|---:|---:|---:|
| Edificio A (Rivadavia 1233) | 15.257 | ≈12,7 kWp | ≈28 |
| Edificio B (A. del Valle 1443) | 5.226 | ≈4,4 kWp | ≈10 |
| Edificio C (A. del Valle 1467) | 3.368 | ≈2,8 kWp | ≈6 |

**Por qué se recomienda el escenario del 85% y no el 100%:** dado el hallazgo estacional del punto 2, un sistema al 100% del promedio anual genera un excedente considerable en verano que el edificio no puede consumir en el momento (está de receso). Ese excedente sólo se aprovecha económicamente si EMEAI se da de alta en el programa de Generación Distribuida (punto 6) y la compensación por inyección es favorable — hoy en Argentina suele pagarse la energía inyectada por debajo del precio de compra evitado. Dimensionar al 85% del consumo anual reduce la dependencia de ese mecanismo y mejora el repago mientras se confirman las condiciones reales de inyección con EDEA.

## 5. Costo e inversión

No convierto a pesos con un tipo de cambio fijo — se mueve demasiado rápido para que el número siga siendo válido cuando se use la presentación. Como referencia de mercado (USD 900–1.200 por kWp instalado, sistemas chicos/medianos conectados a red):

- Escenario 100% (≈20 kWp): **USD 18.000 – 24.000**
- Escenario 85% recomendado (≈17 kWp): **USD 15.300 – 20.400**

Pedir 2-3 cotizaciones locales antes de citar un número final en la presentación.

**Gasto eléctrico actual, a precios de hoy (no es una suma de pesos históricos):** sumar el gasto nominal de los 16 meses de boletas ($10.842.798,68) no es un dato financieramente significativo por la inflación del período — el mismo criterio que ya aplica el dossier general del proyecto (mejora "costo en valor real"). En cambio, tomando el precio promedio por kWh de la última factura disponible (bimestre 04/26, emitida en agosto 2026: $423 por kWh, cargos fijos e impuestos incluidos) y aplicándolo al consumo anual real, el gasto eléctrico del complejo a **tarifas vigentes hoy** es del orden de **ARS 10,1 millones/año**.

## 6. Marco regulatorio: Generación Distribuida

Para inyectar excedentes de verano y compensarlos contra el consumo del resto del año, cada una de las 3 cuentas debería adherirse al programa de Generación Distribuida (Ley Nacional 27.424, con adhesión de la Provincia de Buenos Aires) ante EDEA. Es un trámite por cuenta, no automático — a confirmar con la distribuidora antes de cerrar el dimensionamiento final. Con o sin esa adhesión, el cargo fijo y los impuestos asociados a estar conectado a la red se siguen pagando igual, así que el ahorro real recae sobre la porción variable (energía) de la factura.

## 7. Factor de potencia — hallazgo corregido

Con un solo bimestre, el cálculo anterior marcaba el Edificio B (27-31% de energía reactiva sobre activa) como una posible oportunidad de corrección de factor de potencia. Con los 8 bimestres, el promedio se confirma en 27,3% — pero eso equivale a un **cos φ ≈ 0,96**, dentro de un rango aceptable (la penalización tarifaria en Argentina suele activarse por debajo de cos φ 0,85–0,90). **Se retira esta recomendación**: no hay evidencia, con los datos disponibles, de que corregir el factor de potencia sea prioritario acá.

## 8. Hoja de ruta de implementación

1. **Relevamiento técnico de techos** — orientación, inclinación, sombras, estado estructural de los 3 edificios (falta hacerlo; no incluido en este cálculo).
2. **Confirmar con EDEA** las condiciones de adhesión a Generación Distribuida y la tarifa de compensación por energía inyectada.
3. **Definir escenario de cobertura** (85% recomendado vs. 100%) según el resultado del relevamiento de techos y la respuesta de EDEA sobre inyección.
4. **Cotizar** con 2-3 instaladores locales/regionales.
5. **Instalar y poner en marcha**, con monitoreo de generación real vs. proyectada durante el primer año — para validar o corregir esta estimación con datos de producción real, no sólo de consumo.

## Estado

Reemplaza al cálculo anterior (un solo período). Todavía no integrado a los artifacts publicados — es el insumo de trabajo hasta que se decida el formato final (sección ampliada del piloto EMEAI, capítulo del dossier, o documento aparte).
