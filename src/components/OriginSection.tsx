import { memories } from "@/data/memories";

export function OriginSection() {
  return (
    <section className="space-y-6">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-200/80">Origen de la constelación</p>
      <h3 className="text-2xl font-semibold text-white sm:text-3xl">El Origen de Nuestra Constelación</h3>
      <p className="leading-relaxed text-violet-100/90">
        Nacimos lejos, con culturas distintas y mapas que no parecían tocarse. Aun así, el destino encontró una forma improbable de acercarnos: primero una pantalla, después una conversación que no quería terminar, después tu puerta, un beso y una prueba real que convirtió el amor en cuidado.
      </p>

      <div className="space-y-3">
        {memories.map((memory) => (
          <article key={memory.id} className="rounded-2xl border border-violet-200/20 bg-violet-950/35 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-100/90">{memory.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-violet-100/85 sm:text-base">{memory.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
