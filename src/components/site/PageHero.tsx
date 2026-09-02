export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-sm opacity-85 md:text-base">{subtitle}</p>}
      </div>
    </section>
  );
}
