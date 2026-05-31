# IMAGE_OPTIMIZATION.md — Optimización visual WebP

Guía operativa para preparar las imágenes finales de **Luci: Mi Sol, Mi Luna y Mis Estrellas** sin cambiar la estética, los textos emocionales ni el diseño.

## Formato recomendado

- Usar **WebP** para fotos e imágenes estáticas.
- Mantener **SVG** para iconos, logos o gráficos vectoriales.
- Usar **WebM** únicamente para video; no usar WebM para fotos.
- Dejar **AVIF** como opción post-MVP. Puede ahorrar más peso, pero agrega complejidad de compatibilidad, QA y variantes.

## Calidad y tamaños máximos

Exportar WebP con calidad entre `75` y `82`. Usar el valor más bajo si la imagen sigue viéndose bien en mobile; subir hacia `82` si aparecen artefactos visibles en rostros, cielo o detalles importantes.

| Categoría | Carpeta | Ancho máximo | Calidad sugerida |
| --- | --- | ---: | ---: |
| Boda | `public/images/wedding/` | `1600px` | `75-82` |
| Gatitas | `public/images/cats/` | `1200px` | `75-82` |
| Pareja | `public/images/couple/` | `1600px` | `75-82` |
| Recuerdos | `public/images/memories/` | `1400px` | `75-82` |
| Cielos | `public/images/sky/` | `1600px` | `75-82` |

## Convención de nombres

Todos los nombres deben ir en minúscula, sin espacios, con guiones y extensión `.webp` para evitar problemas de mayúsculas/minúsculas en Linux/Vercel.

### Boda

- `public/images/wedding/wedding-1.webp`
- `public/images/wedding/wedding-2.webp`
- `public/images/wedding/wedding-3.webp`
- `public/images/wedding/wedding-4.webp`

### Gatitas

- `public/images/cats/loli.webp`
- `public/images/cats/minna.webp`
- `public/images/cats/daphne.webp`
- `public/images/cats/norah.webp`
- `public/images/cats/sofi.webp`

### Pareja

- `public/images/couple/couple-main.webp`
- `public/images/couple/couple-1.webp`
- `public/images/couple/couple-2.webp`
- `public/images/couple/couple-3.webp`

### Recuerdos

- `public/images/memories/memory-1.webp`
- `public/images/memories/memory-2.webp`
- `public/images/memories/memory-3.webp`
- `public/images/memories/memory-4.webp`
- `public/images/memories/memory-5.webp`

### Cielos

- `public/images/sky/luci-birth-sky.webp`
- `public/images/sky/luci-birth-solar-system.webp`
- `public/images/sky/wedding-april-03-sky.webp`
- `public/images/sky/wedding-april-03-solar-system.webp`
- `public/images/sky/wedding-april-06-sky.webp`
- `public/images/sky/wedding-april-06-solar-system.webp`

## Checklist de verificación

Antes de considerar listo un asset pass:

- [ ] Las imágenes finales existen con nombres `.webp` en minúscula.
- [ ] No quedan referencias a extensiones JPEG en mayúsculas dentro del código ni docs operativos.
- [ ] No quedan referencias a extensiones JPEG en minúsculas para assets que ya tienen convención WebP, salvo originales documentados que todavía no deben borrarse.
- [ ] `pnpm build` pasa.
- [ ] La app muestra fallback elegante si falta una imagen WebP.
- [ ] Las fotos importantes se ven bien en mobile y no cortan rostros esenciales.
- [ ] El peso de las imágenes es razonable para una experiencia mobile-first.
- [ ] El deploy fue verificado antes de borrar cualquier original.

## Comandos sugeridos de conversión manual

> No convertir dentro de Codex si no hay acceso real a procesamiento fiable. Estos comandos son para ejecutar localmente con herramientas instaladas y revisar visualmente el resultado.

### Con Sharp CLI

Instalar si hace falta:

```bash
pnpm dlx sharp-cli --help
```

Ejemplos:

```bash
pnpm dlx sharp-cli -i ./originales/boda-1-origen -o public/images/wedding/wedding-1.webp resize 1600 --withoutEnlargement webp --quality 80
pnpm dlx sharp-cli -i ./originales/loli-origen -o public/images/cats/loli.webp resize 1200 --withoutEnlargement webp --quality 80
pnpm dlx sharp-cli -i ./originales/memory-1-origen -o public/images/memories/memory-1.webp resize 1400 --withoutEnlargement webp --quality 80
pnpm dlx sharp-cli -i ./originales/luci-birth-sky-origen -o public/images/sky/luci-birth-sky.webp resize 1600 --withoutEnlargement webp --quality 80
```

### Con ImageMagick

```bash
magick ./originales/boda-1-origen -auto-orient -resize '1600x1600>' -quality 80 public/images/wedding/wedding-1.webp
magick ./originales/loli-origen -auto-orient -resize '1200x1200>' -quality 80 public/images/cats/loli.webp
magick ./originales/memory-1-origen -auto-orient -resize '1400x1400>' -quality 80 public/images/memories/memory-1.webp
magick ./originales/luci-birth-sky-origen -auto-orient -resize '1600x1600>' -quality 80 public/images/sky/luci-birth-sky.webp
```

### Verificación rápida de referencias

```bash
rg -n '\.(JPG|jpg)' src/data src/components docs
pnpm build
```

## Regla de seguridad

No borrar imágenes originales automáticamente. Mantenerlas hasta verificar:

1. conversión local,
2. revisión visual,
3. build,
4. deploy,
5. recorrido mobile completo.
