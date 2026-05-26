export type PromiseCard = {
  id: string;
  title: string;
  description: string;
  accent: "violet" | "rose" | "amber" | "sky";
};

export const futurePromises: PromiseCard[] = [
  {
    id: "team",
    title: "Ser equipo",
    description:
      "Elegirnos todos los días, incluso cuando el mundo aprieta, para cuidar nuestra paz y caminar del mismo lado.",
    accent: "violet",
  },
  {
    id: "stability",
    title: "Construir estabilidad",
    description:
      "Levantar una casa emocional y material donde el amor, la calma y nuestras cinco guardianas siempre tengan refugio.",
    accent: "amber",
  },
  {
    id: "create",
    title: "Crear juntos",
    description:
      "Transformar nuestras ideas en proyectos reales, con una visión compartida de negocio, propósito y vida.",
    accent: "sky",
  },
  {
    id: "magic",
    title: "Llevar tu magia más lejos",
    description:
      "Acompañarte para que tu voz, tu intuición y tu talento brillen tan lejos como vos sueñes.",
    accent: "rose",
  },
  {
    id: "world",
    title: "Recorrer el mundo",
    description:
      "Descubrir cada rincón que quieras conocer y guardar nuevos recuerdos en cada cielo que nos reciba.",
    accent: "sky",
  },
  {
    id: "stars",
    title: "Mirar las estrellas con vos",
    description:
      "Cumplir la promesa de ver el espacio desde una ventana, sabiendo que mi vista favorita siempre será tu mirada.",
    accent: "violet",
  },
];
