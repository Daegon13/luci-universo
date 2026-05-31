# ASSETS_CHECKLIST.md — Luci: Mi Sol, Mi Luna y Mis Estrellas

Checklist operativo para completar assets y contenido final antes de entregar el regalo.

## 1) Audio del primer baile

- [x] Crear carpeta `public/audio/` con `.gitkeep` para recibir el archivo final.
- [ ] Agregar archivo `public/audio/first-dance.mp3`.
- [x] Verificar que el audio inicia solo después de interacción del usuario.
- [x] Validar volumen inicial bajo y controles de play/pause + mute.
- [x] Probar fallback: si falta el mp3, la app no se rompe.

## 2) Fotos de boda

- [x] Crear carpeta `public/images/wedding/` con `.gitkeep`.
- [ ] Cargar fotos reales en `public/images/wedding`.
- [x] Mantener nombres alineados con `src/data/wedding.ts` o actualizar `weddingPhotos`: usar `wedding-1.webp`, `wedding-2.webp`, `wedding-3.webp`, `wedding-4.webp` en minúscula para evitar problemas en Linux/Vercel.
- [x] Confirmar alt text emocional y descriptivo por foto en datos.
- [x] Validar que cada tarjeta muestre imagen real y use placeholder si alguna falta.

## 3) Fotos de las cinco gatitas

- [x] Crear carpeta `public/images/cats/` con `.gitkeep`.
- [ ] Cargar `loli.webp`, `minna.webp`, `daphne.webp`, `norah.webp`, `sofi.webp` en `public/images/cats`.
- [x] Confirmar que los paths en `src/data/cats.ts` coincidan con archivos objetivo.
- [ ] Revisar recorte mobile (rostros legibles en formato 4:3).
- [x] Validar fallback elegante si falta alguna imagen.

## 4) Fotos de pareja y recuerdos

- [x] Crear carpetas `public/images/couple/` y `public/images/memories/` con `.gitkeep`.
- [ ] Guardar fotos de pareja en `public/images/couple` con nombres finales: `couple-main.webp`, `couple-1.webp`, `couple-2.webp`, `couple-3.webp`.
- [ ] Guardar recuerdos/hitos en `public/images/memories` con nombres finales: `memory-1.webp`, `memory-2.webp`, `memory-3.webp`, `memory-4.webp`, `memory-5.webp`.
- [ ] Definir lista final de recuerdos con título, fecha aproximada y contexto.
- [ ] Revisar peso de imágenes para performance mobile.

## 5) Datos astronómicos simbólicos

- [x] Crear carpeta `public/images/sky/` con `.gitkeep` para overlays futuros.
- [x] Completar eventos clave en `src/data/skyEvents.ts`.
- [x] Verificar narrativa poética de cada evento (sin prometer precisión astronómica avanzada en MVP).
- [ ] Preparar mapas/overlays finales en WebP si se incorporan después:
  - `luci-birth-sky.webp`
  - `luci-birth-solar-system.webp`
  - `wedding-april-03-sky.webp`
  - `wedding-april-03-solar-system.webp`
  - `wedding-april-06-sky.webp`
  - `wedding-april-06-solar-system.webp`

## 6) Conversión y optimización WebP

- [x] Migrar referencias del código a `.webp` para fotos e imágenes estáticas.
- [ ] Convertir imágenes finales a WebP con calidad recomendada entre `75` y `82`.
- [ ] Boda: exportar a ancho máximo `1600px`.
- [ ] Gatitas: exportar a ancho máximo `1200px`.
- [ ] Recuerdos: exportar a ancho máximo `1400px`.
- [ ] Cielos: exportar a ancho máximo `1600px`.
- [ ] Verificar en deploy que cada imagen WebP carga correctamente antes de borrar originales.
- [ ] No borrar originales hasta confirmar build, deploy y revisión visual en celular.

### Performance Asset Pass

- [ ] Reemplazar las versiones pesadas de boda por WebP optimizado: `public/images/wedding/wedding-3.webp` y `public/images/wedding/wedding-4.webp` deben quedar listas antes de la entrega final.
- [ ] Peso recomendado para fotos grandes de boda: menos de 500 KB idealmente.
- [ ] Ancho máximo recomendado para fotos grandes de boda: 1600px, manteniendo calidad suficiente para mobile y desktop.
- [ ] No borrar assets automáticamente: revisar y reemplazar archivos pesados de forma controlada.
- [ ] Revisar assets duplicados/no usados antes de borrar nada: posibles candidatos actuales en carpetas profundas de `public/images/cats/` (subcarpetas legacy de `daphne/`, `minna/`, `norah/`, `sofi/`) y archivos `SaveClip.App_...` en `public/images/cats/` y `public/images/couple/`.
- [x] Corregir typo de asset de pareja: `public/images/couple/caouple-1.webp` debe quedar como `public/images/couple/couple-1.webp`.

## 7) Textos finales y revisión emocional

- [x] Revisar introducción de portada con nombre completo de Luci.
- [x] Revisar historia de origen y boda con redacción final.
- [x] Revisar votos originales y renovados en `src/data/vows.ts`.
- [x] Revisar sección de futuro y centro secreto con firma final “Con amor, Diego”.
- [ ] Ejecutar lectura completa en celular para confirmar tono íntimo, elegante y personal.
