export type CelestialPrecision = "manual-capture" | "symbolic" | "calculated";

export type CelestialView = {
  image: string;
  alt: string;
};

export type CelestialEvent = {
  id: string;
  title: string;
  dateLabel: string;
  locationLabel: string;
  poeticText: string;
  views: {
    earthSky: CelestialView;
    solarSystem: CelestialView;
  };
  precision: CelestialPrecision;
};

export const celestialEvents: CelestialEvent[] = [
  {
    id: "luci-birth",
    title: "El cielo cuando nació Luci",
    dateLabel: "Fecha completa pendiente",
    locationLabel: "Lugar de nacimiento pendiente",
    poeticText:
      "Así imaginamos ese primer cielo: una noche que ya sabía, en silencio, que tu luz iba a cambiar para siempre este universo.",
    views: {
      earthSky: {
        image: "/images/sky/luci-birth-sky.jpg",
        alt: "Vista simbólica del cielo desde la Tierra el día del nacimiento de Luci",
      },
      solarSystem: {
        image: "/images/sky/luci-birth-solar-system.jpg",
        alt: "Vista simbólica del sistema solar para el nacimiento de Luci",
      },
    },
    precision: "manual-capture",
  },
  {
    id: "wedding-april-03",
    title: "El cielo del 3 de abril",
    dateLabel: "3 de abril (año pendiente)",
    locationLabel: "Ubicación de boda civil pendiente",
    poeticText:
      "El cielo fue testigo sereno del día en que elegimos ser hogar, equipo y promesa viva bajo las mismas estrellas.",
    views: {
      earthSky: {
        image: "/images/sky/wedding-april-03-sky.jpg",
        alt: "Vista simbólica del cielo desde la Tierra para la boda civil del 3 de abril",
      },
      solarSystem: {
        image: "/images/sky/wedding-april-03-solar-system.jpg",
        alt: "Vista simbólica del sistema solar para la boda civil del 3 de abril",
      },
    },
    precision: "manual-capture",
  },
  {
    id: "wedding-april-06",
    title: "El cielo del 6 de abril",
    dateLabel: "6 de abril (año pendiente)",
    locationLabel: "Ubicación de segunda fecha pendiente",
    poeticText:
      "Hay fechas que brillan como un eco sagrado: este cielo guarda la segunda huella de nuestra historia compartida.",
    views: {
      earthSky: {
        image: "/images/sky/wedding-april-06-sky.jpg",
        alt: "Vista simbólica del cielo desde la Tierra para la fecha del 6 de abril",
      },
      solarSystem: {
        image: "/images/sky/wedding-april-06-solar-system.jpg",
        alt: "Vista simbólica del sistema solar para la fecha del 6 de abril",
      },
    },
    precision: "manual-capture",
  },
];
