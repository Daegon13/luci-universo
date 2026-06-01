"use client";

import { useState } from "react";
import { catAlbums, type CatAlbum } from "@/data/catAlbums";
import { CatAlbumCard } from "@/components/CatAlbumCard";
import { CatAlbumModal } from "@/components/CatAlbumModal";

export function CatAlbumsSection() {
  const [selectedAlbum, setSelectedAlbum] = useState<CatAlbum | null>(null);

  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-sky-100/80">Constelación familiar</p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Las Cinco Guardianas</h3>
        <p className="mt-3 leading-relaxed text-violet-100/90">
          Este rincón ya no es solo una postal: ahora cada guardiana tiene su propio álbum para volver a visitarlas, sumar fotos, guardar videos cortos y seguir haciendo crecer el hogar de Diego y Luci.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {catAlbums.map((album, index) => (
          <CatAlbumCard key={album.id} album={album} index={index} onOpen={setSelectedAlbum} />
        ))}
      </div>

      <CatAlbumModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
    </section>
  );
}
