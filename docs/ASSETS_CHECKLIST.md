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
- [ ] Mantener nombres alineados con `src/data/wedding.ts` o actualizar `weddingPhotos`.
- [x] Confirmar alt text emocional y descriptivo por foto en datos.
- [x] Validar que cada tarjeta muestre imagen real y use placeholder si alguna falta.

## 3) Fotos de las cinco gatitas

- [x] Crear carpeta `public/images/cats/` con `.gitkeep`.
- [ ] Cargar `loli.jpg`, `minna.jpg`, `daphne.jpg`, `norah.jpg`, `sofi.jpg` en `public/images/cats`.
- [x] Confirmar que los paths en `src/data/cats.ts` coincidan con archivos objetivo.
- [ ] Revisar recorte mobile (rostros legibles en formato 4:3).
- [x] Validar fallback elegante si falta alguna imagen.

## 4) Fotos de pareja y recuerdos

- [x] Crear carpetas `public/images/couple/` y `public/images/memories/` con `.gitkeep`.
- [ ] Guardar fotos de pareja en `public/images/couple`.
- [ ] Guardar recuerdos/hitos en `public/images/memories`.
- [ ] Definir lista final de recuerdos con título, fecha aproximada y contexto.
- [ ] Revisar peso de imágenes para performance mobile.

## 5) Datos astronómicos simbólicos

- [x] Crear carpeta `public/images/sky/` con `.gitkeep` para overlays futuros.
- [x] Completar eventos clave en `src/data/skyEvents.ts`.
- [x] Verificar narrativa poética de cada evento (sin prometer precisión astronómica avanzada en MVP).
- [ ] Preparar mapas/overlays finales si se incorporan después.

## 6) Textos finales y revisión emocional

- [x] Revisar introducción de portada con nombre completo de Luci.
- [x] Revisar historia de origen y boda con redacción final.
- [x] Revisar votos originales y renovados en `src/data/vows.ts`.
- [x] Revisar sección de futuro y centro secreto con firma final “Con amor, Diego”.
- [ ] Ejecutar lectura completa en celular para confirmar tono íntimo, elegante y personal.
