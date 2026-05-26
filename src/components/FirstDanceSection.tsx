import { Disc3, Heart, Music2, Sparkles } from "lucide-react";

const lyricMoments = [
  "Tu mirada sosteniéndome mientras todo alrededor desaparecía.",
  "Nuestros pasos torpes pero perfectos, como si ya conociéramos ese abrazo.",
  "La promesa silenciosa de seguir bailando juntos incluso en los días difíciles.",
];

export function FirstDanceSection() {
  return (
    <section className="mt-4 space-y-6 text-violet-50">
      <header className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full border border-rose-200/35 bg-rose-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-rose-100/90">
          <Music2 size={14} /> Primer baile
        </p>
        <h3 className="text-2xl font-semibold sm:text-3xl">I Can&apos;t Help Falling in Love</h3>
        <p className="text-sm text-violet-200/90">Elvis Presley</p>
      </header>

      <div className="rounded-3xl border border-violet-200/25 bg-gradient-to-b from-[#26184a]/90 to-[#100a22]/95 p-5 shadow-[0_0_40px_rgba(124,93,255,0.25)] sm:p-6">
        <div className="mx-auto mb-5 flex h-40 w-full max-w-xs items-center justify-center rounded-[2rem] border border-violet-200/30 bg-[#0a0618] sm:h-44">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-rose-200/50 bg-gradient-to-br from-rose-200/20 via-violet-200/10 to-transparent">
            <div className="absolute h-16 w-16 rounded-full border border-violet-100/30 bg-violet-950/55" />
            <Disc3 className="text-rose-100/90" size={30} />
            <span className="absolute -right-4 -top-3 rounded-full border border-violet-200/35 bg-violet-900/70 p-1.5 text-rose-100/90">
              <Sparkles size={12} />
            </span>
          </div>
        </div>

        <p className="text-base leading-relaxed text-violet-100/95 sm:text-lg">
          Esta canción no suena igual desde aquel día. Desde entonces, cada nota sabe tu nombre.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-violet-200/85">
          Cuando vuelva a sonar en el reproductor, no hace falta decir nada: ese baile sigue vivo en nosotros.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-violet-200/20 bg-[#120d26]/85 p-4">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-violet-200/80">
          <Heart size={13} /> Lo que quedó latiendo de esa noche
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-violet-100/90 sm:text-base">
          {lyricMoments.map((moment) => (
            <li key={moment} className="flex items-start gap-2">
              <span className="mt-1 text-rose-200">✦</span>
              <span>{moment}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
