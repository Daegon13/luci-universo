"use client";

import { MagicImageFrame } from "@/components/MagicImageFrame";

type SolarSystemPostcardProps = {
  image: string;
  alt: string;
  title: string;
};

export function SolarSystemPostcard({ image, alt, title }: SolarSystemPostcardProps) {
  return (
    <MagicImageFrame
      src={image}
      alt={alt}
      caption={title}
      variant="sky"
      aspectRatio="aspect-[4/3]"
      className="mt-5"
      sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 78vw, 760px"
    />
  );
}
