# Luci Universo

Experiencia web privada, romántica, mística y astronómica creada como regalo para Luci.

## Gift Mode / entrega privada

Antes de mostrársela a Luci, abrir una vez la URL final con `?reset=1`:

```txt
https://TU_URL_FINAL/?reset=1
```

Ese reset limpia la entrada guardada, las secciones visitadas, el centro secreto desbloqueado y cualquier estado local del proyecto que empiece con `luci-universo-`. Después de limpiar, la app quita el parámetro de la barra del navegador y deja visible la primera experiencia desde el portal de entrada.

Si se abre la web sin `?reset=1`, conserva el estado del navegador cuando corresponda: entrada ya realizada, estrellas visitadas y centro secreto desbloqueado.

## Desarrollo local

Instalar dependencias si hace falta:

```bash
pnpm install
```

Para trabajar en la misma PC:

```bash
pnpm dev
```

Abrir:

```txt
http://localhost:3000
```

## Prueba de producción local

Para una revisión real antes de entregar o deployar, usar build/start:

```bash
pnpm build
pnpm start
```

Abrir:

```txt
http://localhost:3000/?reset=1
```

`pnpm dev:lan` queda reservado para desarrollo y pruebas rápidas en red local. Para prueba final usar `pnpm build` + `pnpm start` o el deploy.

## Preview desde celular en la misma red LAN

Usá este flujo cuando quieras probar la experiencia desde un Android o iPhone conectado al mismo WiFi que la PC.

### 1. Encontrar la IP local de la PC

En PowerShell:

```powershell
ipconfig
```

Buscá la dirección IPv4 de la placa conectada al WiFi. Por ejemplo:

```txt
192.168.1.25
```

### 2. Permitir el origen LAN para Next.js y levantar el servidor

En la misma terminal de PowerShell, reemplazá `TU_IP_LOCAL` por la IPv4 encontrada:

```powershell
$env:NEXT_ALLOWED_DEV_ORIGINS="http://TU_IP_LOCAL:3000"
pnpm dev:lan
```

Ejemplo completo:

```powershell
$env:NEXT_ALLOWED_DEV_ORIGINS="http://192.168.1.25:3000"
pnpm dev:lan
```

El script `dev:lan` ejecuta Next.js escuchando en `0.0.0.0`, lo que permite conexiones desde otros dispositivos de la red local.

### 3. Abrir desde el celular

Desde el navegador del celular, abrir la URL con la IP local de la PC:

```txt
http://192.168.1.25:3000/?reset=1
```

No uses `localhost` desde el celular: en un teléfono, `localhost` apunta al propio celular, no a la PC.

### Checklist mobile final

- Entrar con la clave.
- Recorrer la constelación completa.
- Abrir y cerrar cada sección.
- Leer textos largos sin que el reproductor tape contenido.
- Cambiar snapshots celestiales.
- Reproducir, pausar y silenciar la música.
- Llegar al centro secreto.
- Volver arriba o seguir navegando sin trabas.

## Deploy privado

El proyecto está marcado como privado en `package.json`, tiene `robots.txt` bloqueando indexación y metadata `noindex, nofollow`. Aun así, la entrega debe mantenerse como link privado: no publicarlo, no promocionarlo y mantener el repo/deploy privado cuando contenga fotos o audio personal.

Flujo recomendado:

```bash
pnpm build
```

Luego deployar en Vercel desde el repo privado o con el método manual que se esté usando. Al terminar, guardar el link final y probarlo en celular con `?reset=1` antes de compartirlo.

## Assets que no deben borrarse

Mantener estos archivos y carpetas porque la experiencia depende de ellos:

- `public/audio/first-dance.mp3`
- `public/images/wedding/wedding-1.webp` a `public/images/wedding/wedding-4.webp`
- `public/images/cats/loli.webp`, `minna.webp`, `daphne.webp`, `norah.webp`, `sofi.webp`
- `public/images/couple/couple-main.webp` y `public/images/couple/couple-1.webp`
- `public/images/sky/luci-birth-sky.webp` y `public/images/sky/luci-birth-solar-system.webp`
- `public/images/memories/` si se agregan recuerdos finales

No borrar originales o duplicados de assets personales hasta confirmar build, deploy y revisión visual en celular.

### Notas de troubleshooting

- La PC y el celular deben estar conectados al mismo WiFi.
- Si la página no abre, revisar el Firewall de Windows y permitir Node.js en redes privadas.
- Confirmar que la IP usada sea la IPv4 de la conexión activa de la PC.

## Scripts principales

```bash
pnpm dev            # desarrollo local en localhost
pnpm dev:lan        # desarrollo accesible desde la red LAN
pnpm build          # build de producción
pnpm start          # servidor de producción después de build
pnpm lint           # lint del proyecto
pnpm optimize:images # optimización controlada de imágenes
```
