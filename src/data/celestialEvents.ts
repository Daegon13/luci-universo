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

// TODO(content): completar fecha/hora/lugar de nacimiento de Luci y año/lugar/significado exacto del 3 y 6 de abril.
// Estas postales son capturas o representaciones de referencia; no prometen precisión astronómica calculada.
export const celestialEvents: CelestialEvent[] = [
  {
    id: "luci-birth",
    title: "El cielo cuando nació Luci",
    dateLabel: "El primer cielo de Luci",
    locationLabel: "Representación astronómica de referencia",
    poeticText:
      "Así miramos ese cielo: como una captura simbólica del instante en que tu luz empezó a cambiar, en silencio, todo este universo.",
    views: {
      earthSky: {
        image: "/images/sky/luci-birth-sky.webp",
        alt: "Representación astronómica de referencia del cielo desde la Tierra para el nacimiento de Luci",
      },
      solarSystem: {
        image: "/images/sky/luci-birth-solar-system.webp",
        alt: "Representación astronómica de referencia del sistema solar para el nacimiento de Luci",
      },
    },
    precision: "manual-capture",
  },
  {
    id: "wedding-april-03",
    title: "El cielo del 3 de abril",
    dateLabel: "3 de abril",
    locationLabel: "Captura de referencia para nuestra boda civil",
    poeticText:
      "Así miramos ese cielo: una representación astronómica del día en que elegimos ser hogar, equipo y promesa viva bajo las mismas estrellas.",
    views: {
      earthSky: {
        image: "/images/sky/wedding-april-03-sky.webp",
        alt: "Representación astronómica de referencia del cielo desde la Tierra para la boda civil del 3 de abril",
      },
      solarSystem: {
        image: "/images/sky/wedding-april-03-solar-system.webp",
        alt: "Representación astronómica de referencia del sistema solar para la boda civil del 3 de abril",
      },
    },
    precision: "manual-capture",
  },
  {
    id: "wedding-april-06",
    title: "El cielo del 6 de abril",
    dateLabel: "6 de abril",
    locationLabel: "Captura de referencia para nuestra segunda huella",
    poeticText:
      "Así miramos ese cielo: como una postal simbólica del eco sagrado que dejó esta fecha en nuestra historia.",
    views: {
      earthSky: {
        image: "/images/sky/wedding-april-06-sky.webp",
        alt: "Representación astronómica de referencia del cielo desde la Tierra para la fecha del 6 de abril",
      },
      solarSystem: {
        image: "/images/sky/wedding-april-06-solar-system.webp",
        alt: "Representación astronómica de referencia del sistema solar para la fecha del 6 de abril",
      },
    },
    precision: "manual-capture",
  },
];
