export type PromiseCard = {
  id: string;
  title: string;
  description: string;
  accent: "violet" | "rose" | "amber" | "sky";
};

export const futurePromises: PromiseCard[] = [
  {
    id: "team",
    title: "Seguir siendo equipo",
    description:
      "Elegirnos incluso en los días difíciles, hablar con honestidad y cuidar la paz del hogar que estamos construyendo.",
    accent: "violet",
  },
  {
    id: "stability",
    title: "Construir estabilidad",
    description:
      "Levantar una vida donde el amor tenga rutina, calma, refugio y espacio suficiente para nuestras cinco guardianas.",
    accent: "amber",
  },
  {
    id: "create",
    title: "Crear juntos",
    description:
      "Convertir nuestras ideas en algo real: una desarrolladora de software e IA que nazca de nuestro trabajo, no de un pitch vacío.",
    accent: "sky",
  },
  {
    id: "magic",
    title: "Cuidar tu magia",
    description:
      "Acompañar tu intuición, tu voz y tu potencial esotérico para que crezcan a tu ritmo y en la dirección que vos elijas.",
    accent: "rose",
  },
  {
    id: "world",
    title: "Viajar con vos",
    description:
      "Conocer lugares nuevos, perdernos un poco, volver a encontrarnos y guardar cada cielo como una prueba más de nuestra historia.",
    accent: "sky",
  },
  {
    id: "stars",
    title: "Mirar el espacio",
    description:
      "Llegar algún día a una ventana frente al espacio y saber que mi vista favorita sigue siendo verte mirar las estrellas.",
    accent: "violet",
  },
];
