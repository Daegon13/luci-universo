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
    title: "Fecha sagrada",
    meaning: "Pendiente de confirmar juntos el detalle exacto de este día para honrarlo como merece.",
  },
  {
    id: "april-6",
    dateLabel: "6 de abril",
    title: "Fecha sagrada",
    meaning: "Pendiente de confirmar juntos el detalle exacto de este día para honrarlo como merece.",
  },
];

export const weddingPhotos: WeddingPhoto[] = [
  {
    id: "wedding-1",
    src: "/images/wedding/wedding-1.jpg",
    alt: "Recuerdo de boda de Diego y Luci",
    caption: "Este lugar espera una foto real de ese día inolvidable.",
  },
  {
    id: "wedding-2",
    src: "/images/wedding/wedding-2.jpg",
    alt: "Momento especial de la boda civil",
    caption: "Acá vivirá uno de los momentos que eligieron como hogar.",
  },
  {
    id: "wedding-3",
    src: "/images/wedding/wedding-3.jpg",
    alt: "Sonrisa y complicidad durante la boda",
    caption: "Un espacio para la foto que mejor cuente su complicidad.",
  },
  {
    id: "wedding-4",
    src: "/images/wedding/wedding-4.jpg",
    alt: "Abrazo de boda",
    caption: "Otra estrella reservada para su galería de recuerdos reales.",
  },
];
