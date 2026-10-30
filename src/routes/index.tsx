import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/anim";
import { Marquee } from "@/components/marquee";
import { SERVICES } from "@/lib/services";
import { BigStats } from "@/components/big-stats";
import { HorizontalAgents } from "@/components/scroll-showcase";
import { POSTS } from "@/lib/blog";
import { PostCard } from "@/routes/blog.index";

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

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pb-16 pt-32 md:pb-28 md:pt-44">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="blob left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-signal/35" />
        <div className="blob right-[-8%] top-[10%] h-[26rem] w-[26rem] bg-signal-deep/20" style={{ animationDelay: "-6s" }} />
        <div className="blob bottom-[-15%] left-[30%] h-[24rem] w-[24rem] bg-coral/20" style={{ animationDelay: "-12s" }} />
        <div className="blob right-[25%] top-[45%] h-[16rem] w-[16rem] bg-sky/25" style={{ animationDelay: "-3s" }} />
      </div>

      <motion.div style={{ y, scale }} className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3"
        >
          <span className="pulse-dot" aria-hidden />
          <span className="eyebrow text-muted-foreground">AI growth agency · Est. for the AI era</span>
        </motion.p>

        <h1 className="headline mt-8 text-[clamp(2.9rem,10vw,8rem)] leading-[0.92]">
          <Line delay={0.1}>
            <span className="serif text-spectrum pr-2">Transforming</span> brands
          </Line>
          <Line delay={0.22}>into AI-native</Line>
          <Line delay={0.34}>
            growth <span className="serif text-signal">machines.</span>
          </Line>
        </h1>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            We get you ranked on Google, cited by ChatGPT, and build custom AI agents that turn
            attention into booked calls — around the clock.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <Link to="/contact" hash="book" className="btn-ink">
              Book a strategy call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="btn-outline">
              See our work
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-20 border-y border-border py-6 md:mt-28">
        <Marquee
          slow
          className="font-display text-xl font-semibold text-muted-foreground md:text-2xl"
          items={["ChatGPT", "Perplexity", "Google AI Overviews", "Gemini", "Claude", "Instagram", "LinkedIn", "Google Search"]}
        />
      </div>
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  return (
    <section ref={ref} className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-40">
      <p className="eyebrow text-signal">Ambition</p>
      <p className="headline mt-8 flex flex-wrap text-[clamp(2rem,6vw,4.6rem)] leading-[1.08]">
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
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${serif ? "serif text-spectrum" : ""}`}>
      {children}
    </motion.span>
  );
}

/* ---------------- SELECTED WORK (sticky stacked cards) ---------------- */

const WORK = [
  { name: "Northwind Dental", line: "An AI receptionist that books 40+ appointments a week.", tags: ["AI Agent", "Web", "Local SEO"], art: "from-ink via-violet to-signal", stat: "+312% bookings" },
  { name: "Lumen Skincare", line: "Getting a DTC brand cited by ChatGPT for its category.", tags: ["AEO", "Content", "Social"], art: "from-signal-deep via-signal to-coral", stat: "38/42 AI citations" },
  { name: "Atlas Logistics", line: "A B2B site and lead-qualifier agent that never sleeps.", tags: ["Web Design", "AI Agent", "SEO"], art: "from-ink via-ink-soft to-signal-deep", stat: "3.4x qualified leads" },
  { name: "Fern & Co.", line: "Rebuilding search visibility for a growing hospitality group.", tags: ["SEO", "AEO", "Strategy"], art: "from-violet via-signal-deep to-coral", stat: "#1 for 120 keywords" },
];

function SelectedWork() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="eyebrow text-signal">Selected work</p>
          <h2 className="headline mt-4 max-w-3xl text-4xl md:text-7xl">
            Built for moments when growth becomes <span className="serif text-spectrum">inevitable.</span>
          </h2>
        </Reveal>
        <Link to="/work" className="btn-outline">
          All work <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-16 space-y-6 md:space-y-0">
        {WORK.map((w, i) => (
          <WorkCard key={w.name} w={w} i={i} />
        ))}
      </div>
    </section>
  );
}

function WorkCard({ w, i }: { w: (typeof WORK)[number]; i: number }) {
  return (
    <div className="md:sticky md:pb-8" style={{ top: `${96 + i * 24}px` }}>
      <Reveal>
        <Link to="/work" className="group block overflow-hidden rounded-4xl border border-border bg-card shadow-[var(--shadow-lift)]">
          <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br md:aspect-[21/9] ${w.art}`}>
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1, ease: EASE }}
            >
              <div className="grain absolute inset-0" />
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-card/25 blur-2xl" />
            </motion.div>
            <p className="headline absolute bottom-5 left-6 text-5xl text-ink-fg md:bottom-8 md:left-10 md:text-8xl">
              {w.name.split(" ")[0]}
              <span className="serif">.</span>
            </p>
            <span className="absolute right-5 top-5 rounded-full bg-card/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur md:right-8 md:top-8">
              {w.stat}
            </span>
          </div>
          <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h3 className="headline text-2xl md:text-3xl">{w.name}</h3>
              <p className="mt-1 text-muted-foreground">{w.line}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {w.tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
              <span className="ml-2 grid h-11 w-11 place-items-center rounded-full bg-ink text-ink-fg transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

/* ---------------- SERVICES (hover list) ---------------- */

const DOTS = ["bg-signal", "bg-coral", "bg-signal", "bg-coral", "bg-signal", "bg-coral"];

function ServicesList() {
  return (
    <section className="grain relative bg-ink py-24 text-ink-fg md:py-36">
      <div className="relative z-[2] mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-signal">Capabilities</p>
          <h2 className="headline mt-4 max-w-3xl text-4xl md:text-7xl">
            Everything you need to be <span className="serif text-spectrum">found & chosen.</span>
          </h2>
        </Reveal>
        <div className="mt-16 border-b border-ink-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <Link
                to="/services"
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden border-t border-ink-border py-7 md:gap-10 md:py-10"
              >
                <span className={`absolute inset-0 origin-bottom scale-y-0 opacity-15 transition-transform duration-500 group-hover:scale-y-100 ${DOTS[i % DOTS.length]}`} />
                <span className="relative font-display text-sm text-ink-muted">{s.index}</span>
                <div className="relative">
                  <h3 className="headline text-3xl transition-transform duration-500 group-hover:translate-x-3 md:text-6xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-ink-muted md:text-base">{s.tagline}</p>
                </div>
                <span className={`relative grid h-10 w-10 place-items-center rounded-full text-ink transition-transform duration-500 group-hover:rotate-90 md:h-14 md:w-14 ${DOTS[i % DOTS.length]}`}>
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
  { k: "01", t: "Discover", d: "We map how buyers search, ask AI and decide — every gap becomes an opportunity.", c: "bg-signal" },
  { k: "02", t: "Strategize", d: "One plan: what we rank for, what AI cites you for, what agents we automate first.", c: "bg-coral" },
  { k: "03", t: "Build & launch", d: "Pages, posts and agents go live with tracking on every click and conversation.", c: "bg-signal" },
  { k: "04", t: "Compound", d: "Monthly reporting on rankings, citations and leads — and the next sprint shipped.", c: "bg-coral" },
];

function Approach() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="eyebrow text-signal">Our approach</p>
        <h2 className="headline mt-4 max-w-3xl text-4xl md:text-7xl">
          Growing brands by <span className="serif text-spectrum">redefining</span> how they’re found.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.k} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-transform duration-500 hover:-translate-y-2">
              <span className={`absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-transform duration-700 group-hover:scale-[2.2] ${s.c}`} />
              <span className="serif relative text-6xl text-muted-foreground">{s.k}</span>
              <h3 className="headline relative mt-10 text-2xl">{s.t}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
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
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-36">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="eyebrow text-signal">Insights</p>
          <h2 className="headline mt-4 max-w-3xl text-4xl md:text-6xl">
            The latest from <span className="serif text-spectrum">our world and beyond.</span>
          </h2>
        </Reveal>
        <Link to="/blog" className="btn-outline">
          All articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
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
    <section className="relative isolate overflow-hidden bg-ink px-5 py-28 text-center text-ink-fg md:py-44">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="blob left-[5%] top-[10%] h-80 w-80 bg-signal/40" />
        <div className="blob right-[5%] bottom-[0%] h-80 w-80 bg-violet/40" style={{ animationDelay: "-8s" }} />
        <div className="blob left-[40%] bottom-[20%] h-64 w-64 bg-coral/30" style={{ animationDelay: "-4s" }} />
      </div>
      <Reveal>
        <p className="eyebrow text-signal">Ready when you are</p>
        <h2 className="headline mx-auto mt-6 max-w-5xl text-[clamp(2.8rem,10vw,8rem)] leading-[0.95]">
          Let’s build what’s <span className="serif text-spectrum">next.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-ink-muted">
          A 30-minute call. We’ll map where your buyers are looking — and the fastest route to be there.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" hash="book" className="btn-signal">
            Book a call <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="btn-ink-invert">
            Explore services
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
