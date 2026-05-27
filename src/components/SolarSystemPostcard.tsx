"use client";

import { useMemo, useState } from "react";

type SolarSystemPostcardProps = {
  image: string;
  alt: string;
  title: string;
};

export function SolarSystemPostcard({ image, alt, title }: SolarSystemPostcardProps) {
  const [hasError, setHasError] = useState(false);

  const placeholderStars = useMemo(
    () => ["left-[12%] top-[18%]", "left-[30%] top-[68%]", "left-[72%] top-[32%]", "left-[84%] top-[72%]", "left-[54%] top-[14%]"],
    [],
  );

  return (
    <div className="relative mt-5 overflow-hidden rounded-3xl border border-amber-100/25 bg-[#060914] p-2 shadow-[0_0_45px_rgba(246,177,122,0.16)]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-rose-200/15" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-violet-100/20 bg-[#080b18]">
        {!hasError ? (
          <img src={image} alt={alt} className="h-full w-full object-cover" onError={() => setHasError(true)} />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.16),transparent_42%),radial-gradient(circle_at_75%_78%,rgba(59,130,246,0.24),transparent_44%),linear-gradient(180deg,#060914,#0d1329)]">
            {placeholderStars.map((star) => (
              <span key={star} className={`absolute h-1.5 w-1.5 rounded-full bg-white/75 shadow-[0_0_10px_rgba(255,255,255,0.8)] ${star}`} />
            ))}
            <div className="text-center">
              <p className="text-sm font-medium text-violet-50">Postal celeste en preparación</p>
              <p className="mt-1 text-xs text-violet-200/80">Añade la captura en public/images/sky</p>
            </div>
          </div>
        )}
      </div>
      <p className="mt-3 px-1 text-xs uppercase tracking-[0.16em] text-violet-200/75">{title}</p>
    </div>
  );
}
