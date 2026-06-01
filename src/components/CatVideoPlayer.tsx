"use client";

import { useState } from "react";
import type { CatVideo } from "@/data/catAlbums";

type CatVideoPlayerProps = {
  video: CatVideo;
};

export function CatVideoPlayer({ video }: CatVideoPlayerProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-amber-100/20 bg-amber-100/[0.06] p-4 text-center text-sm leading-relaxed text-amber-100/90">
        Este video todavía no pudo abrirse desde esta estrella. Probá con otro recuerdo del álbum.
      </div>
    );
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-sky-100/20 bg-[#080512]/55 p-2 shadow-[0_0_22px_rgba(96,165,250,0.10)]">
      <video
        className="aspect-video w-full rounded-xl bg-black object-cover"
        controls
        playsInline
        preload="metadata"
        poster={video.poster}
        onError={() => setHasError(true)}
      >
        <source src={video.src} type="video/mp4" />
        Tu navegador no pudo reproducir este video.
      </video>
      {video.caption ? <figcaption className="px-2 py-3 text-xs leading-relaxed text-violet-100/82 sm:text-sm">{video.caption}</figcaption> : null}
    </figure>
  );
}
