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

- `public/images/wedding/wedding-3.jpg` supera 2 MB y debe comprimirse a menos de 500 KB antes de la entrega final.
- `public/images/wedding/wedding-4.jpg` supera 2 MB y debe comprimirse a menos de 500 KB antes de la entrega final.
