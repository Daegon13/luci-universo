# AGENTS.md — Luci: Mi Sol, Mi Luna y Mis Estrellas

## 1. Prioridad de contexto

Antes de modificar código, leer en este orden:

1. `docs/PROJECT_MASTER.md`
2. `docs/PATCH_PLAN.md`
3. `docs/ASSETS_CHECKLIST.md`
4. Este archivo `AGENTS.md`

`docs/PROJECT_MASTER.md` es la fuente principal de verdad emocional, narrativa y estética del proyecto.

## 2. Objetivo del proyecto

Crear una experiencia web privada, romántica, mística y astronómica como regalo de cumpleaños para Luci.

No es una demo técnica, no es un dashboard y no es una web genérica. Es una galaxia biográfica creada por Diego para su esposa Luci, con recuerdos reales, votos, fotos de boda, música, gatitas y promesas de futuro.

La prioridad absoluta es que la experiencia se sienta:

- Íntima.
- Personal.
- Emocional.
- Elegante.
- Mágica.
- Mobile-first.
- Estable.

## 3. Contexto emocional obligatorio

La web debe girar alrededor de estos elementos:

- Luci es la esposa de Diego.
- La canción del primer baile es “I Can’t Help Falling in Love” de Elvis Presley.
- La boda civil tiene fechas importantes: 3 de abril y 6 de abril.
- Los votos incluyen la frase “mi sol, luna y mis estrellas”.
- La relación tiene una narrativa de destino improbable: distancia, culturas distintas, Tinder, primer encuentro, primer beso y cuidado durante una cirugía de emergencia.
- Luci cuidó a Diego durante una cirugía cuando llevaban solo siete días de novios.
- Diego quiere construir una vida, un negocio y un futuro junto a Luci.
- Las cinco gatitas son parte central de la familia: Loli, Minna, Daphne, Norah y Sofi.
- La estética debe ser mística/astronómica, con fondo estrellado, orbes, planetas, constelaciones y una posible vista tipo sistema solar.

## 4. Stack técnico

Usar:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- Lucide React si se necesitan íconos.
- Vercel para deploy.

No usar en MVP:

- Prisma.
- Base de datos.
- Backend.
- Auth real.
- Three.js pesado.
- Animaciones 3D complejas.
- Librerías grandes innecesarias.
- Soluciones que dificulten el deploy o rompan mobile.

## 5. Reglas de arquitectura

- Todo contenido editable debe vivir en `src/data`.
- Los assets deben vivir en `public`.
- Las imágenes de boda deben ir en `public/images/wedding`.
- Las imágenes de gatitas deben ir en `public/images/cats`.
- Las fotos de pareja deben ir en `public/images/couple`.
- Las fotos de recuerdos deben ir en `public/images/memories`.
- El audio debe ir en `public/audio/first-dance.mp3`.
- Cada sección importante debe ser un componente propio.
- Mantener componentes pequeños, claros y reutilizables.
- Evitar lógica compleja innecesaria.
- Priorizar legibilidad y estabilidad.

## 6. Reglas de diseño

La estética debe ser:

- Astronómica.
- Mística.
- Romántica.
- Elegante.
- Oscura pero cálida.
- Visualmente suave.
- Premium, no infantil.

Paleta sugerida:

- Azul noche.
- Violeta profundo.
- Negro cósmico.
- Rosa lunar.
- Dorado suave.
- Blanco estrella.

Evitar:

- Estética infantil.
- Exceso de brillo.
- Diseño sobrecargado.
- Texto ilegible.
- Animaciones molestas.
- UI tipo SaaS/dashboard.
- Cards genéricas sin emoción.

## 7. Reglas de experiencia

La web debe sentirse como una travesía:

1. Portal de entrada.
2. Activación de música.
3. Mapa del universo.
4. Origen de la relación.
5. Boda.
6. Votos.
7. Primer baile.
8. Cinco guardianas.
9. Cielos astronómicos simbólicos.
10. Futuro.
11. Centro secreto.

El usuario debe poder recorrerla completa en celular sin frustración.

## 8. Música

La canción debe reproducirse únicamente después de una interacción del usuario.

No intentar autoplay automático antes del primer click.

El reproductor debe:

- Ser discreto.
- Tener play/pause.
- Tener mute.
- Iniciar con volumen bajo.
- No tapar contenido importante en mobile.

## 9. Cielos astronómicos

La vista tipo sistema solar debe ser simbólica en el MVP.

No prometer precisión astronómica real hasta que haya datos completos y se implemente un cálculo confiable.

Primero construir:

- Visualización artística.
- Planetas orbitando lentamente.
- Selector de evento.
- Texto poético.

Luego, si hay tiempo, se puede evolucionar a posiciones astronómicas aproximadas.

## 10. Performance y mobile

Cada patch debe mantener:

- Buen rendimiento mobile.
- Imágenes optimizadas.
- Animaciones suaves.
- Texto legible.
- Botones tocables.
- Build funcionando.

Antes de considerar un patch listo, correr:

```bash
pnpm build

11. Orden de trabajo

Trabajar por patches según docs/PATCH_PLAN.md.

No adelantar features avanzadas si todavía no está completo el MVP emocional.

Orden correcto de prioridad:

Emoción.
Estabilidad.
Mobile.
Fotos y música.
Interacción.
Astronomía simbólica.
Astronomía avanzada solo si hay tiempo.
12. Criterio general de calidad

Si una decisión técnica mejora el efecto emocional sin arriesgar estabilidad, puede implementarse.

Si una decisión técnica es vistosa pero arriesga mobile, performance o fecha de entrega, debe evitarse.

Este proyecto no debe demostrar complejidad técnica. Debe demostrar amor, cuidado y precisión emocional.