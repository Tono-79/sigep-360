# SIGEP 360 — Proyecto de concurso (Jefatura de Obras Públicas, Municipalidad de Ayacucho)

## 🌐 Sitio web público (sin necesidad de cuenta de Claude)

**https://tono-79.github.io/sigep-360/**

Página real (GitHub Pages, repositorio público [Tono-79/sigep-360](https://github.com/Tono-79/sigep-360)), pensada para que un jurado la abra desde cualquier dispositivo sin login — es la que hay que compartir. Enlaza al dossier, la presentación y el piloto EMEAI; el QR del dossier apunta acá. Las versiones "artifact" de Claude (más abajo) quedan como respaldo editable, pero requieren que cada una esté compartida como "Cualquiera con el enlace" para funcionar sin cuenta.

## Contenido de esta carpeta

- `00-plan-original.md` — texto original del plan estratégico tal como lo compartió el usuario.
- `01-analisis-mejoras.md` — análisis de fortalezas, huecos y mejoras propuestas al plan original.
- `emeai/` — material de trabajo del caso piloto EMEAI (Escuela Municipal de Enseñanza Artística e Idiomas), extraído de `D:\Usuario\Escritorio\concurso obras publicas`:
  - `fotos-historicas/` — ≈795 fotos originales extraídas de los .rar del Escritorio, organizadas por etapa (2013–2023).
  - `fotos-seleccionadas/` — selección curada (6–12 por etapa) para uso en los entregables.
  - `fotos-estado-2026/` — 41 fotogramas extraídos con ffmpeg de los 5 videos de relevamiento (set. 2026); `seleccionadas/` contiene la mejor selección.
  - `plano/` — plano oficial PLANTAS_EMEAI_2026.pdf convertido a PNG/JPG (`plano-web.jpg`, usado en el artifact interactivo).
  - `datos/` — `emeai-historia-clinica.json` (25 intervenciones reales de EMEAI) y `trayectoria-resumen.json` (estadísticas agregadas de ~43 edificios municipales), ambos extraídos de `OBRAS PUBLICAS trabajos realizados.xlsx`; `consumo-energia-emeai.json` y `energia-sustentable-emeai.md` — Plan de Sustentabilidad Energética (SIGEP Verde) a partir de 23 boletas reales de EDEA, 8 bimestres consecutivos (31/03/2025–31/07/2026) por cada una de las 3 cuentas del complejo.
  - `artifact/index.html` — código fuente del artifact interactivo publicado.
- `dossier/index.html` — código fuente del dossier/documento final publicado; `dossier/assets/qr-emeai.png` — QR estático (generado y verificado con Node.js) hacia la ficha de EMEAI.
- `presentacion/` — primera versión de la presentación interactiva (el usuario pidió rehacerla, no le gustó el diseño). `assets/ayacucho-crop.jpg` — mapa real de Ayacucho (ver Notas técnicas), reutilizado por las versiones siguientes.
- `estilos/index.html` — página de comparación con 4 mockups de dirección visual (audaz, oscura premium, cálida, minimalista) para que el usuario elija.
- `presentacion-minimal/index.html` — presentación interactiva, dirección "minimalista" (elegida por el usuario).
- `presentacion-premium/index.html` — presentación interactiva, dirección "oscura premium" (elegida por el usuario).

## Entregables publicados

1. **SIGEP 360 · Patrimonio** (presentación final, elegida por el usuario — minimalista, editorial, serifa Newsreader, casi sin color): actualizada con la fusión del dossier — Planta Urbana 2024 oficial (reemplazó el mosaico OSM), 8 verbos de objetivos estratégicos, arquitectura en 7 niveles, el caso real de la Biblioteca junto al de BAMUR, hoja de ruta con los verbos Ordenar/Estandarizar/Medir/Integrar/Anticipar, ISE en vivo, trayectoria institucional y 6 fotos reales de EMEAI.
   https://claude.ai/artifact/49p9pv1Cguq5Uo1xTyD1s4

2. ~~SIGEP 360 · Patrimonio Municipal~~ (versión oscura premium de la presentación — Fraunces itálica, dorado, fondo negro; a diferencia de la Nº1 nunca recibió la fusión del dossier. Descartada a pedido del usuario, no se sigue desarrollando; queda publicada como privada, sin cambios):
   https://claude.ai/artifact/6mqo1Cx3gnz3iWL5gNKv1A

3. ~~SIGEP 360 · Presentación~~ (primera versión, reemplazada a pedido del usuario — no le gustó el diseño; se mantiene publicada pero no es la recomendada):
   https://claude.ai/artifact/P9aQscQxW6VFTqbFHN2SFg

4. **EMEAI · SIGEP 360** (piloto interactivo): plano clickeable, línea de tiempo fotográfica real, historia clínica edilicia, ISE de ejemplo, caso BAMUR (Banco Municipal de Materiales Recuperados), trayectoria institucional y un Plan de Sustentabilidad Energética (SIGEP Verde) con dimensionamiento solar basado en un año completo de boletas reales de EDEA (23 facturas, 8 bimestres, 3 cuentas).
   https://claude.ai/artifact/U6BukbG2iSU7AodF3CCBdX

5. **SIGEP 360 · Dossier** (documento completo del proyecto — fusionado con la versión más desarrollada que el usuario venía trabajando en paralelo, ver más abajo): 11 capítulos, arquitectura en 7 niveles, mapa real (Planta Urbana 2024 oficial), tabla de riesgos, módulo de compras completo, anexos operativos (Ficha SIGEP y Orden de Trabajo), y el caso EMEAI con datos reales.
   https://claude.ai/artifact/PDj3iusL9bd5vaG1Fm93So

## Fusión con el material aportado por el usuario (concurso obras publicas)

El usuario compartió un PDF (`SIGEP_360_.pdf`, también existe como `SIGEP_360_Ayacucho_2027_2037_ACTUALIZADO.pdf` — mismo contenido, solo cambia el formato de línea) con una versión mucho más desarrollada del plan, aparentemente trabajada en paralelo en su proyecto de ChatGPT. Se comparó contra el dossier y se fusionaron ambas fuentes en una sola versión superior — ver el detalle de qué vino de cada lado en `01-analisis-mejoras.md`.

También se usó `P.URBANA 2024.pdf` (Planta Urbana oficial de Ayacucho, aportada por la Secretaría de Obras y Servicios Públicos) como mapa real del dossier, en reemplazo del mosaico de OpenStreetMap que se había armado antes.

**Nota:** en esa misma carpeta (`D:\Usuario\Escritorio\concurso obras publicas`) también hay un `SIGEP360_Presentacion_Completa_EMEAI_y_Sistema_App.pptx` (PowerPoint ya armado) y un `SIGEP_360_.docx` que no se llegaron a revisar — quedan pendientes por si el usuario quiere que se comparen también.

## Notas técnicas

- Los .rar originales se extrajeron con WinRAR (`UnRAR.exe`) sin modificar los archivos fuente del Escritorio.
- El plano PDF se convirtió con `pdftoppm` (poppler).
- Los fotogramas de video se extrajeron con `ffmpeg` (instalado especialmente para este proyecto en `C:\Users\PC\dev-tools\ffmpeg\`, ya que no venía instalado en la máquina).
- El Excel se procesó con Node.js + la librería `xlsx` (no había Python instalado en la máquina).
- Los montos de las intervenciones son valores nominales históricos (sin ajustar por inflación) — ver la nota al respecto en los entregables.
- El mapa de Ayacucho de las presentaciones (`presentacion-minimal`, `presentacion-premium`) es real: se geocodificó el centro del pueblo (Plaza San Martín) con Nominatim (OpenStreetMap) y se descargaron 25 tiles reales de `tile.openstreetmap.org` (zoom 14), compuestos con ffmpeg en un mosaico y recortados al casco urbano. Los puntos de Municipalidad, Plaza San Martín, Biblioteca Pública Manuel Vilardaga y Hospital Dr. Pedro Solanet están geocodificados exactamente; el de EMEAI es aproximado (no se pudo geocodificar la dirección exacta) y está marcado como tal en el mapa.
- El mapa del **dossier** es distinto y mejor: es la Planta Urbana 2024 oficial (`P.URBANA 2024.pdf`, aportada por el usuario), convertida a imagen con `pdftoppm` — cartografía real del Municipio, no una aproximación armada con OpenStreetMap.
- El primer intento de generar el QR de la ficha EMEAI con una librería JavaScript (qrcodejs vía cdnjs) no renderizaba correctamente en el artifact publicado. Se reemplazó por una imagen PNG estática generada con Node.js (`qrcode`) y verificada decodificándola de vuelta con `jsqr` antes de publicarla — más robusto que depender de una librería de terceros para algo que hay que poder confirmar visualmente.
