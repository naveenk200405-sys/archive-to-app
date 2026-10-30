import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { Reveal, Magnetic, spotlight } from "@/components/anim";
import { Marquee } from "@/components/marquee";
import { SERVICES } from "@/lib/services";
import { BigStats } from "@/components/big-stats";
import { HorizontalAgents } from "@/components/scroll-showcase";
import { POSTS } from "@/lib/blog";
import { PostCard } from "@/routes/blog.index";
import imgNorthwind from "@/assets/work-northwind.jpg";
import imgLumen from "@/assets/work-lumen.jpg";
import imgAtlas from "@/assets/work-atlas.jpg";
import imgFern from "@/assets/work-fern.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "customeragent. — AI growth agency & custom AI agents" },
      { name: "description", content: "customeragent. turns brands into AI-native growth machines: SEO, AI search visibility, websites, content and custom AI agents that book calls 24/7." },
      { property: "og:title", content: "customeragent. — AI growth agency" },
      { property: "og:description", content: "Transforming brands into AI-native growth machines. SEO, AEO, websites and custom AI agents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EASE = [0.22, 1, 0.36, 1] as const;
const STAGGER = 0.1;

function Index() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Ambition />
      <SelectedWork />
      <ServicesList />
      <HorizontalAgents />
      <BigStats />
      <Approach />
      <Insights />
      <FinalCta />
    </main>
  );
}

/* ---------------- HERO ---------------- */

function Rise({ children, i, className }: { children: ReactNode; i: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.1 + i * STAGGER, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const [glow, setGlow] = useState(false);
  return (
    <section
      data-glow={glow ? "on" : "off"}
      onPointerMove={(e) => {
        spotlight(e);
        if (!glow && e.pointerType === "mouse") setGlow(true);
      }}
      onPointerLeave={() => setGlow(false)}
      className="relative isolate pb-16 pt-32 md:pb-24 md:pt-44"
    >
      <div aria-hidden className="hero-cursor-glow" />
      <div className="container-site">
        <Rise i={0} className="flex items-center gap-3">
          <span className="pulse-dot shrink-0" aria-hidden />
          <span className="eyebrow text-muted-foreground">
            <span className="whitespace-nowrap">AI growth agency</span>{" "}
            <span className="whitespace-nowrap">· Est. for the AI era</span>
          </span>
        </Rise>

        <h1 className="headline mt-8 text-[clamp(2.75rem,9vw,7rem)] leading-[0.95]">
          <Rise i={1}>
            <span className="serif pr-2">Transforming</span> brands
          </Rise>
          <Rise i={2}>into AI-native</Rise>
          <Rise i={3}>
            growth <span className="serif">machines.</span>
          </Rise>
        </h1>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Rise i={4}>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              We get you ranked on Google, cited by ChatGPT, and build custom AI agents that turn
              attention into booked calls — around the clock.
            </p>
          </Rise>
          <Rise i={5} className="grid grid-cols-1 gap-3 sm:flex sm:flex-nowrap">
            <Magnetic>
              <Link to="/contact" hash="book" className="btn-ink press whitespace-nowrap">
                Book a strategy call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/work" className="btn-outline press whitespace-nowrap">
                See our work
              </Link>
            </Magnetic>
          </Rise>
        </div>
      </div>

      <Rise i={6} className="container-site mt-20 md:mt-24">
        <div className="border-y border-border py-6">
          <Marquee
            slow
            className="font-display text-xl font-semibold text-muted-foreground md:text-2xl"
            items={["ChatGPT", "Perplexity", "Google AI Overviews", "Gemini", "Claude", "Instagram", "LinkedIn", "Google Search"]}
          />
        </div>
      </Rise>
    </section>
  );
}

/* ---------------- AMBITION (scroll-lit statement) ---------------- */

const AMBITION: { w: string; s?: boolean }[] = [
  ..."We exist to make your brand the".split(" ").map((w) => ({ w })),
  { w: "obvious", s: true },
  { w: "answer", s: true },
  ..."— on every search, every AI chat, every scroll. New leads. New systems.".split(" ").map((w) => ({ w })),
  { w: "New", s: true },
  { w: "growth.", s: true },
];

function Ambition() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  return (
    <section ref={ref} className="container-site section-y">
      <p className="eyebrow text-muted-foreground">Ambition</p>
      <p className="headline mt-8 flex flex-wrap text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.08]">
        {AMBITION.map((item, i) => (
          <LitWord key={i} progress={scrollYProgress} range={[i / AMBITION.length, (i + 1) / AMBITION.length]} serif={!!item.s}>
            {item.w}
          </LitWord>
        ))}
      </p>
    </section>
  );
}

function LitWord({ children, progress, range, serif }: { children: string; progress: MotionValue<number>; range: [number, number]; serif?: boolean }) {
  const opacity = useTransform(progress, range, [0.32, 1]);
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${serif ? "serif" : ""}`}>
      {children}
    </motion.span>
  );
}

/* ---------------- SELECTED WORK ---------------- */

const WORK = [
  { name: "Northwind Dental", line: "An AI receptionist that books 40+ appointments a week.", tags: ["AI Agent", "Web", "Local SEO"], img: imgNorthwind, stat: "+312% bookings" },
  { name: "Lumen Skincare", line: "Getting a DTC brand cited by ChatGPT for its category.", tags: ["AEO", "Content", "Social"], img: imgLumen, stat: "38/42 AI citations" },
  { name: "Atlas Logistics", line: "A B2B site and lead-qualifier agent that never sleeps.", tags: ["Web Design", "AI Agent", "SEO"], img: imgAtlas, stat: "3.4x qualified leads" },
  { name: "Fern & Co.", line: "Rebuilding search visibility for a growing hospitality group.", tags: ["SEO", "AEO", "Strategy"], img: imgFern, stat: "#1 for 120 keywords" },
];

function SectionHead({ eyebrow, title, action }: { eyebrow: string; title: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <Reveal>
        <p className="eyebrow text-muted-foreground">{eyebrow}</p>
        <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h2>
      </Reveal>
      {action}
    </div>
  );
}

function SelectedWork() {
  return (
    <section className="container-site pb-24 md:pb-32">
      <SectionHead
        eyebrow="Selected work"
        title={<>Built for moments when growth becomes <span className="serif">inevitable.</span></>}
        action={
          <Magnetic>
            <Link to="/work" className="btn-outline press">
              All work <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        }
      />
      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
        {WORK.map((w, i) => (
          <Reveal key={w.name} delay={(i % 2) * 0.08} className="h-full">
            <WorkCard w={w} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WorkCard({ w }: { w: (typeof WORK)[number] }) {
  return (
    <Link to="/work" onPointerMove={spotlight} className="card-lift group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        <img
          src={w.img}
          alt={`${w.name} project screenshot`}
          loading="lazy"
          width={1600}
          height={912}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        <span className="absolute right-4 top-4 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)]">
          {w.stat}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="headline text-2xl">{w.name}</h3>
          <p className="mt-1 text-muted-foreground">{w.line}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {w.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors duration-300 group-hover:border-signal group-hover:text-signal">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ---------------- SERVICES ---------------- */

function ServicesList() {
  return (
    <section className="bg-ink text-ink-fg">
      <div className="container-site section-y">
        <Reveal>
          <p className="eyebrow text-ink-muted">Capabilities</p>
          <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">
            Everything you need to be <span className="serif">found & chosen.</span>
          </h2>
        </Reveal>
        <div className="mt-12 border-b border-ink-border md:mt-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <Link
                to="/services"
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-t border-ink-border py-7 transition-colors active:bg-ink-soft md:gap-10 md:py-9"
              >
                <span className="font-display text-sm tabular-nums text-ink-muted">{s.index}</span>
                <div className="min-w-0">
                  <h3 className="headline text-3xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-5xl [@media(hover:hover)]:group-hover:translate-x-2">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-ink-muted md:text-base">{s.tagline}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink-border text-ink-fg transition-all duration-500 md:h-12 md:w-12 [@media(hover:hover)]:group-hover:rotate-90 [@media(hover:hover)]:group-hover:border-signal [@media(hover:hover)]:group-hover:text-signal">
                  <Plus className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPROACH ---------------- */

const STEPS = [
  { k: "01", t: "Discover", d: "We map how buyers search, ask AI and decide — every gap becomes an opportunity." },
  { k: "02", t: "Strategize", d: "One plan: what we rank for, what AI cites you for, what agents we automate first." },
  { k: "03", t: "Build & launch", d: "Pages, posts and agents go live with tracking on every click and conversation." },
  { k: "04", t: "Compound", d: "Monthly reporting on rankings, citations and leads — and the next sprint shipped." },
];

function Approach() {
  return (
    <section className="container-site pb-24 md:pb-32">
      <SectionHead
        eyebrow="Our approach"
        title={<>Growing brands by <span className="serif">redefining</span> how they’re found.</>}
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.k} delay={i * 0.08} className="h-full">
            <div onPointerMove={spotlight} className="card-lift h-full p-7">
              <span className="serif text-5xl text-muted-foreground">{s.k}</span>
              <h3 className="headline mt-10 text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS ---------------- */

function Insights() {
  return (
    <section className="container-site pb-24 md:pb-32">
      <SectionHead
        eyebrow="Insights"
        title={<>The latest from <span className="serif">our world and beyond.</span></>}
        action={
          <Magnetic>
            <Link to="/blog" className="btn-outline press">
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        }
      />
      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-6">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCta() {
  return (
    <section className="bg-ink text-center text-ink-fg">
      <div className="container-site section-y">
        <Reveal>
          <p className="eyebrow text-ink-muted">Ready when you are</p>
          <h2 className="headline mx-auto mt-6 max-w-4xl text-[clamp(2.75rem,9vw,7rem)] leading-[0.95]">
            Let’s build what’s <span className="serif">next.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-ink-muted">
            A 30-minute call. We’ll map where your buyers are looking — and the fastest route to be there.
          </p>
          <div className="mx-auto mt-10 grid max-w-sm grid-cols-1 gap-3 sm:flex sm:max-w-none sm:justify-center">
            <Magnetic>
              <Link to="/contact" hash="book" className="btn-ink-invert press">
                Book a call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/services" className="btn-outline-invert press">
                Explore services
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
