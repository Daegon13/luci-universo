# Luci Universo

Experiencia web privada, romántica, mística y astronómica creada como regalo para Luci.

## Desarrollo local

Para trabajar en la misma PC:

```bash
pnpm dev
```

Abrir:

```txt
http://localhost:3000
```

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

### Notas de troubleshooting

- La PC y el celular deben estar conectados al mismo WiFi.
- Si la página no abre, revisar el Firewall de Windows y permitir Node.js en redes privadas.
- Confirmar que la IP usada sea la IPv4 de la conexión activa de la PC.

## Scripts principales

```bash
pnpm dev      # desarrollo local en localhost
pnpm dev:lan  # desarrollo accesible desde la red LAN
pnpm build    # build de producción
pnpm start    # servidor de producción después de build
pnpm lint     # lint del proyecto
```
