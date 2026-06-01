"use client";

import { m } from "framer-motion";
import type { CatAlbum } from "@/data/catAlbums";
import { MagicImageFrame } from "@/components/MagicImageFrame";

type CatAlbumCardProps = {
  album: CatAlbum;
  index: number;
  onOpen: (album: CatAlbum) => void;
};

export function CatAlbumCard({ album, index, onOpen }: CatAlbumCardProps) {
  return (
    <m.article
      className="rounded-3xl border border-sky-100/25 bg-[#16102d]/88 p-3 shadow-[0_0_24px_rgba(96,165,250,0.10)] sm:p-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      whileHover={{ y: -2, scale: 1.01 }}
    >
      <button
        type="button"
        onClick={() => onOpen(album)}
        className="block w-full rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512]"
        aria-label={`Abrir álbum de ${album.name}`}
      >
        <MagicImageFrame
          src={album.cover}
          alt={`${album.name}, ${album.title}`}
          variant="cat"
          caption={album.title}
          aspectRatio="aspect-square"
          className="rounded-2xl"
          sizes="(max-width: 640px) calc(100vw - 4rem), (max-width: 1024px) 38vw, 360px"
        />
      </button>

      <div className="mt-4">
        <h4 className="mt-1 text-xl font-semibold text-violet-50">{album.name}</h4>
        <p className="mt-2 text-sm leading-relaxed text-violet-100/85">{album.description}</p>
        <button
          type="button"
          onClick={() => onOpen(album)}
          className="mt-4 inline-flex min-h-10 items-center justify-center rounded-2xl border border-sky-100/25 bg-sky-100/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-50 transition hover:border-sky-100/45 hover:bg-sky-100/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512]"
        >
          Abrir álbum
        </button>
      </div>
    </m.article>
  );
}
