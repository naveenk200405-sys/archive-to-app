import { Counter, Reveal } from "@/components/anim";

const STATS = [
  { to: 24, suffix: "/7", label: "Agents on duty", tags: ["Lead capture", "Support", "Booking"] },
  { to: 3, suffix: "x", label: "More qualified calls", tags: ["SEO", "AEO", "Ads-free growth"] },
  { to: 6, suffix: "+", label: "Growth channels, one team", tags: ["Web", "Social", "AI search"] },
];

/** Large numbers on a shared two-column grid, revealed once on scroll. */
export function BigStats() {
  return (
    <section className="container-site section-y">
      <p className="eyebrow text-muted-foreground">By the numbers</p>
      <div className="mt-8 divide-y divide-border border-y border-border">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="grid gap-4 py-8 md:grid-cols-2 md:items-center md:gap-8 md:py-12">
              <p className="headline whitespace-nowrap text-[clamp(4rem,18vw,8.5rem)] leading-none tabular-nums">
                <Counter to={s.to} />
                {s.suffix}
              </p>
              <div className="min-w-0">
                <h3 className="headline text-2xl md:text-3xl">{s.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Typical outcomes we design for; results vary by business.</p>
    </section>
  );
}
