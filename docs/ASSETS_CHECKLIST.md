# ASSETS_CHECKLIST.md — Luci: Mi Sol, Mi Luna y Mis Estrellas

Checklist operativo para completar assets y contenido final antes de entregar el regalo.

## 1) Audio del primer baile

- [ ] Agregar archivo `public/audio/first-dance.mp3`.
- [ ] Verificar que el audio inicia solo después de interacción del usuario.
- [ ] Validar volumen inicial bajo y controles de play/pause + mute.
- [ ] Probar fallback: si falta el mp3, la app no se rompe.

## 2) Fotos de boda

- [ ] Cargar fotos reales en `public/images/wedding`.
- [ ] Mantener nombres alineados con `src/data/wedding.ts` o actualizar `weddingPhotos`.
- [ ] Confirmar alt text emocional y descriptivo por foto.
- [ ] Validar que cada tarjeta muestre imagen real y use placeholder si alguna falta.

## 3) Fotos de las cinco gatitas

- [ ] Cargar `loli.jpg`, `minna.jpg`, `daphne.jpg`, `norah.jpg`, `sofi.jpg` en `public/images/cats`.
- [ ] Confirmar que los paths en `src/data/cats.ts` coincidan con archivos reales.
- [ ] Revisar recorte mobile (rostros legibles en formato 4:3).
- [ ] Validar fallback elegante si falta alguna imagen.

## 4) Fotos de pareja y recuerdos

- [ ] Guardar fotos de pareja en `public/images/couple`.
- [ ] Guardar recuerdos/hitos en `public/images/memories`.
- [ ] Definir lista final de recuerdos con título, fecha aproximada y contexto.
- [ ] Revisar peso de imágenes para performance mobile.

## 5) Datos astronómicos simbólicos

- [ ] Completar eventos clave en `src/data/skyEvents.ts`.
- [ ] Verificar narrativa poética de cada evento (sin prometer precisión astronómica avanzada en MVP).
- [ ] Preparar carpeta `public/images/sky` para mapas/overlays si se incorporan después.

## 6) Textos finales y revisión emocional

- [ ] Revisar introducción de portada con nombre completo de Luci.
- [ ] Revisar historia de origen y boda con redacción final.
- [ ] Revisar votos originales y renovados en `src/data/vows.ts`.
- [ ] Revisar sección de futuro y centro secreto con firma final “Con amor, Diego”.
- [ ] Ejecutar lectura completa en celular para confirmar tono íntimo, elegante y personal.
