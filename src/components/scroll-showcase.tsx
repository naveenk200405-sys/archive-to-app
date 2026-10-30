import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

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
    <div className="group relative flex min-h-[240px] flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-ink-border bg-ink-soft p-7 transition-colors duration-500 hover:border-signal/60 md:h-[46vh] md:min-h-[320px] md:w-[34rem] md:shrink-0 md:rounded-4xl md:p-10">
      <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
      <span className="font-display text-6xl font-bold text-ink-muted/40 transition-colors group-hover:text-signal md:text-8xl">{p.k}</span>
      <div className="relative">
        <h3 className="headline text-2xl md:text-4xl">{p.t}</h3>
        <p className="mt-3 max-w-md text-ink-muted">{p.d}</p>
      </div>
    </div>
  );
}

/** Mobile: stacked cards that fade in. Desktop: pinned horizontal scroll gallery. */
export function HorizontalAgents() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-ink-fg md:hidden">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="relative px-5">
          <p className="eyebrow text-signal">What our agents do</p>
          <h2 className="headline mt-4 text-4xl">
            Built to work. <span className="text-signal">Never off duty.</span>
          </h2>
          <div className="mt-10 flex flex-col gap-4">
            {PANELS.map((p) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <PanelCard p={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <PinnedAgents />
    </>
  );
}

function PinnedAgents() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);
  return (
    <section ref={ref} className="relative hidden h-[300vh] bg-ink text-ink-fg md:block">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
          <p className="eyebrow text-signal">What our agents do</p>
          <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">
            Built to work. <span className="text-signal">Never off duty.</span>
          </h2>
        </div>
        <motion.div style={{ x }} className="relative mt-12 flex gap-6 pl-5 md:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          {PANELS.map((p) => (
            <PanelCard key={p.k} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
