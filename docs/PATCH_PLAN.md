# PATCH_PLAN.md — Luci: Mi Sol, Mi Luna y Mis Estrellas

## Objetivo del plan

Construir la web regalo por etapas controladas, evitando que el proyecto se vuelva demasiado grande antes de tener una experiencia emocional completa y funcional.

Cada patch debe:

- Tener objetivo claro.
- Ser testeable.
- Mantener mobile-first.
- Pasar `pnpm build`.
- No romper lo anterior.
- Priorizar emoción y estabilidad.

---

## Estado general del proyecto

Tipo de proyecto: regalo web privado.

Stack:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- Assets locales.
- Sin backend.
- Sin base de datos.

---

## Definición de MVP emocional

El MVP emocional está listo cuando la web permite:

1. Entrar por portal privado/simbólico.
2. Escuchar la canción del primer baile después de interacción.
3. Navegar un mapa del universo.
4. Leer la historia de origen.
5. Ver la sección de boda.
6. Leer votos originales y renovados.
7. Ver la constelación de las cinco gatitas.
8. Ver la sección de futuro.
9. Abrir un cierre secreto/emocional.
10. Usarla correctamente desde celular.

---

# Patch 1 — Base del proyecto y portal de entrada

## Objetivo

Crear la base funcional y visual inicial del regalo.

## Tareas

- Confirmar estructura Next.js App Router.
- Confirmar Tailwind funcionando.
- Instalar y configurar Framer Motion si todavía no está.
- Crear `src/components/EntryGate.tsx`.
- Crear `src/components/Starfield.tsx`.
- Crear `src/components/MusicPlayer.tsx` como placeholder.
- Crear `src/data/sections.ts` como placeholder.
- Crear estado de entrada `hasEntered`.
- Implementar clave simbólica.
- Crear pantalla posterior placeholder del universo.

## Contenido

Título:

```txt
Luci: Mi Sol, Mi Luna y Mis Estrellas
```

Texto:

```txt
Luci Jennifer Mayada Aragonés, este universo fue creado con todo lo que amo de vos.
```

Clave aceptada:

```txt
mi sol luna y mis estrellas
```

Botón:

```txt
Entrar a nuestro universo
```

## Criterios de aceptación

- `pnpm dev` funciona.
- `pnpm build` funciona.
- La entrada se ve bien en desktop.
- La entrada se ve bien en mobile.
- La clave permite entrar.
- Si la clave es incorrecta, muestra feedback elegante.
- No hay errores de consola relevantes.

---

# Patch 2 — Música y atmósfera

## Objetivo

Agregar la canción del primer baile y un reproductor persistente.

## Tareas

- Completar `MusicPlayer`.
- Usar `/audio/first-dance.mp3`.
- Reproducir solo después de interacción del usuario.
- Conectar reproducción al botón de entrada.
- Agregar play/pause.
- Agregar mute/unmute.
- Volumen inicial bajo.
- Diseño fijo, discreto y elegante.

## Criterios de aceptación

- No hay autoplay antes de interacción.
- La música puede iniciar después de entrar.
- Play/pause funciona.
- Mute funciona.
- Si falta el archivo, la app no rompe.
- El reproductor no tapa contenido en mobile.
- `pnpm build` pasa.

---

# Patch 3 — Mapa del universo interactivo

## Objetivo

Crear la navegación principal mediante orbes, planetas o estrellas.

## Tareas

- Crear `src/components/GalaxyMap.tsx`.
- Crear `src/components/FloatingOrb.tsx`.
- Crear `src/components/SectionModal.tsx`.
- Expandir `src/data/sections.ts`.
- Cada orbe debe abrir una sección.
- Desktop: composición tipo sistema orbital/flotante.
- Mobile: grilla o carrusel vertical cómodo.

## Secciones iniciales

1. El Origen de Nuestra Constelación.
2. El Día que Elegimos Ser Hogar.
3. La Estrella que No se Apaga.
4. La Canción del Primer Baile.
5. Las Cinco Guardianas.
6. El Cielo de Luci.
7. El Cielo de Nuestra Boda.
8. La Ventana al Espacio.
9. El Centro de Mi Universo.

## Criterios de aceptación

- Todos los orbes se ven.
- Todos los orbes son clickeables.
- El modal abre y cierra correctamente.
- Mobile es usable.
- Animaciones suaves.
- `pnpm build` pasa.

---

# Patch 4 — Origen de la relación y boda

## Objetivo

Agregar las primeras secciones narrativas reales.

## Tareas

- Crear `src/components/OriginSection.tsx`.
- Crear `src/components/WeddingSection.tsx`.
- Crear `src/data/wedding.ts`.
- Crear `src/data/memories.ts`.
- Integrar ambas secciones al modal.
- Preparar galería de boda.
- Usar placeholders elegantes si faltan fotos.

## Contenido de origen

Incluir:

- Se conocieron por Tinder.
- Hablaron durante días todo el día.
- Diego fue a la casa de Luci.
- Se besaron apenas se vieron.
- Diego siguió yendo cada dos días.
- Diego tuvo una cirugía de emergencia.
- Luci durmió tres días en una silla al lado de su cama cuando llevaban solo siete días de novios.

## Contenido de boda

Fechas conocidas:

- 3 de abril.
- 6 de abril.

Pendiente:

- Año exacto.
- Qué representa cada fecha.

## Criterios de aceptación

- La historia se lee bien.
- La boda tiene galería preparada.
- Si no hay imágenes reales, no se rompe.
- El diseño mantiene estética mística/astronómica.
- `pnpm build` pasa.

---

# Patch 5 — Votos

## Objetivo

Construir una de las secciones emocionales principales.

## Tareas

- Crear `src/components/VowsSection.tsx`.
- Crear `src/data/vows.ts`.
- Incluir votos originales corregidos.
- Incluir votos renovados para cumpleaños.
- Agregar frases destacadas.
- Diseñar formato carta/pergamino astral.
- Asegurar buena legibilidad mobile.

## Bloques

1. Lo que te prometí entonces.
2. Lo que te prometo ahora.
3. Frases que siguen brillando.

## Frases destacadas

- Mi sol, luna y mis estrellas.
- Siempre tendremos éxito porque seremos equipo.
- Velaría por tu sueño y tu paz.
- Hasta que la última estrella del universo se apague.

## Criterios de aceptación

- El texto largo es cómodo de leer.
- La sección se siente íntima, no genérica.
- Mobile funciona perfecto.
- `pnpm build` pasa.

---

# Patch 6 — Las cinco guardianas

## Objetivo

Crear la sección de las gatitas como constelación familiar.

## Tareas

- Crear `src/components/CatsSection.tsx`.
- Crear `src/data/cats.ts`.
- Crear card para cada gatita.
- Usar medallones cósmicos.
- Preparar placeholders si faltan imágenes.
- Agregar microinteracciones sutiles.

## Gatitas

1. Loli — Guardiana del Vínculo Sagrado.
2. Minna — Guardiana de la Dulzura Serena.
3. Daphne — Guardiana Solar de la Alegría.
4. Norah — Guardiana Salvaje del Misterio.
5. Sofi — Guardiana Negra de la Inteligencia y la Resistencia.

## Criterios de aceptación

- Se muestran las cinco gatitas.
- Cada una tiene nombre, título, imagen, descripción corta y descripción extendida.
- La sección es tierna sin ser infantil.
- Las cards funcionan bien en mobile.
- `pnpm build` pasa.

---

# Patch 7 — Primer baile

## Objetivo

Crear una sección dedicada a la canción y el recuerdo del primer baile.

## Tareas

- Crear `src/components/FirstDanceSection.tsx`.
- Agregar texto emocional.
- Conectar visualmente con `MusicPlayer`.
- Mostrar foto del baile si existe.
- Si no existe foto, usar visual de luna/disco/ondas.

## Canción

```txt
I Can’t Help Falling in Love — Elvis Presley
```

## Texto base

```txt
Esta canción no suena igual desde aquel día. Desde entonces, cada nota sabe tu nombre.
```

## Criterios de aceptación

- La sección se abre desde el mapa.
- Se conecta emocionalmente con la música.
- No duplica controles de forma confusa.
- `pnpm build` pasa.

---

# Patch 8 — Futuro y ventana al espacio

## Objetivo

Mostrar la visión de futuro de Diego con Luci.

## Tareas

- Crear `src/components/FutureSection.tsx`.
- Crear `src/data/promises.ts`.
- Diseñar visual de ventana espacial.
- Agregar timeline/cards de promesas.
- Mantener tono romántico, no corporativo.

## Ideas a incluir

Diego quiere:

- Construir un negocio junto a Luci.
- Crear una desarrolladora de software e IA.
- Trabajar con ella para que explote su máximo potencial.
- Ayudarla a ser referente de esoterismo en América, si es lo que ella desea.
- Llevarla a cada rincón del mundo que quiera.
- Ver el espacio con ella desde una ventana.

## Promesas/cards

1. Ser equipo.
2. Construir estabilidad.
3. Crear juntos.
4. Llevar tu magia más lejos.
5. Recorrer el mundo.
6. Mirar las estrellas con vos.

## Criterios de aceptación

- La sección se siente como promesa de vida.
- No parece pitch empresarial.
- Visualmente evoca una ventana al espacio.
- `pnpm build` pasa.

---

# Patch 9 — Cielos astronómicos simbólicos

## Objetivo

Agregar visual tipo sistema solar inspirado en Solar System Scope.

## Importante

Esta versión debe ser simbólica/artística, no astronómicamente precisa.

No prometer precisión real todavía.

## Tareas

- Crear `src/components/SkySection.tsx`.
- Crear `src/data/skyEvents.ts`.
- Crear sistema solar 2D estilizado.
- Agregar selector de eventos.
- Agregar eventos con datos pendientes.
- Dejar estructura preparada para futura precisión astronómica.

## Eventos

1. Día que nació Luci.
2. Boda civil — 3 de abril.
3. Segunda fecha/celebración — 6 de abril.

## Datos pendientes

- Fecha completa de nacimiento de Luci.
- Hora de nacimiento.
- Lugar de nacimiento.
- Año exacto de boda.
- Significado de 3 de abril.
- Significado de 6 de abril.

## Criterios de aceptación

- La visualización se ve linda.
- Los planetas orbitan suavemente.
- Mobile funciona.
- El código deja claro que la versión es simbólica.
- `pnpm build` pasa.

---

# Patch 10 — Centro secreto y progreso

## Objetivo

Agregar cierre emocional y desbloqueo final.

## Tareas

- Crear `src/components/SecretEnding.tsx`.
- Crear `src/components/ProgressConstellation.tsx`.
- Registrar secciones visitadas en estado local.
- Desbloquear centro secreto tras visitar secciones principales.
- Permitir botón alternativo si se decide no bloquear el final.
- Agregar mensaje final firmado por Diego.

## Texto base final

```txt
Feliz cumpleaños, mi amor.

No hice esta web para mostrarte lo que sé hacer. La hice porque a veces el amor necesita una forma, una casa, una canción, una estrella donde quedarse.

Vos sos mi sol, mi luna y mis estrellas. Sos mi hogar, mi equipo, mi destino improbable, mi caos favorito y mi paz más verdadera.

Gracias por existir en mi vida. Gracias por elegirme. Gracias por ser vos.

Te amo hasta que la última estrella del universo se apague.

Con amor,
Diego.
```

## Criterios de aceptación

- El final se puede abrir correctamente.
- El sistema de progreso no frustra al usuario.
- El cierre emociona.
- `pnpm build` pasa.

---

# Patch 11 — Pulido visual, performance y deploy

## Objetivo

Dejar el regalo listo para entregar.

## Tareas

- Revisar todos los textos.
- Optimizar imágenes.
- Revisar mobile completo.
- Revisar desktop.
- Revisar accesibilidad básica.
- Revisar contrastes.
- Revisar botones.
- Revisar que música no moleste.
- Revisar carga de assets.
- Probar deploy en Vercel.
- Mantener URL privada/no indexada.

## Criterios de aceptación

- La experiencia completa se puede recorrer sin errores.
- Funciona bien en celular.
- Fotos cargan correctamente.
- Música funciona.
- Modal/secciones funcionan.
- El diseño se siente coherente.
- `pnpm build` pasa.
- Deploy en Vercel funciona.

---

# Reglas de cierre de cada patch

Antes de cerrar cualquier patch:

```bash
pnpm build
git status
```

Luego:

```bash
git add .
git commit -m "Describe patch clearly"
```

Formato sugerido de commits:

```txt
Patch 1: add entry gate and starfield
Patch 2: add music player
Patch 3: add galaxy map navigation
Patch 4: add origin and wedding sections
Patch 5: add vows section
Patch 6: add cats guardians section
Patch 7: add first dance section
Patch 8: add future space window section
Patch 9: add symbolic sky sections
Patch 10: add secret ending and progress
Patch 11: polish and prepare deploy
```

---

# Prioridad real si hay poco tiempo

Si hay poco tiempo, completar primero:

1. Patch 1.
2. Patch 2.
3. Patch 3.
4. Patch 4.
5. Patch 5.
6. Patch 6.
7. Patch 8.
8. Patch 10.
9. Patch 11.

Patch 9, cielos astronómicos, puede quedar simbólico o post-MVP si complica demasiado.
