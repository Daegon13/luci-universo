export type SkyEvent = {
  id: string;
  title: string;
  dateLabel: string;
  subtitle: string;
  poeticText: string;
  note: string;
  orbitScale: number;
  primaryColor: string;
  secondaryColor: string;
};

export const skyEvents: SkyEvent[] = [
  {
    id: "luci-birth",
    title: "Día que nació Luci",
    dateLabel: "Fecha completa pendiente",
    subtitle: "El cielo que celebró el primer latido de tu historia.",
    poeticText:
      "Aunque todavía nos falten coordenadas exactas, este cielo simbólico honra el instante en que el universo decidió traer tu luz.",
    note: "Pendiente: fecha completa, hora y lugar de nacimiento.",
    orbitScale: 1,
    primaryColor: "rgba(196,181,253,0.95)",
    secondaryColor: "rgba(244,114,182,0.75)",
  },
  {
    id: "wedding-apr-3",
    title: "Boda civil — 3 de abril",
    dateLabel: "3 de abril (año pendiente)",
    subtitle: "Cuando dos destinos eligieron llamarse hogar.",
    poeticText:
      "Este cielo recuerda el día en que dijimos sí con el corazón completo, prometiendo equipo, paz y futuro en una misma órbita.",
    note: "Pendiente: año exacto y significado especial del 3 de abril.",
    orbitScale: 1.14,
    primaryColor: "rgba(251,191,36,0.9)",
    secondaryColor: "rgba(253,230,138,0.7)",
  },
  {
    id: "wedding-apr-6",
    title: "Segunda fecha — 6 de abril",
    dateLabel: "6 de abril (año pendiente)",
    subtitle: "Una segunda chispa de la misma promesa.",
    poeticText:
      "Hay fechas que no son repetición, sino eco sagrado. Este cielo guarda la segunda huella de nuestra celebración y todo lo que selló.",
    note: "Pendiente: año exacto y qué representa emocionalmente el 6 de abril.",
    orbitScale: 1.28,
    primaryColor: "rgba(125,211,252,0.9)",
    secondaryColor: "rgba(167,139,250,0.72)",
  },
];
