export type CatPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type CatVideo = {
  src: string;
  poster: string;
  caption?: string;
};

export type CatAlbum = {
  id: string;
  name: string;
  title: string;
  cover: string;
  description: string;
  photos: CatPhoto[];
  videos: CatVideo[];
};

export const catAlbums: CatAlbum[] = [
  {
    id: "loli",
    name: "Loli",
    title: "Guardiana del Vínculo Sagrado",
    cover: "/images/cats/loli.webp",
    description:
      "La presencia que baja el ruido y vuelve casa cualquier rincón. Loli cuida esos silencios donde Diego y Luci se entienden sin explicar demasiado.",
    photos: [
      {
        src: "/images/cats/loli.webp",
        alt: "Loli, guardiana del vínculo sagrado",
        caption: "La calma antigua de nuestra constelación familiar.",
      },
    ],
    videos: [],
  },
  {
    id: "minna",
    name: "Minna",
    title: "Guardiana de la Dulzura Serena",
    cover: "/images/cats/minna.webp",
    description:
      "Una ternura tranquila, firme, de esas que acompañan sin invadir. Minna guarda la parte suave del hogar: las pausas y los abrazos que acomodan el día.",
    photos: [
      {
        src: "/images/cats/minna.webp",
        alt: "Minna, guardiana de la dulzura serena",
        caption: "La dulzura serena que sostiene los días suaves.",
      },
      {
        src: "/images/cats/minna/minna.webp",
        alt: "Retrato de Minna en su álbum familiar",
        caption: "Una pequeña estrella tranquila dentro de casa.",
      },
    ],
    videos: [],
  },
  {
    id: "daphne",
    name: "Daphne",
    title: "Guardiana Solar de la Alegría",
    cover: "/images/cats/daphne.webp",
    description:
      "La chispa que aparece y cambia la energía de toda la habitación. Daphne trae movimiento, humor y esa luz traviesa que impide que el amor se vuelva solemne.",
    photos: [
      {
        src: "/images/cats/daphne.webp",
        alt: "Daphne, guardiana solar de la alegría",
        caption: "La chispa solar de esta familia gatuna.",
      },
      {
        src: "/images/cats/daphne/daphne (2).webp",
        alt: "Retrato de Daphne en su álbum familiar",
        caption: "Alegría con órbita propia.",
      },
    ],
    videos: [],
  },
  {
    id: "norah",
    name: "Norah",
    title: "Guardiana Salvaje del Misterio",
    cover: "/images/cats/norah.webp",
    description:
      "Una órbita libre, elegante y difícil de domesticar; exactamente por eso sagrada. Norah protege la intuición, la magia y esas señales pequeñas de familia.",
    photos: [
      {
        src: "/images/cats/norah.webp",
        alt: "Norah, guardiana salvaje del misterio",
        caption: "Misterio, intuición y elegancia indomesticable.",
      },
      {
        src: "/images/cats/norah/norah.webp",
        alt: "Retrato de Norah en su álbum familiar",
        caption: "Una estrella libre dentro del hogar.",
      },
      {
        src: "/images/cats/norah/norah1.webp",
        alt: "Norah descansando en su universo familiar",
      },
      {
        src: "/images/cats/norah/norah (2).webp",
        alt: "Norah mirando desde su constelación",
      },
    ],
    videos: [],
  },
  {
    id: "sofi",
    name: "Sofi",
    title: "Guardiana Negra de la Inteligencia y la Resistencia",
    cover: "/images/cats/sofi.webp",
    description:
      "Mirada profunda, carácter firme y una lealtad que parece hecha de noche estrellada. Sofi sostiene la fuerza silenciosa de este universo.",
    photos: [
      {
        src: "/images/cats/sofi.webp",
        alt: "Sofi, guardiana negra de la inteligencia y la resistencia",
        caption: "Una noche estrellada con ojos atentos.",
      },
      {
        src: "/images/cats/sofi/sofi.webp",
        alt: "Retrato de Sofi en su álbum familiar",
        caption: "Fuerza silenciosa, inteligencia y ternura.",
      },
      {
        src: "/images/cats/sofi/sofi (2).webp",
        alt: "Sofi en una postal familiar",
      },
      {
        src: "/images/cats/sofi/sofi (4).webp",
        alt: "Sofi acompañando el hogar de Diego y Luci",
      },
    ],
    videos: [],
  },
];
