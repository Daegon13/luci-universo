"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp, ListMusic, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { m } from "framer-motion";
import { MagicButton } from "@/components/MagicButton";
import { playlist } from "@/data/playlist";
import type { PerformanceMode } from "@/hooks/usePerformanceMode";

const SELECTED_TRACK_KEY = "luci-universo-selected-track";
const INITIAL_VOLUME = 0.2;
const WAVE_BARS = [0.65, 1, 0.75, 0.9, 0.58];

type MusicPlayerProps = {
  hasUserInteracted: boolean;
  autoPlaySignal: number;
  performanceMode?: PerformanceMode;
};

export function MusicPlayer({ hasUserInteracted, autoPlaySignal, performanceMode = "balanced" }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState(() => {
    if (typeof window === "undefined") return playlist[0]?.id ?? "";

    try {
      const savedTrackId = window.localStorage.getItem(SELECTED_TRACK_KEY);
      if (savedTrackId && playlist.some((track) => track.id === savedTrackId)) return savedTrackId;
    } catch {
      // El reproductor debe funcionar aunque localStorage no esté disponible.
    }

    return playlist[0]?.id ?? "";
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [isMinimized, setIsMinimized] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches,
  );
  const isLite = performanceMode === "lite";

  const selectedIndex = useMemo(() => {
    const index = playlist.findIndex((track) => track.id === selectedTrackId);
    return index >= 0 ? index : 0;
  }, [selectedTrackId]);
  const selectedTrack = playlist[selectedIndex] ?? playlist[0];
  const audioSrc = isUsingFallback && selectedTrack?.fallbackSrc ? selectedTrack.fallbackSrc : selectedTrack?.src;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = INITIAL_VOLUME;
    setIsReady(true);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(SELECTED_TRACK_KEY, selectedTrackId);
    } catch {
      // Recordar canción es un detalle, no una dependencia crítica.
    }
  }, [selectedTrackId]);

  useEffect(() => {
    if (!hasUserInteracted || autoPlaySignal === 0) return;

    const audio = audioRef.current;
    if (!audio || hasError) return;

    void audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
      });
  }, [autoPlaySignal, hasError, hasUserInteracted, audioSrc]);

  const playCurrentTrack = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const selectTrack = (trackId: string) => {
    const wasPlaying = isPlaying;
    setHasError(false);
    setIsReady(false);
    setIsUsingFallback(false);
    setSelectedTrackId(trackId);
    setIsPlaylistOpen(false);

    if (wasPlaying) {
      window.setTimeout(() => {
        void playCurrentTrack();
      }, 0);
    }
  };

  const goToTrack = (direction: 1 | -1) => {
    if (playlist.length === 0) return;

    const nextIndex = (selectedIndex + direction + playlist.length) % playlist.length;
    selectTrack(playlist[nextIndex].id);
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (audio.paused) {
      await playCurrentTrack();
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const handleAudioError = () => {
    if (selectedTrack?.fallbackSrc && !isUsingFallback) {
      setIsReady(false);
      setIsUsingFallback(true);
      setHasError(false);
      return;
    }

    setHasError(true);
    setIsPlaying(false);
  };

  return (
    <m.div
      layout
      className={`fixed inset-x-3 bottom-3 z-20 mx-auto w-[min(23rem,calc(100vw-1.5rem))] rounded-[1.35rem] border bg-[#130f28]/88 p-2.5 text-violet-100 backdrop-blur-sm sm:backdrop-blur-md [bottom:max(0.75rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:right-4 sm:mx-0 sm:rounded-3xl sm:p-4 ${
        isPlaying
          ? isLite
            ? "border-amber-100/30 shadow-[0_0_18px_rgba(251,191,36,0.14)]"
            : "border-amber-100/35 shadow-[0_0_38px_rgba(251,191,36,0.22),0_0_80px_rgba(244,114,182,0.12)]"
          : isLite
            ? "border-violet-200/18 shadow-md"
            : "border-violet-200/20 shadow-xl"
      }`}
    >
      <audio
        key={audioSrc}
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onCanPlay={() => {
          setIsReady(true);
          setHasError(false);
        }}
        onEnded={() => goToTrack(1)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={handleAudioError}
      />

      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-violet-200/75">Playlist privada</p>
          <p className="mt-1 truncate text-xs sm:text-sm">
            {selectedTrack ? `${selectedTrack.title} · ${selectedTrack.artist}` : "Nuestra música"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsMinimized((value) => !value)}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-200/25 bg-violet-950/40 text-violet-100 transition hover:border-rose-200/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512]"
          aria-label={isMinimized ? "Expandir reproductor" : "Minimizar reproductor"}
        >
          {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {!isMinimized ? (
        <m.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: isLite ? 0.16 : 0.28 }} className="overflow-hidden">
          {hasError ? (
            <p className="mt-3 rounded-2xl border border-amber-100/20 bg-amber-100/[0.06] px-3 py-2 text-xs text-amber-100/90">
              Esta canción todavía no está cargada en el universo. Elegí otra estrella musical de la lista o agregá el archivo de audio cuando esté listo.
            </p>
          ) : null}

          {selectedTrack?.note ? (
            <p className="mt-3 rounded-2xl border border-violet-100/15 bg-white/[0.035] px-3 py-2 text-xs leading-relaxed text-violet-100/82">
              {selectedTrack.note}
            </p>
          ) : null}

          <div className="mt-3 flex h-7 items-end gap-1.5 rounded-2xl border border-violet-100/15 bg-[#080512]/45 px-3 py-2" aria-hidden>
            {WAVE_BARS.map((height, index) => (
              <span
                key={height + index}
                className={`w-1.5 rounded-full bg-gradient-to-t from-rose-200 to-amber-100 ${isLite ? "shadow-none" : "shadow-[0_0_10px_rgba(251,191,36,0.32)]"} ${isPlaying && !isLite ? "animate-[music-wave_1.15s_ease-in-out_infinite]" : ""}`}
                style={{ height: `${height * 100}%`, animationDelay: `${index * 0.12}s` }}
              />
            ))}
            <span className="ml-2 self-center text-[0.65rem] uppercase tracking-[0.16em] text-violet-200/70">volumen bajo</span>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-2">
            <MagicButton
              variant="ghost"
              size="sm"
              onClick={() => goToTrack(-1)}
              disabled={!hasUserInteracted || playlist.length < 2}
              icon={<SkipBack size={15} />}
              aria-label="Canción anterior"
              className="px-2"
              performanceMode={performanceMode}
            >
              <span className="sr-only">Anterior</span>
            </MagicButton>

            <MagicButton
              variant="secondary"
              size="sm"
              onClick={togglePlay}
              disabled={!isReady || !hasUserInteracted || hasError}
              icon={isPlaying ? <Pause size={16} /> : <Play size={16} />}
              aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
              className="col-span-2"
              performanceMode={performanceMode}
            >
              {isPlaying ? "Pausar" : "Play"}
            </MagicButton>

            <MagicButton
              variant="ghost"
              size="sm"
              onClick={() => goToTrack(1)}
              disabled={!hasUserInteracted || playlist.length < 2}
              icon={<SkipForward size={15} />}
              aria-label="Siguiente canción"
              className="px-2"
              performanceMode={performanceMode}
            >
              <span className="sr-only">Siguiente</span>
            </MagicButton>

            <MagicButton
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              disabled={!isReady || !hasUserInteracted || hasError}
              icon={isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
              className="px-2"
              performanceMode={performanceMode}
            >
              <span className="sr-only">Sonido</span>
            </MagicButton>
          </div>

          <MagicButton
            variant="ghost"
            size="sm"
            onClick={() => setIsPlaylistOpen((value) => !value)}
            icon={<ListMusic size={15} />}
            className="mt-2 w-full"
            aria-expanded={isPlaylistOpen}
            performanceMode={performanceMode}
          >
            {isPlaylistOpen ? "Cerrar lista" : "Elegir canción"}
          </MagicButton>

          {isPlaylistOpen ? (
            <div className="mt-3 max-h-48 space-y-2 overflow-y-auto pr-1">
              {playlist.map((track) => {
                const isSelected = track.id === selectedTrack.id;

                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => selectTrack(track.id)}
                    className={`w-full rounded-2xl border px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080512] ${
                      isSelected
                        ? "border-amber-100/35 bg-amber-100/[0.08] text-amber-50"
                        : "border-violet-100/15 bg-white/[0.03] text-violet-100 hover:border-violet-100/32"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className="block truncate text-xs font-semibold">{track.title}</span>
                    <span className="mt-0.5 block truncate text-[0.68rem] text-violet-200/72">{track.artist}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </m.div>
      ) : null}
    </m.div>
  );
}
