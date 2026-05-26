import { vows } from "@/data/vows";

function VowParagraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-violet-100/90 sm:text-base">
      {items.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

export function VowsSection() {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">La estrella que no se apaga</p>
        <h3 className="mt-2 text-2xl font-semibold text-violet-50 sm:text-3xl">Nuestros votos</h3>
      </header>

      <blockquote className="rounded-3xl border border-amber-200/35 bg-gradient-to-r from-amber-200/10 via-rose-200/10 to-transparent p-5 text-base italic leading-relaxed text-amber-50 sm:text-lg">
        “{vows.featuredLine}”
      </blockquote>

      <div className="rounded-3xl border border-amber-200/30 bg-gradient-to-b from-amber-100/10 via-rose-100/5 to-transparent p-5 sm:p-6">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-100/90">{vows.originalLabel}</p>
        <div className="mt-4 border-l border-amber-100/40 pl-4 sm:pl-5">
          <VowParagraphs items={vows.original} />
        </div>
      </div>

      <div className="rounded-3xl border border-rose-200/30 bg-gradient-to-b from-rose-200/10 via-violet-200/5 to-transparent p-5 sm:p-6">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-rose-100/90">{vows.renewedLabel}</p>
        <div className="mt-4 border-l border-rose-100/40 pl-4 sm:pl-5">
          <VowParagraphs items={vows.renewed} />
        </div>
      </div>

      <div className="rounded-3xl border border-violet-100/30 bg-[#15102b]/80 p-5 sm:p-6">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-violet-100/90">Frases que siguen brillando</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {vows.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-violet-200/25 bg-violet-950/45 px-4 py-3 text-sm text-violet-50"
            >
              “{highlight}”
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
