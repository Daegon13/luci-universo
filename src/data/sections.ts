export type UniverseSection = {
  id: string;
  title: string;
  description: string;
  accent: "violet" | "rose" | "amber" | "sky";
};

export const sections: UniverseSection[] = [
  {
    id: "origin",
    title: "El Origen de Nuestra Constelación",
    description: "Donde dos vidas improbables empezaron a orbitar el mismo destino.",
    accent: "violet",
  },
  {
    id: "wedding",
    title: "El Día que Elegimos Ser Hogar",
    description: "El universo tuvo testigos cuando elegimos ser casa y equipo.",
    accent: "rose",
  },
  {
    id: "vows",
    title: "La Estrella que No se Apaga",
    description: "Las promesas que arden con luz propia desde aquel día.",
    accent: "amber",
  },
  {
    id: "first-dance",
    title: "La Canción del Primer Baile",
    description: "Cada nota aprendió tu nombre y nunca volvió a sonar igual.",
    accent: "rose",
  },
  {
    id: "cats",
    title: "Las Cinco Guardianas",
    description: "Loli, Minna, Daphne, Norah y Sofi cuidan este universo.",
    accent: "sky",
  },
  {
    id: "sky-luci",
    title: "El Cielo de Luci",
    description: "Una visión poética del cielo que celebró tu llegada al mundo.",
    accent: "violet",
  },
  {
    id: "sky-wedding",
    title: "El Cielo de Nuestra Boda",
    description: "Los astros brillando en silencio el 3 y 6 de abril.",
    accent: "amber",
  },
  {
    id: "future",
    title: "La Ventana al Espacio",
    description: "Las promesas de una vida, un negocio y un futuro juntos.",
    accent: "sky",
  },
  {
    id: "secret-center",
    title: "El Centro de Mi Universo",
    description: "El lugar donde vive lo que nunca va a apagarse.",
    accent: "rose",
  },
];
