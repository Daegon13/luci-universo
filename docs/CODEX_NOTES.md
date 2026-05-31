# CODEX_NOTES.md — Flujo seguro de desarrollo LAN

## Stability and Heavy Asset Guard

Este proyecto usa Next 16, donde Turbopack puede activarse por defecto y detectar mal el root del workspace si existe un `package-lock.json` en una carpeta superior del sistema (por ejemplo `C:\Users\Usuario`). Para pruebas estables en celular por LAN, usar el flujo seguro con Webpack y limpieza de procesos/cache.

### Flujo seguro en Windows PowerShell

```powershell
taskkill /IM node.exe /F
Remove-Item -Recurse -Force .next
pnpm dev:lan
```

Luego abrir desde el celular conectado a la misma red WiFi que la PC:

```text
http://192.168.1.2:3000/?reset=1
```

Si la URL no carga desde el celular, revisar el Firewall de Windows y permitir Node.js en redes privadas.

### Scripts disponibles

- `pnpm dev`: levanta Next con Webpack para evitar Turbopack durante el desarrollo normal.
- `pnpm dev:turbo`: levanta Next con Turbopack para pruebas explícitas.
- `pnpm dev:lan`: levanta Next con Webpack escuchando en `0.0.0.0` para pruebas desde celulares en la LAN.
- `pnpm dev:lan:turbo`: levanta Next con Turbopack escuchando en `0.0.0.0`, solo si se quiere probar Turbopack.
- `pnpm build`: build normal de producción.
- `pnpm build:webpack`: build de producción forzando Webpack.

### Guardrails configurados

- `allowedDevOrigins` queda tipado como `NextConfig["allowedDevOrigins"]`, toma `NEXT_ALLOWED_DEV_ORIGINS` cuando existe y usa `192.168.1.2` como fallback para evitar bloqueos durante pruebas LAN.
- `turbopack.root` queda fijado a `process.cwd()` para que el root del proyecto no dependa de archivos externos al repo.
- `images.maximumResponseBody` queda limitado a `6_000_000` bytes para que Next no intente optimizar respuestas de imágenes demasiado grandes sin control. Esta opción es aceptada por Next 16.2.6; si una versión futura la rechazara, la protección principal seguirá siendo comprimir los assets grandes.

## Assets pesados pendientes

No borrar assets automáticamente. Las fotos pesadas deben comprimirse manualmente y reemplazarse de forma controlada.

- `public/images/wedding/wedding-3.webp` supera 2 MB y debe comprimirse a menos de 500 KB antes de la entrega final.
- `public/images/wedding/wedding-4.webp` supera 2 MB y debe comprimirse a menos de 500 KB antes de la entrega final.

## Runtime Performance Pass

- Para revisar el costo real de runtime y chunks en un entorno parecido a producción, usar `pnpm build` y luego `pnpm start`; `next dev` puede sentirse bastante más lento por el servidor de desarrollo.
- Para inspeccionar bundles con Turbopack, ejecutar `pnpm analyze:turbo`. Si una versión futura de Next requiere flags extra para este comando experimental, mantener el script como punto de entrada y ajustar la configuración mínima necesaria.
- En mobile, validar taps y scroll con el sitio servido desde `pnpm start` o desde el deploy de Vercel, no solo desde `pnpm dev`.

### Performance guardrails de cierre

- Las mediciones de fluidez deben hacerse con `pnpm build` + `pnpm start` o en el deploy; `pnpm dev` puede hidratar y compilar bajo demanda, por eso no representa el rendimiento real en celular.
- Al abrir una sección modal, el fondo decorativo debe quedar en modo suave: el starfield conserva capas estáticas y glow, pero partículas/drift/bursts no esenciales se pausan hasta cerrar el modal.
- Los chunks visuales pesados se cargan bajo demanda desde `SectionModal` y se precargan de forma ociosa solo después de entrar al universo, usando `requestIdleCallback` con fallback a `setTimeout`.
- Mantener `content-visibility: auto` fuera de wrappers críticos de modal; usarlo solo en bloques largos ubicados debajo del contenido inicial visible, como galerías o postales pesadas.

## Gift Mode / Delivery Pass

### Reset antes de entrega

Para presentar la experiencia desde cero, abrir la URL final o local con `?reset=1`:

```text
https://TU_URL_FINAL/?reset=1
```

El reset borra las claves locales del proyecto (`luci-universo-has-entered`, `luci-universo-visited-sections` y cualquier clave futura con prefijo `luci-universo-`). Esto devuelve la experiencia al portal de entrada, bloquea nuevamente el centro secreto hasta recorrer las secciones y elimina estados usados durante QA.

Abrir sin `?reset=1` conserva el estado del navegador cuando existe, para que Luci pueda volver a una travesía ya iniciada.

### QA final de entrega

- Para prueba real, usar `pnpm build` + `pnpm start` o deploy. `pnpm dev:lan` queda solo para desarrollo LAN.
- Revisar que no haya rutas rotas de `public/audio/first-dance.mp3` ni de imágenes en `public/images/wedding`, `public/images/cats`, `public/images/couple` y `public/images/sky`.
- Confirmar que la música solo se active después de una interacción, con volumen bajo, play/pause y mute.
- Confirmar en celular: clave, constelación, modales, textos largos, snapshots celestiales, música y centro secreto.
- Confirmar privacidad: `public/robots.txt`, metadata `noindex, nofollow`, repo/deploy privado o link no promocionado.

### Assets protegidos

No borrar estos assets antes de una revisión visual completa en celular y desktop:

- `public/audio/first-dance.mp3`
- `public/images/wedding/wedding-1.webp` a `public/images/wedding/wedding-4.webp`
- `public/images/cats/loli.webp`, `minna.webp`, `daphne.webp`, `norah.webp`, `sofi.webp`
- `public/images/couple/couple-main.webp` y `public/images/couple/couple-1.webp`
- `public/images/sky/luci-birth-sky.webp` y `public/images/sky/luci-birth-solar-system.webp`
