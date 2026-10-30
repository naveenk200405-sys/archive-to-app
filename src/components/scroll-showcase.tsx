import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Reveal, spotlight } from "@/components/anim";

const WORDS =
  "We build custom AI agents and growth engines that find your buyers, answer them instantly and book the call — while you sleep.".split(
    " ",
  );

/** Scroll-scrubbed statement: words light up green-to-ink as you scroll (vibrant.design style). */
export function ScrollStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.35"] });
  return (
    <section ref={ref} className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-40">
      <p className="eyebrow text-signal">The agency</p>
      <p className="headline mt-6 flex flex-wrap text-3xl leading-[1.12] md:text-6xl">
        {WORDS.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / WORDS.length, (i + 1) / WORDS.length]}>
            {w}
          </Word>
        ))}
      </p>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

const PANELS = [
  { k: "01", t: "Lead-qualifier agent", d: "Chats with every visitor, scores intent and books qualified calls straight into your calendar." },
  { k: "02", t: "AI search visibility", d: "Get cited by ChatGPT, Perplexity and Google AI Overviews when buyers ask about your category." },
  { k: "03", t: "Support & upsell agent", d: "Resolves questions 24/7 in your brand voice and spots upsell moments humans miss." },
  { k: "04", t: "Content engine", d: "SEO pages and social posts shipped every week, engineered to rank and convert." },
];

function PanelCard({ p }: { p: (typeof PANELS)[number] }) {
  return (
    <div
      onPointerMove={spotlight}
      className="group relative flex h-full min-h-[220px] flex-col justify-between gap-10 overflow-hidden rounded-2xl border border-ink-border bg-ink-soft p-7 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.985] md:min-h-[260px] md:p-8 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-signal/60 [@media(hover:hover)]:active:scale-100"
    >
      <span className="font-display text-sm font-semibold tabular-nums text-ink-muted">{p.k}</span>
      <div className="relative">
        <h3 className="headline text-2xl md:text-3xl">{p.t}</h3>
        <p className="mt-3 max-w-md text-ink-muted">{p.d}</p>
      </div>
    </div>
  );
}

/** Dark section with a 2x2 grid of agent cards; same layout on every width, nothing pinned. */
export function HorizontalAgents() {
  return (
    <section className="bg-ink text-ink-fg">
      <div className="container-site pb-24 md:pb-32">
        <p className="eyebrow text-ink-muted">What our agents do</p>
        <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">
          Built to work. <span className="serif">Never off duty.</span>
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
          {PANELS.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.08} className="h-full">
              <PanelCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
