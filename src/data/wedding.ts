export type WeddingEvent = {
  id: string;
  dateLabel: string;
  title: string;
  meaning: string;
};

export type WeddingPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: "april-3",
    dateLabel: "3 de abril",
    title: "Una fecha que nos eligió",
    meaning: "El día en que nuestra historia dejó de ser solo promesa y empezó a escribirse con la forma tranquila de un hogar.",
  },
];

export const weddingPhotos: WeddingPhoto[] = [
  {
    id: "wedding-1",
    src: "/images/wedding/wedding-1.webp",
    alt: "Recuerdo de boda de Diego y Luci",
    caption: "El día en que elegimos ser hogar, con el corazón entero.",
  },
  {
    id: "wedding-2",
    src: "/images/wedding/wedding-2.webp",
    alt: "Momento especial de la boda civil de Diego y Luci",
    caption: "Una firma, una mirada y la certeza de estar del mismo lado.",
  },
  {
    id: "wedding-3",
    src: "/images/wedding/wedding-3.webp",
    alt: "Sonrisa y complicidad durante la boda de Diego y Luci",
    caption: "Nuestra complicidad vestida de ceremonia.",
  },
  {
    id: "wedding-4",
    src: "/images/wedding/wedding-4.webp",
    alt: "Abrazo de boda de Diego y Luci",
    caption: "Un abrazo para guardar lo que las palabras no alcanzan a decir.",
  },
];
