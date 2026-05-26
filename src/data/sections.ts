export type UniverseSection = {
  id: string;
  title: string;
  fullTitle: string;
  description: string;
  accent: "violet" | "rose" | "amber" | "sky";
  position: {
    x: number;
    y: number;
  };
  size: "small" | "medium" | "large";
  importance: "normal" | "high" | "secret";
};

export const sections: UniverseSection[] = [
  {
    id: "origin",
    title: "Origen",
    fullTitle: "El Origen de Nuestra Constelación",
    description: "Donde dos vidas improbables empezaron a orbitar el mismo destino.",
    accent: "violet",
    position: { x: 14, y: 22 },
    size: "medium",
    importance: "high",
  },
  {
    id: "wedding",
    title: "Boda",
    fullTitle: "El Día que Elegimos Ser Hogar",
    description: "El universo tuvo testigos cuando elegimos ser casa y equipo.",
    accent: "rose",
    position: { x: 33, y: 38 },
    size: "large",
    importance: "high",
  },
  {
    id: "vows",
    title: "Votos",
    fullTitle: "La Estrella que No se Apaga",
    description: "Las promesas que arden con luz propia desde aquel día.",
    accent: "amber",
    position: { x: 50, y: 18 },
    size: "medium",
    importance: "high",
  },
  {
    id: "first-dance",
    title: "Primer Baile",
    fullTitle: "La Canción del Primer Baile",
    description: "Cada nota aprendió tu nombre y nunca volvió a sonar igual.",
    accent: "rose",
    position: { x: 66, y: 33 },
    size: "medium",
    importance: "normal",
  },
  {
    id: "cats",
    title: "Guardianas",
    fullTitle: "Las Cinco Guardianas",
    description: "Loli, Minna, Daphne, Norah y Sofi cuidan este universo.",
    accent: "sky",
    position: { x: 82, y: 20 },
    size: "small",
    importance: "normal",
  },
  {
    id: "sky-luci",
    title: "Cielo de Luci",
    fullTitle: "El Cielo de Luci",
    description: "Una visión poética del cielo que celebró tu llegada al mundo.",
    accent: "violet",
    position: { x: 76, y: 52 },
    size: "small",
    importance: "normal",
  },
  {
    id: "sky-wedding",
    title: "Cielo de la Boda",
    fullTitle: "El Cielo de Nuestra Boda",
    description: "Los astros brillando en silencio el 3 y 6 de abril.",
    accent: "amber",
    position: { x: 58, y: 68 },
    size: "medium",
    importance: "normal",
  },
  {
    id: "future",
    title: "Futuro",
    fullTitle: "La Ventana al Espacio",
    description: "Las promesas de una vida, un negocio y un futuro juntos.",
    accent: "sky",
    position: { x: 31, y: 72 },
    size: "large",
    importance: "high",
  },
  {
    id: "secret-center",
    title: "Centro",
    fullTitle: "El Centro de Mi Universo",
    description: "El lugar donde vive lo que nunca va a apagarse.",
    accent: "rose",
    position: { x: 50, y: 52 },
    size: "large",
    importance: "secret",
  },
];
