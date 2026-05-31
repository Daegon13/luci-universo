export type CatGuardian = {
  id: string;
  name: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  imageSrc: string;
  imageAlt: string;
};

export const catGuardians: CatGuardian[] = [
  {
    id: "loli",
    name: "Loli",
    title: "Guardiana del Vínculo Sagrado",
    shortDescription: "La presencia que baja el ruido y vuelve casa cualquier rincón.",
    extendedDescription:
      "Loli cuida esos silencios donde Diego y Luci se entienden sin explicar demasiado. Tiene una calma antigua, como si supiera recordarnos que el amor también respira despacio.",
    imageSrc: "/images/cats/loli.webp",
    imageAlt: "Loli, guardiana del vínculo sagrado",
  },
  {
    id: "minna",
    name: "Minna",
    title: "Guardiana de la Dulzura Serena",
    shortDescription: "Una ternura tranquila, firme, de esas que acompañan sin invadir.",
    extendedDescription:
      "Minna guarda la parte suave del hogar: los cafés, las pausas, las risas bajitas y los abrazos que acomodan el día cuando viene pesado.",
    imageSrc: "/images/cats/minna.webp",
    imageAlt: "Minna, guardiana de la dulzura serena",
  },
  {
    id: "daphne",
    name: "Daphne",
    title: "Guardiana Solar de la Alegría",
    shortDescription: "La chispa que aparece y cambia la energía de toda la habitación.",
    extendedDescription:
      "Daphne trae movimiento, humor y esa luz traviesa que impide que el amor se vuelva solemne. Nos recuerda que también somos equipo cuando jugamos y nos reímos juntos.",
    imageSrc: "/images/cats/daphne.webp",
    imageAlt: "Daphne, guardiana solar de la alegría",
  },
  {
    id: "norah",
    name: "Norah",
    title: "Guardiana Salvaje del Misterio",
    shortDescription: "Una órbita libre, elegante y difícil de domesticar; exactamente por eso sagrada.",
    extendedDescription:
      "Norah protege la intuición, la magia y esas señales pequeñas que solo tienen sentido dentro de nuestra familia. No necesita explicarse para hacerse sentir.",
    imageSrc: "/images/cats/norah.webp",
    imageAlt: "Norah, guardiana salvaje del misterio",
  },
  {
    id: "sofi",
    name: "Sofi",
    title: "Guardiana Negra de la Inteligencia y la Resistencia",
    shortDescription: "Mirada profunda, carácter firme y una lealtad que parece hecha de noche estrellada.",
    extendedDescription:
      "Sofi sostiene la fuerza silenciosa de este universo: seguir, cuidar, observar y permanecer incluso cuando la vida pide coraje.",
    imageSrc: "/images/cats/sofi.webp",
    imageAlt: "Sofi, guardiana negra de la inteligencia y la resistencia",
  },
];
