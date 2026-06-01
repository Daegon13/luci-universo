"use client";

import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import type { CatAlbum } from "@/data/catAlbums";
import { CatMediaGrid } from "@/components/CatMediaGrid";

type CatAlbumModalProps = {
  album: CatAlbum | null;
  onClose: () => void;
};

export function CatAlbumModal({ album, onClose }: CatAlbumModalProps) {
  return (
    <AnimatePresence>
      {album ? (
        <m.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#05030c]/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <m.article
            className="max-h-[88dvh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-sky-100/25 bg-[#100b23]/96 p-4 text-violet-50 shadow-[0_0_60px_rgba(96,165,250,0.16)] sm:p-6"
            initial={{ opacity: 0, y: 26, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`cat-album-${album.id}`}
          >
            <div className="sticky top-0 z-10 -mx-4 -mt-4 mb-5 flex items-start justify-between gap-4 border-b border-violet-100/14 bg-[#100b23]/92 px-4 py-4 backdrop-blur sm:-mx-6 sm:-mt-6 sm:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sky-100/75">Álbum estelar</p>
                <h3 id={`cat-album-${album.id}`} className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  {album.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-amber-100/90">{album.title}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-200/25 bg-violet-950/45 text-violet-100 transition hover:border-rose-200/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512]"
                aria-label={`Cerrar álbum de ${album.name}`}
              >
                <X size={18} />
              </button>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-violet-100/88 sm:text-base">{album.description}</p>
            <CatMediaGrid album={album} />
          </m.article>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
