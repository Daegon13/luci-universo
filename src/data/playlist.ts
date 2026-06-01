export type PlaylistTrack = {
  id: string;
  title: string;
  artist: string;
  src: string;
  note?: string;
  fallbackSrc?: string;
};

export const playlist: PlaylistTrack[] = [
  {
    id: "cant-help-falling-in-love",
    title: "I Can’t Help Falling in Love",
    artist: "Elvis Presley",
    src: "/audio/playlist/01-cant-help-falling-in-love.mp3",
    fallbackSrc: "/audio/first-dance.mp3",
    note: "La canción del primer baile: desde ese día, cada nota sabe tu nombre.",
  },
  {
    id: "wedding-memory-02",
    title: "Canción especial 02",
    artist: "Diego y Luci",
    src: "/audio/playlist/02-song-name.mp3",
    note: "Un espacio reservado para otra canción que guarde una parte de nuestra historia.",
  },
  {
    id: "wedding-memory-03",
    title: "Canción especial 03",
    artist: "Diego y Luci",
    src: "/audio/playlist/03-song-name.mp3",
    note: "Otra estrella musical para seguir convirtiendo esta web en nuestro universo privado.",
  },
];
