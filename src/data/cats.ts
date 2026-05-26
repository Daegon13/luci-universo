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
    shortDescription: "La primera mirada que recuerda que el amor también es calma en casa.",
    extendedDescription:
      "Loli cuida los silencios donde Diego y Luci se vuelven refugio. Cuando todo va rápido, su presencia devuelve el ritmo tierno de hogar.",
    imageSrc: "/images/cats/loli.jpg",
    imageAlt: "Loli, guardiana del vínculo sagrado",
  },
  {
    id: "minna",
    name: "Minna",
    title: "Guardiana de la Dulzura Serena",
    shortDescription: "Una luz suave que enseña que la ternura también puede ser fortaleza.",
    extendedDescription:
      "Minna representa la paciencia amorosa: esa forma de cuidarse entre risas, café y abrazos largos cuando el día pesa.",
    imageSrc: "/images/cats/minna.jpg",
    imageAlt: "Minna, guardiana de la dulzura serena",
  },
  {
    id: "daphne",
    name: "Daphne",
    title: "Guardiana Solar de la Alegría",
    shortDescription: "Su energía brillante convierte cualquier rincón en celebración.",
    extendedDescription:
      "Daphne recuerda que el amor también juega. Es la chispa que mantiene viva la alegría cotidiana y el humor íntimo del universo de los dos.",
    imageSrc: "/images/cats/daphne.jpg",
    imageAlt: "Daphne, guardiana solar de la alegría",
  },
  {
    id: "norah",
    name: "Norah",
    title: "Guardiana Salvaje del Misterio",
    shortDescription: "Una órbita libre, elegante y enigmática que protege lo sagrado.",
    extendedDescription:
      "Norah custodia lo que no necesita explicación: la intuición, la magia y los pequeños milagros que solo Diego y Luci entienden.",
    imageSrc: "/images/cats/norah.jpg",
    imageAlt: "Norah, guardiana salvaje del misterio",
  },
  {
    id: "sofi",
    name: "Sofi",
    title: "Guardiana Negra de la Inteligencia y la Resistencia",
    shortDescription: "Mirada profunda, corazón firme y lealtad de estrella eterna.",
    extendedDescription:
      "Sofi simboliza resiliencia: la fuerza tranquila de seguir adelante juntos, incluso cuando la vida exige coraje y constancia.",
    imageSrc: "/images/cats/sofi.jpg",
    imageAlt: "Sofi, guardiana negra de la inteligencia y la resistencia",
  },
];
