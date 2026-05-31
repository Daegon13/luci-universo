# Documento maestro — Luci: Mi Sol, Mi Luna y Mis Estrellas

## 1. Propósito del proyecto

Crear una experiencia web privada, romántica, mística y astronómica como regalo de cumpleaños para Luci.

No es una web común ni un portfolio técnico. Es una galaxia biográfica: un universo interactivo construido por Diego para Luci, donde cada planeta, estrella, orbe, foto, canción y frase representa una parte real de la historia que comparten.

El objetivo emocional es que Luci sienta:

> “Esto no lo podría haber hecho nadie más. Esto es nuestro.”

El objetivo técnico es construir una web elegante, liviana, mobile-first, estable y suficientemente interactiva para sentirse mágica sin poner en riesgo la entrega.

---

## 2. Nombre y dirección creativa

### Nombre principal recomendado

# Luci: Mi Sol, Mi Luna y Mis Estrellas

Este nombre nace directamente de los votos de Diego y tiene una carga emocional muy superior a un título genérico.

### Nombre secundario / concepto interno

# Mi Universo Sagrado

Puede usarse como subtítulo, firma o nombre de sección.

### Frase de portada sugerida

> Luci Jennifer Mayada Aragonés, este universo fue creado con todo lo que amo de vos.

### Firma final

> Con amor, Diego.

---

## 3. Concepto narrativo central

La web cuenta la historia de dos personas nacidas lejos, formadas por una cadena improbable de milagros, que se encontraron, se eligieron, se cuidaron, se casaron y construyeron un hogar con cinco guardianas gatunas.

La narrativa no debe sentirse como una lista de secciones. Debe sentirse como una travesía:

1. Entrar al universo.
2. Descubrir el origen de la relación.
3. Recordar la boda.
4. Leer los votos.
5. Escuchar la canción del primer baile.
6. Visitar la constelación de las cinco gatitas.
7. Mirar el cielo de Luci y el cielo de la boda.
8. Imaginar el futuro juntos.
9. Llegar al centro secreto del universo.

### Frase guía del proyecto

> Esta no es una página sobre Luci. Es el universo que nació desde que Diego la eligió.

---

## 4. Tono emocional

El tono debe mezclar:

- Romance profundo.
- Ternura doméstica.
- Humor íntimo.
- Estética mística.
- Imaginario astronómico.
- Promesa de futuro.
- Sensación de destino improbable.

No debe ser cursi vacío. No debe sonar como tarjeta genérica. Debe sonar como Diego hablándole a Luci.

### Palabras clave del tono

- Universo.
- Estrellas.
- Sol.
- Luna.
- Equipo.
- Hogar.
- Guardianas.
- Destino.
- Milagro improbable.
- Última estrella.
- Ventana al espacio.

---

## 5. Estética visual

### Estilo general

Mística + astronómica + romántica + elegante.

### Paleta sugerida

- Azul noche profundo.
- Violeta espacial.
- Rosa lunar.
- Dorado suave.
- Blanco estrella.
- Negro cósmico.

### Elementos visuales

- Fondo estrellado animado.
- Polvo cósmico sutil.
- Orbes flotantes.
- Planetas estilizados.
- Lunas.
- Constelaciones.
- Marcos dorados para fotos.
- Cartas tipo pergamino astral.
- Ventana de nave espacial para la sección de futuro.
- Sistema solar simbólico o calculado para las fechas importantes.

### Evitar

- Estética infantil.
- Exceso de brillos.
- Demasiadas animaciones pesadas.
- 3D complejo innecesario.
- Diseño tipo dashboard.
- Aspecto de plantilla romántica genérica.

---

## 6. Estructura final de la experiencia

## 6.1 Portal de entrada — “La Puerta Estelar”

### Objetivo

Crear un primer impacto íntimo y ceremonial.

### Contenido

- Fondo estrellado.
- Título principal.
- Frase de bienvenida.
- Campo de clave simbólica.
- Botón para entrar.

### Clave sugerida

> mi sol luna y mis estrellas

La clave no es por seguridad real. Es un gesto ritual. Luci debe sentir que está entrando a algo privado.

### Texto sugerido

> Luci Jennifer Mayada Aragonés, antes de entrar tenés que saber algo: este universo fue creado con todo lo que amo de vos.

Botón:

> Entrar a nuestro universo

### Comportamiento técnico

- Al tocar el botón, se activa la experiencia.
- La música puede comenzar después de esta interacción.
- Guardar en localStorage que ya entró, si queremos evitar repetir la clave durante la misma sesión.

---

## 6.2 Música persistente — “La canción del primer baile”

### Canción

“I Can’t Help Falling in Love” — Elvis Presley.

### Objetivo

Que la canción funcione como ancla emocional de toda la experiencia.

### Comportamiento recomendado

- No intentar autoplay antes de interacción del usuario.
- Reproducir después de entrar al universo.
- Volumen inicial bajo.
- Controles discretos: play/pause, mute.
- El reproductor debe quedar fijo, pequeño y elegante.

### Texto para sección musical

> Esta canción no suena igual desde aquel día. Desde entonces, cada nota sabe tu nombre.

### Consideración legal/práctica

Si se usa la canción original en una URL pública, puede haber tema de derechos. Como regalo privado no indexado es bajo riesgo práctico, pero lo ideal es mantener la web privada/no promocionada. Alternativa: usar un archivo local solo para la experiencia privada o una versión instrumental/licenciada.

---

## 6.3 Mapa principal — “Nuestro Universo”

### Objetivo

Ser el centro navegable de la experiencia.

### Forma visual

Un sistema de orbes flotantes, planetas, estrellas y medallones. Cada elemento abre una sección.

### Elementos del mapa

1. Origen de nuestra constelación.
2. Nuestra boda.
3. Votos.
4. Primer baile.
5. Las cinco guardianas.
6. El cielo de Luci.
7. El cielo de nuestra boda.
8. La ventana al espacio.
9. Centro secreto.

### UX Desktop

- Sistema orbital o composición libre flotante.
- Hover con brillo y texto.
- Click abre modal/sección.

### UX Mobile

- No forzar navegación 3D.
- Convertir orbes a grilla/carrusel vertical cómodo.
- Botones grandes, texto legible.
- Animaciones sutiles.

### Frase guía del mapa

> Tocá una estrella para abrir un recuerdo.

---

## 6.4 Sección — “El Origen de Nuestra Constelación”

### Objetivo

Contar cómo empezó todo.

### Datos narrativos

- Diego y Luci se conocieron por Tinder.
- Hablaron durante días, todo el día.
- Diego fue a su casa.
- Se besaron apenas se vieron.
- Diego siguió yendo cada dos días.
- Luego Diego enfermó.
- Con solo siete días de novios, Luci pasó tres días durmiendo en una silla al lado de su cama durante una cirugía de emergencia.

### Enfoque emocional

Esta sección debe mostrar que el amor no se construyó solo en momentos lindos, sino también en cuidado real.

### Texto base sugerido

> Nacimos lejos, en culturas distintas, con historias que no tenían por qué cruzarse. Y aun así, el universo hizo su trabajo raro, torpe y perfecto: nos puso en la misma pantalla, después en la misma conversación, después en la misma casa, y después en el mismo destino.
>
> Nos besamos apenas nos vimos, como si una parte de nosotros ya supiera algo que todavía no sabíamos explicar.
>
> Y cuando la vida se puso seria demasiado pronto, vos estuviste ahí. Con solo siete días siendo novios, dormiste tres días en una silla al lado de mi cama. Ese día entendí algo: no había encontrado solo amor. Había encontrado hogar.

### Visual sugerido

- Dos estrellas separadas que se unen.
- Línea de tiempo corta.
- Mapa simbólico de distancia.
- Animación de dos órbitas que terminan compartiendo centro.

---

## 6.5 Sección — “El Día que Elegimos Ser Hogar”

### Objetivo

Mostrar la boda como punto sagrado de unión.

### Datos

- Boda civil: 3 de abril y 6 de abril.
- Falta confirmar año exacto.
- Falta confirmar qué representa cada fecha.
- Habrá carpeta de fotos seleccionadas de boda dentro del proyecto.

### Visual

- Galería de fotos de boda.
- Foto principal grande.
- Fotos secundarias como polaroids astrales.
- Marcos dorados sutiles.
- Frases pequeñas entre fotos.

### Texto base sugerido

> Ese día no fue solo una firma, ni una ceremonia, ni una foto bonita. Fue el momento en que el universo tuvo testigos de algo que nosotros ya veníamos sintiendo: que éramos equipo, que éramos casa, que lo nuestro no era casualidad.

### Interacción

- Carrusel o grid de fotos.
- Click para ampliar.
- Frases breves al abrir cada foto.

---

## 6.6 Sección — “La Estrella que No se Apaga”

### Objetivo

Mostrar los votos originales y una renovación de votos para el cumpleaños.

### Votos originales base

> Lucía Jennifer Mayada Aragonés, mi sol, luna y mis estrellas, te prometo que nuestra vida será hermosa porque estaremos juntos. Prometo tranquilizarte cuando estés estresada y estresarte cuando estés tranquila. Prometo que siempre tendremos éxito porque seremos equipo.
>
> Estamos hechos de átomos que nacieron hace miles de millones de años, que luego formaron la vida y evolucionaron todo ese tiempo hasta llegar a nosotros. Nacimos a cuatro mil kilómetros de distancia, en culturas que ven la vida de maneras muy distintas, y aun así llegamos a encontrarnos aquí.
>
> Me gusta pensar que cada uno de esos milagros que nos permiten estar aquí hoy fueron solo para que llegáramos a este momento.
>
> Cuando tuve una cirugía de emergencia, solo teníamos siete días siendo novios y pasaste tres días durmiendo en una silla al lado de mi cama. Quiero que sepas que ese día ganaste a alguien que velaría por tu sueño y tu paz el resto de los días de nuestras vidas.
>
> Y te amaré hasta que la última estrella del universo se apague.

### Votos renovados sugeridos

> Hoy, en tu cumpleaños, vuelvo a prometerte lo mismo, pero con más historia en las manos.
>
> Te prometo seguir siendo equipo con vos incluso cuando el mundo se ponga pesado. Te prometo cuidar tu paz, acompañar tu fuego, celebrar tu magia y recordarte quién sos cuando la vida intente hacerte olvidarlo.
>
> Te prometo construir con vos una vida donde nuestras gatitas tengan hogar, donde nuestros sueños tengan lugar, donde tu luz no se apague por miedo, cansancio ni dudas.
>
> Te prometo ayudarte a llegar tan lejos como quieras: en tu magia, en tus proyectos, en tu vida, en tu nombre y en todo lo que todavía no descubriste de vos misma.
>
> Y si algún día logramos mirar el espacio desde una ventana, quiero que sepas que para mí la vista más hermosa va a seguir siendo verte a vos mirando las estrellas.

### Visual

- Carta astral/pergamino.
- Texto con animación de revelado.
- Frases destacadas en grande.

### Frases destacadas

- “Mi sol, luna y mis estrellas.”
- “Siempre tendremos éxito porque seremos equipo.”
- “Velaría por tu sueño y tu paz.”
- “Hasta que la última estrella del universo se apague.”

---

## 6.7 Sección — “Las Cinco Guardianas”

### Objetivo

Presentar a las gatitas como constelación protectora del hogar.

### Orden

1. Loli.
2. Minna.
3. Daphne.
4. Norah.
5. Sofi.

### Arquetipos y textos

## Loli — Guardiana del Vínculo Sagrado

Descripción:
Calicó, arisca con todos, pero profundamente unida a Luci. Tiene una conexión especial con ella.

Texto sugerido:

> Loli no entrega su confianza fácilmente. Por eso, cuando elige amar, ese amor vale como un juramento antiguo. Con Luci tiene una conexión que parece venir de otro lugar, como si la reconociera desde antes.

## Minna — Guardiana de la Dulzura Serena

Descripción:
Pelaje con similitud a una vaca. Dama hecha gatita. Pacífica, suave, con arranques de locura y temor a salir de casa.

Texto sugerido:

> Minna es una dama con bigotes, una ternura suave envuelta en misterio doméstico. Parece tranquila, hasta que el universo le aprieta el botón de locura y sale corriendo como cometa sin control.

## Daphne — Guardiana Solar de la Alegría

Descripción:
Gata amarilla casi blanca. Casi un golden retriever hecho gata. Una de las más grandes de la casa, con mucha energía.

Texto sugerido:

> Daphne llegó al mundo con alma de sol y energía de golden retriever disfrazado de gata. Grande, luminosa y exagerada como todo lo que trae alegría verdadera.

## Norah — Guardiana Salvaje del Misterio

Descripción:
Parece cruza de bengalí y calicó. Pequeña, ojos grandes, carácter salvaje y escurridizo, pero mimosa cuando entra en confianza.

Texto sugerido:

> Norah es pequeña, salvaje y llena de ojos enormes que parecen verlo todo. No se entrega a cualquiera, pero cuando confía, aparece esa ternura secreta que solo conocen quienes tuvieron paciencia para llegar a su mundo.

## Sofi — Guardiana Negra de la Inteligencia y la Resistencia

Descripción:
Gata negra, súper inteligente, primera en aprender comandos. Pequeña aunque adulta debido al VIF desde su nacimiento. Tiene un vínculo muy fuerte con Diego y Luci. Su inteligencia y conexión la ayudaron a sobrellevar enfermedades y comer con ayuda de comandos cuando otros gatos se habrían rendido.

Texto sugerido:

> Sofi es pequeña solo por fuera. Por dentro es una guerrera negra, inteligente, sensible y profundamente conectada a ustedes. Aprendió a responder, a confiar, a luchar y a seguir. Hay almas que no necesitan ser grandes para ser inmensas.

### Visual

- Cinco medallones flotantes.
- Cada gatita con foto circular.
- Título cósmico.
- Frase corta.
- Opción de abrir card extendida.

### Microinteracciones

- Al tocar una foto tierna: “es una dulzura”.
- Al tocar varias veces: pequeñas estrellas o patitas.
- Modo secreto: “Constelación Gatuna completa”.

---

## 6.8 Sección — “El Cielo de Luci”

### Objetivo

Mostrar cómo estaban los astros el día que Luci nació, o una representación inspirada en esa idea.

### Datos faltantes

- Fecha completa de nacimiento.
- Hora de nacimiento, si la tiene.
- Lugar de nacimiento.

### MVP recomendado

Crear una visualización artística del sistema solar, con planetas orbitando y una frase poética.

Texto sugerido:

> Así imaginé el cielo cuando llegaste al mundo: como si algo en el universo hubiera empezado a acomodarse para que un día pudiera encontrarte.

### Versión avanzada

Usar cálculo astronómico aproximado para posiciones planetarias reales por fecha.

Opciones técnicas posibles:

- Librería astronómica JavaScript si encontramos una confiable y liviana.
- Precalcular posiciones con script y guardar datos JSON.
- Usar una representación simbólica inspirada en Solar System Scope.

### Recomendación crítica

No bloquear el proyecto por esta feature. Primero terminar la experiencia emocional. Luego agregar el cielo como módulo wow.

---

## 6.9 Sección — “El Cielo de Nuestra Boda”

### Objetivo

Mostrar los astros del día en que se casaron.

### Datos actuales

- 3 de abril.
- 6 de abril.
- Falta año y significado de cada fecha.

### Enfoque sugerido

Mostrar dos fechas si ambas son importantes:

- “El día que firmamos ante el mundo.”
- “El día que lo celebramos con el alma.”

### Texto sugerido

> El cielo también estuvo ahí. Tal vez no dijo nada, pero brilló en silencio mientras nosotros elegíamos ser hogar.

---

## 6.10 Sección — “La Ventana al Espacio”

### Objetivo

Convertir los sueños futuros en una promesa visual y emocional.

### Datos narrativos

Diego quiere:

- Construir un negocio junto a Luci.
- Crear una desarrolladora de software e IA.
- Trabajar con Luci para que explote su máximo potencial.
- Ayudarla a ser referente de esoterismo en América, si eso es lo que ella desea.
- Llevarla a cada rincón del mundo que quiera.
- Ver el espacio con ella desde una ventana.

### Visual

- Ventana de nave espacial.
- Estrellas y planeta al fondo.
- Siluetas/foto de ambos.
- Timeline de promesas.

### Texto central sugerido

> Algún día quiero mirar el espacio con vos desde una ventana. Y cuando pase, sé que voy a pensar lo mismo que pienso ahora: que de todos los milagros del universo, mi favorito fue encontrarte.

### Promesas en cards

1. Ser equipo.
2. Construir estabilidad.
3. Crear juntos.
4. Llevar tu magia más lejos.
5. Recorrer el mundo.
6. Mirar las estrellas con vos.

---

## 6.11 Centro secreto — “El Centro de Mi Universo”

### Objetivo

Cerrar la experiencia con el mensaje más íntimo.

### Desbloqueo posible

- Al visitar todas las secciones.
- O con botón final visible: “Abrir el centro del universo”.
- O con easter egg: tocar cinco estrellas/gatitas.

### Texto sugerido

> Feliz cumpleaños, mi amor.
>
> No hice esta web para mostrarte lo que sé hacer. La hice porque a veces el amor necesita una forma, una casa, una canción, una estrella donde quedarse.
>
> Vos sos mi sol, mi luna y mis estrellas. Sos mi hogar, mi equipo, mi destino improbable, mi caos favorito y mi paz más verdadera.
>
> Gracias por existir en mi vida. Gracias por elegirme. Gracias por ser vos.
>
> Te amo hasta que la última estrella del universo se apague.
>
> Con amor,
> Diego.

---

## 7. Interacciones especiales

### 7.1 Orbes flotantes

Cada sección se representa como un orbe, planeta, luna, estrella o medallón.

### 7.2 Fotos como planetas/medallones

Las fotos de ustedes y las gatas pueden aparecer como cuerpos celestes:

- Foto circular.
- Borde luminoso.
- Movimiento leve.
- Click para abrir recuerdo.

### 7.3 Frases internas escondidas

Frases para microinteracciones:

- “Muero de amor.”
- “Es una dulzura.”
- Frases venezolanas familiares.
- Frases uruguayas de su familia.

### 7.4 Modo dulzura

Un botón o easter egg que, al activarse, hace aparecer pequeñas frases tiernas por la pantalla.

### 7.5 Estrellas desbloqueables

Al recorrer secciones, se iluminan estrellas en una constelación. Al completarla, se desbloquea el centro secreto.

---

## 8. Prioridades del MVP

Para cumpleaños, el MVP debe priorizar emoción y estabilidad.

### Obligatorio

1. Portal de entrada.
2. Música de fondo.
3. Mapa de universo.
4. Historia/origen.
5. Boda con galería.
6. Votos.
7. Cinco guardianas.
8. Futuro/ventana al espacio.
9. Centro secreto.

### Muy deseable

1. Cielo de Luci simbólico.
2. Cielo de boda simbólico.
3. Animaciones orbitales.
4. Frases internas como easter eggs.

### Avanzado / post-MVP

1. Cálculo astronómico real.
2. Vista planetaria más precisa.
3. Modo carta astral.
4. Transiciones 3D.
5. Audio-reactive visuals.

---

## 9. Stack técnico recomendado

### Base

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- Vercel.

### No usar en MVP

- Backend.
- Base de datos.
- Prisma.
- Auth real.
- Three.js pesado, salvo que haya una razón muy clara.
- Librerías astronómicas complejas en el primer patch.

### Razón

Este proyecto necesita salir perfecto en celular, cargar rápido y no romperse. El impacto emocional no depende de complejidad técnica excesiva.

---

## 10. Estructura de carpetas sugerida

```txt
luci-universo/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    EntryGate.tsx
    Starfield.tsx
    MusicPlayer.tsx
    GalaxyMap.tsx
    FloatingOrb.tsx
    SectionModal.tsx
    OriginSection.tsx
    WeddingSection.tsx
    VowsSection.tsx
    FirstDanceSection.tsx
    CatsSection.tsx
    SkySection.tsx
    FutureSection.tsx
    SecretEnding.tsx
    ProgressConstellation.tsx

  data/
    cats.ts
    vows.ts
    memories.ts
    wedding.ts
    promises.ts
    sections.ts
    skyEvents.ts

  public/
    audio/
      first-dance.mp3
    images/
      wedding/
      cats/
      couple/
      memories/
      sky/
```

---

## 11. Modelo de datos sugerido

### data/cats.ts

```ts
export const cats = [
  {
    id: "loli",
    name: "Loli",
    title: "Guardiana del Vínculo Sagrado",
    image: "/images/cats/loli.webp",
    short: "Arisca con el mundo, profundamente unida a Luci.",
    description:
      "Loli no entrega su confianza fácilmente. Por eso, cuando elige amar, ese amor vale como un juramento antiguo. Con Luci tiene una conexión que parece venir de otro lugar, como si la reconociera desde antes."
  },
  {
    id: "minna",
    name: "Minna",
    title: "Guardiana de la Dulzura Serena",
    image: "/images/cats/minna.webp",
    short: "Una dama hecha gatita, suave, pacífica y un poco cometa cuando se aloca.",
    description:
      "Minna es una dama con bigotes, una ternura suave envuelta en misterio doméstico. Parece tranquila, hasta que el universo le aprieta el botón de locura y sale corriendo como cometa sin control."
  },
  {
    id: "daphne",
    name: "Daphne",
    title: "Guardiana Solar de la Alegría",
    image: "/images/cats/daphne.webp",
    short: "Un golden retriever hecho gata, grande, luminosa y llena de energía.",
    description:
      "Daphne llegó al mundo con alma de sol y energía de golden retriever disfrazado de gata. Grande, luminosa y exagerada como todo lo que trae alegría verdadera."
  },
  {
    id: "norah",
    name: "Norah",
    title: "Guardiana Salvaje del Misterio",
    image: "/images/cats/norah.webp",
    short: "Pequeña, salvaje, escurridiza y mimosa cuando confía.",
    description:
      "Norah es pequeña, salvaje y llena de ojos enormes que parecen verlo todo. No se entrega a cualquiera, pero cuando confía, aparece esa ternura secreta que solo conocen quienes tuvieron paciencia para llegar a su mundo."
  },
  {
    id: "sofi",
    name: "Sofi",
    title: "Guardiana Negra de la Inteligencia y la Resistencia",
    image: "/images/cats/sofi.webp",
    short: "Pequeña, brillante, fuerte y profundamente conectada a Diego y Luci.",
    description:
      "Sofi es pequeña solo por fuera. Por dentro es una guerrera negra, inteligente, sensible y profundamente conectada a ustedes. Aprendió a responder, a confiar, a luchar y a seguir. Hay almas que no necesitan ser grandes para ser inmensas."
  }
];
```

### data/vows.ts

```ts
export const vows = {
  original: `Lucía Jennifer Mayada Aragonés, mi sol, luna y mis estrellas...`,
  renewed: `Hoy, en tu cumpleaños, vuelvo a prometerte lo mismo, pero con más historia en las manos...`,
  highlights: [
    "Mi sol, luna y mis estrellas.",
    "Siempre tendremos éxito porque seremos equipo.",
    "Velaría por tu sueño y tu paz.",
    "Hasta que la última estrella del universo se apague."
  ]
};
```

### data/sections.ts

```ts
export const sections = [
  {
    id: "origin",
    title: "El Origen de Nuestra Constelación",
    type: "planet",
    description: "Donde dos vidas improbables empezaron a orbitar el mismo destino."
  },
  {
    id: "wedding",
    title: "El Día que Elegimos Ser Hogar",
    type: "moon",
    description: "El día en que el universo tuvo testigos."
  },
  {
    id: "vows",
    title: "La Estrella que No se Apaga",
    type: "star",
    description: "Los votos que siguen ardiendo."
  },
  {
    id: "cats",
    title: "Las Cinco Guardianas",
    type: "constellation",
    description: "La constelación viva de nuestro hogar."
  },
  {
    id: "future",
    title: "La Ventana al Espacio",
    type: "portal",
    description: "Todo lo que todavía quiero vivir con vos."
  }
];
```

---

## 12. Plan de patches

## Patch 1 — Base del proyecto y portal de entrada

### Objetivo

Crear la estructura base y una primera experiencia emocional funcional.

### Tareas

- Inicializar proyecto Next.js con TypeScript y Tailwind.
- Instalar Framer Motion.
- Crear `EntryGate`.
- Crear `Starfield`.
- Crear layout base.
- Implementar clave simbólica.
- Preparar estado `hasEntered`.
- Crear placeholder para música.

### Criterios de aceptación

- La app carga en desktop y mobile.
- Se ve fondo estrellado.
- La pantalla de entrada tiene texto romántico.
- La clave permite entrar.
- No hay errores de consola.

### Prompt Codex Patch 1

```txt
Crea la base del proyecto “Luci: Mi Sol, Mi Luna y Mis Estrellas” usando Next.js App Router, TypeScript, Tailwind CSS y Framer Motion.

Objetivo del patch:
Crear una primera experiencia funcional con portal de entrada, fondo estrellado y estructura limpia para futuras secciones.

Requisitos:
- App Router.
- Mobile-first.
- Tailwind configurado.
- Framer Motion instalado.
- No usar backend ni base de datos.
- Crear componentes:
  - components/EntryGate.tsx
  - components/Starfield.tsx
  - components/MusicPlayer.tsx placeholder
- Crear data/sections.ts placeholder.
- Pantalla inicial con título “Luci: Mi Sol, Mi Luna y Mis Estrellas”.
- Texto: “Luci Jennifer Mayada Aragonés, este universo fue creado con todo lo que amo de vos.”
- Campo de clave simbólica.
- Clave aceptada: “mi sol luna y mis estrellas”.
- Botón “Entrar a nuestro universo”.
- Al entrar, mostrar una pantalla placeholder del mapa del universo.
- Estética: azul noche, violeta profundo, dorado suave, fondo estrellado.
- Evitar estética infantil.
- Asegurar buen responsive mobile.

Criterios de aceptación:
- npm run dev funciona.
- npm run build funciona.
- No hay errores de TypeScript.
- La entrada se ve bien en celular.
```

---

## Patch 2 — Música y atmósfera

### Objetivo

Integrar la canción del primer baile y el reproductor persistente.

### Tareas

- Crear `MusicPlayer` completo.
- Usar `/audio/first-dance.mp3`.
- Reproducir solo después de interacción.
- Agregar play/pause/mute.
- Volumen inicial bajo.
- Mantener reproductor fijo.

### Criterios de aceptación

- La música no intenta autoplay ilegal.
- La música comienza después del click de entrada.
- El usuario puede pausar y mutear.
- No rompe mobile.

### Prompt Codex Patch 2

```txt
Implementa el reproductor musical persistente para la web regalo.

Contexto:
La canción del primer baile es “I Can’t Help Falling in Love” de Elvis Presley. El archivo se ubicará en public/audio/first-dance.mp3.

Requisitos:
- Completar components/MusicPlayer.tsx.
- Reproducir audio solo después de interacción del usuario.
- Integrarlo con el estado de entrada: cuando el usuario toca “Entrar a nuestro universo”, el audio puede empezar.
- Volumen inicial: 0.35.
- Controles discretos: play/pause y mute.
- Reproductor fijo en esquina inferior, elegante, no invasivo.
- Manejar errores si el archivo no existe.
- No usar librerías pesadas.
- Debe funcionar en mobile.

Criterios de aceptación:
- npm run build pasa.
- No hay autoplay antes de interacción.
- Play/pause/mute funcionan.
```

---

## Patch 3 — Mapa del universo interactivo

### Objetivo

Crear la navegación principal por orbes/planetas.

### Tareas

- Crear `GalaxyMap`.
- Crear `FloatingOrb`.
- Crear `SectionModal`.
- Cargar secciones desde `data/sections.ts`.
- En desktop: composición orbital/flotante.
- En mobile: grilla/carrusel.

### Criterios de aceptación

- Cada orbe abre una sección placeholder.
- Hay animaciones suaves.
- Mobile es cómodo.

### Prompt Codex Patch 3

```txt
Implementa el mapa principal del universo con orbes interactivos.

Requisitos:
- Crear components/GalaxyMap.tsx.
- Crear components/FloatingOrb.tsx.
- Crear components/SectionModal.tsx.
- Usar data/sections.ts como fuente de secciones.
- Secciones iniciales:
  1. El Origen de Nuestra Constelación
  2. El Día que Elegimos Ser Hogar
  3. La Estrella que No se Apaga
  4. La Canción del Primer Baile
  5. Las Cinco Guardianas
  6. El Cielo de Luci
  7. El Cielo de Nuestra Boda
  8. La Ventana al Espacio
  9. El Centro de Mi Universo
- Desktop: sensación de sistema orbital con orbes flotantes.
- Mobile: convertir a grid/carrusel vertical usable.
- Cada orbe abre un modal con contenido placeholder.
- Animaciones con Framer Motion.
- Mantener estética mística/astronómica elegante.

Criterios de aceptación:
- npm run build pasa.
- Todos los orbes son clickeables.
- El modal abre/cierra correctamente.
- Mobile no queda incómodo.
```

---

## Patch 4 — Origen, boda y fotos

### Objetivo

Agregar narrativa inicial y galería de boda.

### Tareas

- Crear `OriginSection`.
- Crear `WeddingSection`.
- Crear `data/wedding.ts` y `data/memories.ts`.
- Preparar placeholders para fotos.
- Diseñar galería.

### Prompt Codex Patch 4

```txt
Agrega las secciones “El Origen de Nuestra Constelación” y “El Día que Elegimos Ser Hogar”.

Contenido:
Origen:
- Se conocieron por Tinder.
- Hablaron durante días todo el día.
- Diego fue a casa de Luci.
- Se besaron apenas se vieron.
- Diego siguió yendo cada dos días.
- Luego Diego tuvo una cirugía de emergencia.
- Con solo siete días de novios, Luci durmió tres días en una silla al lado de su cama.

Boda:
- Fechas: 3 de abril y 6 de abril, dejando año y significado como campos editables.
- Preparar galería desde /images/wedding/.

Requisitos técnicos:
- Crear components/OriginSection.tsx.
- Crear components/WeddingSection.tsx.
- Crear data/wedding.ts.
- Crear placeholders para imágenes.
- Galería elegante con cards/fotos.
- Abrir estas secciones desde SectionModal.
- Mobile-first.

Criterios:
- npm run build pasa.
- Si faltan imágenes reales, mostrar placeholders elegantes sin romper.
```

---

## Patch 5 — Votos

### Objetivo

Construir el corazón emocional de la web.

### Tareas

- Crear `VowsSection`.
- Crear `data/vows.ts`.
- Mostrar votos originales corregidos.
- Mostrar votos renovados.
- Agregar frases destacadas.

### Prompt Codex Patch 5

```txt
Implementa la sección “La Estrella que No se Apaga” para mostrar votos originales y votos renovados.

Requisitos:
- Crear components/VowsSection.tsx.
- Crear data/vows.ts.
- Diseño tipo carta/pergamino astral.
- Mostrar pestañas o bloques:
  - “Lo que te prometí entonces”
  - “Lo que te prometo ahora”
- Incluir frases destacadas en tarjetas pequeñas.
- Animación suave de revelado con Framer Motion.
- Mantener legibilidad excelente en mobile.

Contenido base:
Usar los votos originales corregidos y una renovación de votos para cumpleaños.

Criterios:
- npm run build pasa.
- Texto largo se lee cómodo en celular.
- No queda visualmente saturado.
```

---

## Patch 6 — Las cinco guardianas

### Objetivo

Crear la sección de las gatitas como constelación familiar.

### Tareas

- Crear `CatsSection`.
- Crear `data/cats.ts`.
- Agregar cinco cards.
- Preparar imágenes.
- Agregar microinteracciones.

### Prompt Codex Patch 6

```txt
Implementa la sección “Las Cinco Guardianas”.

Gatitas:
1. Loli — Guardiana del Vínculo Sagrado.
2. Minna — Guardiana de la Dulzura Serena.
3. Daphne — Guardiana Solar de la Alegría.
4. Norah — Guardiana Salvaje del Misterio.
5. Sofi — Guardiana Negra de la Inteligencia y la Resistencia.

Requisitos:
- Crear components/CatsSection.tsx.
- Crear data/cats.ts.
- Cada card debe tener nombre, título, imagen, descripción corta y descripción extendida.
- Imágenes desde /images/cats/.
- Si falta imagen, usar placeholder elegante.
- Cards con estética de medallones cósmicos.
- Microinteracción al tocar una card: mostrar una frase tipo “es una dulzura” o pequeñas estrellas/patitas.
- Mobile-first.

Criterios:
- npm run build pasa.
- Se ven las cinco gatitas.
- La sección transmite ternura sin volverse infantil.
```

---

## Patch 7 — Futuro y ventana al espacio

### Objetivo

Mostrar la visión futura de Diego y Luci.

### Tareas

- Crear `FutureSection`.
- Crear `data/promises.ts`.
- Diseñar ventana espacial.
- Timeline de promesas.

### Prompt Codex Patch 7

```txt
Implementa la sección “La Ventana al Espacio”.

Contenido emocional:
Diego quiere construir un negocio con Luci, desarrollar una empresa de software e IA, ayudarla a explotar su máximo potencial, apoyarla si desea ser referente de esoterismo en América, llevarla a cada rincón del mundo que quiera y algún día ver el espacio con ella desde una ventana.

Requisitos:
- Crear components/FutureSection.tsx.
- Crear data/promises.ts.
- Visual principal: ventana de nave espacial con estrellas/planeta afuera.
- Timeline o cards de promesas:
  - Ser equipo.
  - Construir estabilidad.
  - Crear juntos.
  - Llevar tu magia más lejos.
  - Recorrer el mundo.
  - Mirar las estrellas con vos.
- Estética emocional, no corporativa.

Criterios:
- npm run build pasa.
- La sección se siente como promesa de vida, no como pitch de negocio.
```

---

## Patch 8 — Cielos astronómicos simbólicos

### Objetivo

Agregar el módulo inspirado en Solar System Scope.

### Tareas

- Crear `SkySection`.
- Crear `data/skyEvents.ts`.
- Mostrar selector de eventos.
- Crear sistema solar artístico.
- Preparar campos para fecha/hora/lugar.

### Prompt Codex Patch 8

```txt
Implementa una primera versión simbólica de “El Cielo de Luci” y “El Cielo de Nuestra Boda”.

Importante:
Esta versión no debe prometer precisión astronómica real todavía. Debe ser una visualización artística inspirada en Solar System Scope.

Requisitos:
- Crear components/SkySection.tsx.
- Crear data/skyEvents.ts.
- Eventos:
  - Día que nació Luci: fecha/hora/lugar pendientes.
  - Boda civil: 3 de abril, año pendiente.
  - Celebración/segunda fecha: 6 de abril, año pendiente.
- Visual: sistema solar 2D estilizado con planetas orbitando lentamente.
- Selector de evento.
- Mostrar frase poética según evento.
- Preparar la arquitectura para reemplazar más adelante posiciones simbólicas por posiciones calculadas.
- Mobile-first y liviano.

Criterios:
- npm run build pasa.
- La visualización se ve linda y no pesada.
- Se aclara en comentarios del código que es simbólica por ahora.
```

---

## Patch 9 — Centro secreto y pulido final

### Objetivo

Cerrar la experiencia y dejar el regalo listo.

### Tareas

- Crear `SecretEnding`.
- Crear sistema de progreso.
- Desbloquear final al visitar secciones.
- Optimizar imágenes.
- Revisar mobile.
- Ajustar textos.
- Deploy.

### Prompt Codex Patch 9

```txt
Implementa el cierre final “El Centro de Mi Universo” y realiza pulido general.

Requisitos:
- Crear components/SecretEnding.tsx.
- Crear components/ProgressConstellation.tsx.
- Registrar en estado local qué secciones fueron visitadas.
- Desbloquear el centro secreto cuando se visiten las secciones principales, o permitir acceso manual con botón si el usuario prefiere.
- Mensaje final de cumpleaños firmado por Diego.
- Optimizar responsive.
- Revisar accesibilidad básica: contraste, botones clickeables, foco visible.
- Revisar performance de imágenes.
- Asegurar que npm run build pase.

Criterios:
- La experiencia completa se puede recorrer de principio a fin.
- El final se desbloquea correctamente.
- Funciona bien en celular.
- No hay errores de consola.
```

---

## 13. Checklist de assets necesarios

### Fotos

- Foto principal de Luci o de ambos.
- 8 a 12 fotos de boda seleccionadas.
- 1 foto de cada gatita:
  - Loli.
  - Minna.
  - Daphne.
  - Norah.
  - Sofi.
- Fotos de recuerdos de pareja.
- Foto del baile, si existe.

### Audio

- first-dance.mp3.

### Datos faltantes

- Año exacto de la boda.
- Qué representa el 3 de abril.
- Qué representa el 6 de abril.
- Fecha de nacimiento completa de Luci.
- Hora de nacimiento de Luci, si la tiene.
- Lugar de nacimiento de Luci.
- Frases venezolanas específicas de la familia de Diego.
- Frases uruguayas específicas de la familia de Luci.
- Confirmar si los votos originales deben quedar exactamente como fueron dichos o corregidos/pulidos.

---

## 14. Riesgos y decisiones críticas

### Riesgo 1: Pasarse de ambición astronómica

La vista tipo Solar System Scope es hermosa, pero puede comerse el proyecto. Debe ser simbólica primero y calculada después.

### Riesgo 2: Demasiadas fotos

Muchas fotos pueden hacer lenta la web y diluir emoción. Mejor pocas, seleccionadas y bien presentadas.

### Riesgo 3: Música con derechos

Para regalo privado está bien como experiencia personal, pero no conviene hacer pública ni promocionar la URL.

### Riesgo 4: Animaciones pesadas

Evitar 3D complejo en MVP. Usar 2D elegante con Framer Motion.

### Riesgo 5: Tono demasiado solemne

Debe haber ternura y humor interno. Frases como “muero de amor” y “es una dulzura” son importantes para que respire como ustedes.

---

## 15. Definición de listo

El regalo está listo cuando:

- Luci puede entrar desde celular sin problemas.
- La música funciona después del primer toque.
- Todas las secciones principales abren y cierran bien.
- La boda, votos, gatitas y futuro tienen contenido real.
- Las fotos cargan rápido.
- El final secreto emociona.
- La web se siente privada, íntima y hecha específicamente para ella.

---

## 16. Decisión estratégica final

Este proyecto debe construirse como MVP emocional primero y simulación astronómica después.

Orden correcto:

1. Emoción.
2. Estabilidad.
3. Mobile.
4. Fotos y música.
5. Interacción.
6. Astronomía simbólica.
7. Astronomía avanzada si hay tiempo.

La prioridad no es demostrar capacidad técnica. La prioridad es que Luci sienta el amor de Diego convertido en una experiencia que pueda tocar, leer, escuchar y recorrer.

