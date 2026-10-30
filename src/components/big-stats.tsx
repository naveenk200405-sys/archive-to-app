import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Counter } from "@/components/anim";

const STATS = [
  { to: 24, suffix: "/7", label: "Agents on duty", tags: ["Lead capture", "Support", "Booking"] },
  { to: 3, suffix: "x", label: "More qualified calls", tags: ["SEO", "AEO", "Ads-free growth"] },
  { to: 6, suffix: "", label: "Growth channels, one team", tags: ["Web", "Social", "AI search"] },
];

/** Oversized scroll-revealed numbers, each row slides in from alternating sides. */
export function BigStats() {
  return (
    <section className="mx-auto max-w-6xl overflow-hidden px-5 py-20 md:px-8 md:py-32">
      <p className="eyebrow text-signal">By the numbers</p>
      <div className="mt-8 divide-y divide-border border-y border-border">
        {STATS.map((s, i) => (
          <StatRow key={s.label} s={s} dir={i % 2 ? -1 : 1} />
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Typical outcomes we design for; results vary by business.</p>
    </section>
  );
}

function StatRow({ s, dir }: { s: (typeof STATS)[number]; dir: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const x = useTransform(scrollYProgress, [0, 1], [dir * 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div ref={ref} style={{ x, opacity }} className="grid gap-4 py-8 md:grid-cols-[1.2fr_1fr] md:items-center md:py-12">
      <p className="headline text-[clamp(4.5rem,22vw,10rem)] leading-none">
        <Counter to={s.to} />
        <span className="text-signal">{s.suffix || "+"}</span>
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
    </motion.div>
  );
}
