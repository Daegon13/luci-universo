"use client";

import type { CatAlbum } from "@/data/catAlbums";
import { MagicImageFrame } from "@/components/MagicImageFrame";
import { CatVideoPlayer } from "@/components/CatVideoPlayer";

type CatMediaGridProps = {
  album: CatAlbum;
};

export function CatMediaGrid({ album }: CatMediaGridProps) {
  return (
    <div className="space-y-6">
      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">Fotos</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {album.photos.map((photo, index) => (
            <MagicImageFrame
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              variant="cat"
              aspectRatio={index === 0 ? "aspect-square" : "aspect-[4/3]"}
              sizes="(max-width: 640px) calc(100vw - 4rem), (max-width: 1024px) 40vw, 420px"
            />
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-sky-100/75">Videos</p>
        {album.videos.length > 0 ? (
          <div className="mt-3 grid gap-4">
            {album.videos.map((video) => (
              <CatVideoPlayer key={video.src} video={video} />
            ))}
          </div>
        ) : (
          <div className="mt-3 rounded-2xl border border-violet-100/18 bg-white/[0.035] p-4 text-sm leading-relaxed text-violet-100/82">
            Todavía no hay videos cargados para {album.name}. Cuando Diego y Luci agreguen clips cortos, aparecerán acá sin cargar pesado al inicio.
          </div>
        )}
      </section>
    </div>
  );
}
