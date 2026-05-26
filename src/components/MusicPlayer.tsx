"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type MusicPlayerProps = {
  hasUserInteracted: boolean;
  autoPlaySignal: number;
};

const INITIAL_VOLUME = 0.2;

export function MusicPlayer({ hasUserInteracted, autoPlaySignal }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = INITIAL_VOLUME;
    setIsReady(true);
  }, []);

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
  }, [autoPlaySignal, hasError, hasUserInteracted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
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

  return (
    <div className="fixed inset-x-4 bottom-4 z-20 mx-auto w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-violet-200/20 bg-[#130f28]/85 p-4 text-violet-100 shadow-xl backdrop-blur-md sm:inset-x-auto sm:right-4 sm:mx-0">
      <audio
        ref={audioRef}
        src="/audio/first-dance.mp3"
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      />

      <p className="text-xs uppercase tracking-[0.2em] text-violet-200/75">Primer baile</p>
      <p className="mt-1 text-sm">I Can&apos;t Help Falling in Love — Elvis Presley</p>

      {hasError ? (
        <p className="mt-3 text-xs text-amber-200/90">No se encontró el audio todavía. Podés agregarlo en /public/audio/first-dance.mp3.</p>
      ) : (
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            disabled={!isReady || !hasUserInteracted}
            className="inline-flex items-center gap-2 rounded-xl border border-violet-200/30 bg-violet-950/40 px-3 py-2 text-sm transition hover:border-rose-200/40 disabled:cursor-not-allowed disabled:opacity-60"
            aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? "Pausar" : "Reproducir"}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            disabled={!isReady || !hasUserInteracted}
            className="inline-flex items-center gap-2 rounded-xl border border-violet-200/30 bg-violet-950/40 px-3 py-2 text-sm transition hover:border-rose-200/40 disabled:cursor-not-allowed disabled:opacity-60"
            aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {isMuted ? "Muteado" : "Sonido"}
          </button>
        </div>
      )}
    </div>
  );
}
