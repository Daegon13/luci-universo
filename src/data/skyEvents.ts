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
    dateLabel: "El primer cielo de Luci",
    subtitle: "El cielo que celebró el primer latido de tu historia.",
    poeticText:
      "Esta representación simbólica honra el instante en que el universo decidió traer tu luz, sin prometer precisión astronómica calculada.",
    note: "Representación simbólica de referencia; los datos completos se confirmarán antes de una versión astronómica calculada.",
    orbitScale: 1,
    primaryColor: "rgba(196,181,253,0.95)",
    secondaryColor: "rgba(244,114,182,0.75)",
  },
  {
    id: "wedding-apr-3",
    title: "Boda civil — 3 de abril",
    dateLabel: "3 de abril",
    subtitle: "Cuando dos destinos eligieron llamarse hogar.",
    poeticText:
      "Este cielo de referencia recuerda el día en que dijimos sí con el corazón completo, prometiendo equipo, paz y futuro en una misma órbita.",
    note: "Representación simbólica de referencia; el detalle completo de la fecha se confirmará antes de una versión calculada.",
    orbitScale: 1.14,
    primaryColor: "rgba(251,191,36,0.9)",
    secondaryColor: "rgba(253,230,138,0.7)",
  },
];
