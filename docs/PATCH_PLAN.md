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
---

# Patch 12 — Hardening y preparación para assets reales

## Objetivo

Estabilizar la base actual antes de cargar fotos, audio y detalles finales.

## Tareas

- Revisar scroll mobile en `src/app/page.tsx`.
- Eliminar cualquier `overflow-hidden` global que impida recorrer bien la experiencia.
- Mantener `overflow-x-hidden` si hace falta, pero permitir scroll vertical normal.
- Hacer que `Starfield` sea determinístico y no dependa de `Math.random()` a nivel de módulo.
- Revisar `CatsSection` para que pueda usar imágenes reales con fallback elegante.
- Revisar `WeddingSection` para que pueda usar imágenes reales con fallback elegante.
- Asegurar carpetas de assets con `.gitkeep`:
  - `public/audio/`
  - `public/images/wedding/`
  - `public/images/cats/`
  - `public/images/couple/`
  - `public/images/memories/`
  - `public/images/sky/`
- Agregar privacidad mínima:
  - `robots.txt`
  - metadata `noindex, nofollow`
- Mejorar modal:
  - botón visible para cerrar
  - buen comportamiento en mobile
  - cierre por Escape y click fuera
- Agregar mecanismo simple para resetear la experiencia en pruebas:
  - limpiar localStorage con query param `?reset=1` o función equivalente
- Completar `docs/ASSETS_CHECKLIST.md` si todavía está incompleto.

## Criterios de aceptación

- `pnpm build` pasa.
- `pnpm lint` no introduce errores nuevos.
- La experiencia se puede recorrer correctamente en mobile.
- Las secciones de boda y gatitas ya están listas para recibir assets reales.
- La web no se indexa.
- La app no se rompe si faltan imágenes o audio.

---

# Patch 13 — Starfield Background System

## Objetivo

Reemplazar el fondo actual por un cielo estrellado más rico, profundo y místico, para que la experiencia deje de sentirse como un gradiente genérico y se acerque a un universo vivo.

## Problema actual

El fondo actual cumple como base, pero todavía se ve demasiado plano o genérico. Necesitamos más profundidad, capas, atmósfera y sensación espacial.

## Tareas

- Crear un sistema visual de fondo llamado `Starfield Background System`.
- Mejorar `src/components/Starfield.tsx` o dividirlo en componentes más especializados:
  - `Starfield.tsx`
  - `NebulaGlow.tsx`
  - `AmbientParticles.tsx`
- Crear varias capas visuales:
  1. estrellas pequeñas lejanas
  2. estrellas medianas con brillo suave
  3. algunas estrellas grandes estratégicas
  4. polvo cósmico/partículas tenues
  5. neblina o resplandor tipo nebulosa muy sutil
- Agregar sensación de profundidad con parallax suave o animación lenta.
- Usar posiciones determinísticas o seeded.
- Mantener la animación sutil, nada cargado.
- Agregar viñeteo suave para centrar la atención.
- Lograr que el fondo combine con la constelación, modales y secciones.
- Asegurar buen rendimiento en mobile.
- Evitar canvas pesado si no hace falta; priorizar HTML/CSS/SVG/Framer Motion.

## Estética buscada

- Azul noche profundo
- Violeta espacial
- Rosa lunar
- Dorado suave
- Blanco estrella
- Sensación de cielo místico, íntimo y elegante

## Criterios de aceptación

- `pnpm build` pasa.
- El fondo se siente más espacial y menos genérico.
- Hay profundidad visual.
- Las estrellas no distraen del contenido.
- Mobile sigue funcionando fluido.
- La estética general mejora claramente.

---

Patch 14 — Mobile Entry Fix + Responsive Constellation Hardening
Objetivo

Corregir el bug crítico de entrada en mobile y estabilizar la experiencia visual/responsive de la constelación.

Actualmente la estética avanzó mucho, pero la puerta estelar todavía puede fallar en Android/Chrome al tocar el botón de entrada. Además, hay que validar que la constelación, el fondo y los contenedores se comporten bien en mobile, desktop reducido y desktop normal.

Tareas
Entrada mobile
Revisar src/components/EntryGate.tsx.
Asegurar que el botón “Entrar a nuestro universo” responda en Android/Chrome.
No usar disabled real en el botón si bloquea eventos táctiles.
Implementar una función única attemptEnter().
Validar clave con normalización:
trim()
toLowerCase()
Asegurar submit por:
click
touch
Enter/Go del teclado mobile
Revisar que ningún overlay intercepte taps.
Revisar localStorage en src/app/page.tsx con try/catch.
Responsive
Probar en:
360x740
390x844
430x932
768x1024
1024x700
1366x768
Evitar cortes verticales.
Mantener scroll vertical normal.
Mantener overflow-x-hidden, no overflow-hidden global.
Asegurar que el MusicPlayer no tape contenido importante.
Constelación
Revisar ConstellationTimeline.
Revisar versión mobile.
Asegurar que en mobile se sienta como timeline cósmico, no como cards genéricas.
Asegurar que en desktop reducido no se rompa ni se corte.
Mantener estrellas visitadas, próxima estrella y centro secreto.
Criterios de aceptación
pnpm build pasa.
En desktop se puede entrar con botón.
En desktop se puede entrar con Enter.
En Android/Chrome se puede entrar tocando el botón.
En Android/Chrome se puede entrar con Go/Enter del teclado.
La experiencia se puede recorrer en mobile.
La constelación no se corta en pantallas reducidas.
El fondo no intercepta eventos.
No quedan console.log de debug.
Patch 15 — Real Assets Integration
Objetivo

Reemplazar placeholders por contenido real para empezar a convertir la maqueta visual en un regalo emocional real.

Este patch es más importante que agregar nuevas features visuales.

Tareas
Audio
Agregar canción:
public/audio/first-dance.mp3
Confirmar que el MusicPlayer detecta el archivo.
Confirmar que la canción inicia solo después de interacción.
Ajustar volumen inicial.
Mantener fallback elegante si el archivo falta.
Fotos de boda
Agregar fotos seleccionadas en:
public/images/wedding/
Usar nombres limpios:
wedding-01.jpg
wedding-02.jpg
wedding-03.jpg
Actualizar src/data/wedding.ts.
Confirmar que WeddingSection muestra imágenes reales.
Mantener fallback si falta una imagen.
Fotos de gatitas
Agregar:
public/images/cats/loli.jpg
public/images/cats/minna.jpg
public/images/cats/daphne.jpg
public/images/cats/norah.jpg
public/images/cats/sofi.jpg
Actualizar src/data/cats.ts.
Confirmar que cada gatita muestra su foto real.
Mantener fallback elegante.
Fotos de pareja/recuerdos
Agregar primeras fotos en:
public/images/couple/
public/images/memories/
Cargar al menos:
foto principal de ustedes
3 recuerdos
1 foto emocional o cotidiana
Criterios de aceptación
pnpm build pasa.
La canción carga correctamente.
La sección de boda ya no parece placeholder.
La sección de gatitas muestra fotos reales.
Las imágenes no deforman el layout.
Mobile sigue funcionando fluido.
El regalo empieza a sentirse personal, no maqueta.
Patch 16 — Emotional Content Pass
Objetivo

Pulir todos los textos para que la web deje de sentirse como estructura funcional y pase a sentirse como una experiencia íntima escrita por Diego para Luci.

Tareas
Portal
Revisar título.
Revisar frase inicial.
Revisar mensaje de error de clave.
Revisar si el tono es suficientemente íntimo.
Origen
Pulir historia de Tinder, primer beso, visitas y cirugía.
Mantener tono cinematográfico y real.
Evitar que parezca resumen frío.
Cuidar que la cirugía se cuente con peso emocional, no morbo.
Boda
Agregar año exacto.
Definir qué representa:
3 de abril
6 de abril
Agregar captions a fotos principales.
Conectar boda con votos.
Votos
Confirmar si se usan votos originales exactos o corregidos.
Pulir votos renovados.
Destacar frases clave:
“mi sol, luna y mis estrellas”
“seremos equipo”
“velaría por tu sueño y tu paz”
“hasta que la última estrella del universo se apague”
Gatitas
Revisar texto de:
Loli
Minna
Daphne
Norah
Sofi
Mantener ternura sin infantilizar.
Hacer que cada una tenga personalidad clara.
Futuro
Pulir “La Ventana al Espacio”.
Incluir:
negocio juntos
desarrolladora de software e IA
potencial esotérico de Luci
viajes
ver el espacio desde una ventana
Centro secreto
Pulir mensaje final.
Confirmar firma final.
Hacer que cierre emocionalmente toda la experiencia.
Criterios de aceptación
pnpm build pasa.
No quedan textos placeholder.
Cada sección tiene voz emocional propia.
La web se siente escrita para Luci.
El cierre final emociona.
No parece plantilla romántica.
Patch 17 — Celestial Snapshot System
Objetivo

Agregar una sección que muestre cómo estaba el cielo en fechas importantes mediante capturas 2D y presentación mística dentro de la web.

Enfoque

Esta versión no calcula astronomía real todavía. Usa capturas de referencia obtenidas manualmente desde herramientas externas como Stellarium, Solar System Scope o NASA Eyes.

Tareas
Crear o consolidar:
src/components/CelestialSnapshotSection.tsx
src/components/SkyEventCard.tsx
src/components/SkyViewToggle.tsx
src/components/SolarSystemPostcard.tsx
Crear src/data/celestialEvents.ts.
Preparar eventos:
nacimiento de Luci
boda del 3 de abril
fecha del 6 de abril
Cada evento debe permitir alternar entre:
“Cielo desde la Tierra”
“Sistema Solar”
Rutas esperadas:
/images/sky/luci-birth-sky.jpg
/images/sky/luci-birth-solar-system.jpg
/images/sky/wedding-april-03-sky.jpg
/images/sky/wedding-april-03-solar-system.jpg
/images/sky/wedding-april-06-sky.jpg
/images/sky/wedding-april-06-solar-system.jpg
Mostrar placeholders elegantes si las imágenes faltan.
Mostrar fecha, lugar y texto poético.
Añadir nota discreta:
“Visual creado a partir de captura/representación astronómica de referencia.”
Datos pendientes
Fecha completa de nacimiento de Luci.
Hora de nacimiento de Luci.
Lugar de nacimiento.
Año exacto de boda.
Hora aproximada de boda.
Lugar de boda.
Confirmar significado de 3 de abril y 6 de abril.
Criterios de aceptación
pnpm build pasa.
La sección funciona aunque falten imágenes reales.
Se puede cambiar entre eventos.
Se puede cambiar entre vista de cielo y sistema solar.
No depende de iframes ni APIs externas en runtime.
La presentación se siente mística y astronómica, no como galería común.
Patch 18 — Final Polish, Privacy and Deploy
Objetivo

Dejar el regalo listo para entrega privada.

Tareas
Pulido visual
Revisar espaciados.
Revisar tamaños en mobile.
Revisar contraste.
Revisar animaciones.
Revisar modales.
Revisar progreso/centro secreto.
Ajustar brillo de estrellas si distrae.
Performance
Optimizar imágenes.
Evitar imágenes enormes.
Revisar carga inicial.
Revisar que no haya dependencias innecesarias.
Confirmar que animaciones no traben mobile.
Privacidad
Confirmar robots.txt.
Confirmar metadata noindex.
Confirmar que la URL no se promocione públicamente.
Mantener repo privado si contiene fotos/audio personal.
QA final
Probar desde cero con:
?reset=1
Probar en celular real.
Probar desktop.
Probar pantalla reducida.
Probar botón, música, modales y cierre secreto.
Deploy
Deploy privado/no indexado en Vercel.
Confirmar que assets cargan en producción.
Confirmar que audio funciona en producción.
Confirmar que las rutas de imágenes funcionan.
Criterios de aceptación
pnpm build pasa.
Deploy funciona.
La web se recorre completa en celular.
La música funciona.
Las fotos cargan.
Las secciones abren y cierran.
El final secreto funciona.
La experiencia se siente lista para mostrársela a Luci.
Patch 19 — Calculated Sky Model
Estado

Opcional / post-MVP.

Objetivo

Evolucionar el sistema de cielos desde capturas manuales a posiciones astronómicas calculadas de forma programática.

Tareas
Investigar librería astronómica apropiada.
Definir si el cálculo será:
planetario heliocéntrico
cielo visible desde la Tierra
ambos
Crear estructura de datos para:
fecha
hora
lugar
zona horaria
Generar datos precalculados en JSON para eventos importantes.
Reemplazar o complementar las postales estáticas con una vista calculada.
Criterios de aceptación
La arquitectura queda preparada para cálculo real.
No se rompe la UI existente.
Las visualizaciones calculadas son coherentes.
Sigue habiendo fallback visual si faltan datos completos.
Patch 20 — 3D Ambient Scene Prototype
Estado

Opcional / post-MVP.

Objetivo

Crear una escena 3D liviana que complemente la atmósfera espacial del proyecto sin reemplazar la UI principal.

Tareas
Instalar:
three
@react-three/fiber
@react-three/drei
Crear src/components/SpaceScene.tsx.
Implementar:
estrellas 3D
uno o dos planetas
movimiento de cámara muy suave
sensación espacial inmersiva
Mantener la UI emocional en overlays 2D.
No convertir todo el proyecto en un canvas puro.
Agregar fallback 2D si mobile no rinde bien.
Criterios de aceptación
pnpm build pasa.
La escena no degrada mobile gravemente.
La UI sigue siendo usable y legible.
El 3D aporta atmósfera sin volverse protagonista absoluto.
Patch 21 — 3D Constellation Navigation
Estado

Opcional / experimental.

Objetivo

Explorar una versión tridimensional de la constelación narrativa, usando nodos espaciales y líneas en profundidad.

Tareas
Llevar la constelación 2D a una escena 3D controlada.
Mantener estrellas clickeables.
Mantener líneas conectando los momentos.
Mantener el centro secreto como estrella especial.
Conservar modales/paneles 2D para contenido largo.
Crear fallback a constelación 2D.
Criterios de aceptación
El sistema se entiende visualmente.
No perjudica accesibilidad.
El contenido sigue siendo fácil de consumir.
Si el 3D falla o rinde mal, la versión 2D sigue disponible.
Patch 22 — Decorative 3D Assets Integration
Estado

Opcional / experimental.

Objetivo

Agregar modelos 3D gratuitos decorativos para enriquecer la ambientación del universo.

Posibles assets
ventana de nave espacial
cristal astral
observatorio
astrolabio
altar cósmico
elementos flotantes místicos
Tareas
Buscar modelos gratuitos con licencia adecuada.
Preferir formato .glb.
Mantener pocos assets y livianos.
Integrarlos como ambientación, no como núcleo funcional.
Documentar procedencia/licencia en docs/ASSETS_3D.md.
Criterios de aceptación
Los assets decoran sin sobrecargar.
No rompen rendimiento.
El proyecto se siente más inmersivo.
Las licencias quedan documentadas.
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
