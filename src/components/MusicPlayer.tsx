"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { MagicButton } from "@/components/MagicButton";

type MusicPlayerProps = {
  hasUserInteracted: boolean;
  autoPlaySignal: number;
};

const INITIAL_VOLUME = 0.2;
const WAVE_BARS = [0.65, 1, 0.75, 0.9, 0.58];

export function MusicPlayer({ hasUserInteracted, autoPlaySignal }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

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
    <motion.div
      layout
      className={`fixed inset-x-3 bottom-3 z-20 mx-auto w-[min(22rem,calc(100vw-1.5rem))] rounded-3xl border bg-[#130f28]/86 p-3 text-violet-100 backdrop-blur-md [bottom:max(0.75rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:right-4 sm:mx-0 sm:p-4 ${
        isPlaying
          ? "border-amber-100/35 shadow-[0_0_38px_rgba(251,191,36,0.22),0_0_80px_rgba(244,114,182,0.12)]"
          : "border-violet-200/20 shadow-xl"
      }`}
    >
      <audio
        ref={audioRef}
        src="/audio/first-dance.mp3"
        loop
        preload="metadata"
        onCanPlay={() => setIsReady(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      />

      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-violet-200/75">Primer baile</p>
          <p className="mt-1 truncate text-xs sm:text-sm">
            {isPlaying ? "Nuestro primer baile está sonando" : "I Can’t Help Falling in Love"}
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
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="overflow-hidden">
          {hasError ? (
            <p className="mt-3 rounded-2xl border border-amber-100/20 bg-amber-100/[0.06] px-3 py-2 text-xs text-amber-100/90">
              La canción todavía no está en /public/audio/first-dance.mp3, pero este espacio queda reservado para su primer baile.
            </p>
          ) : (
            <>
              <div className="mt-3 flex h-8 items-end gap-1.5 rounded-2xl border border-violet-100/15 bg-[#080512]/45 px-3 py-2" aria-hidden>
                {WAVE_BARS.map((height, index) => (
                  <span
                    key={height + index}
                    className={`w-1.5 rounded-full bg-gradient-to-t from-rose-200 to-amber-100 shadow-[0_0_10px_rgba(251,191,36,0.32)] ${isPlaying ? "animate-[music-wave_1.15s_ease-in-out_infinite]" : ""}`}
                    style={{ height: `${height * 100}%`, animationDelay: `${index * 0.12}s` }}
                  />
                ))}
                <span className="ml-2 self-center text-[0.65rem] uppercase tracking-[0.16em] text-violet-200/70">volumen bajo</span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <MagicButton
                  variant="secondary"
                  size="sm"
                  onClick={togglePlay}
                  disabled={!isReady || !hasUserInteracted}
                  icon={isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
                  className="flex-1"
                >
                  {isPlaying ? "Pausar" : "Reproducir"}
                </MagicButton>

                <MagicButton
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  disabled={!isReady || !hasUserInteracted}
                  icon={isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
                  className="flex-1"
                >
                  {isMuted ? "Muteado" : "Sonido"}
                </MagicButton>
              </div>
            </>
          )}
        </motion.div>
      ) : null}
    </motion.div>
  );
}
