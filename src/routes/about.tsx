import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Gauge, LineChart, Puzzle } from "lucide-react";
import { Reveal, RevealWords, Counter } from "@/components/anim";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — customeragent." },
      { name: "description", content: "customeragent. is an AI-first growth agency built on one idea: every brand should be the answer its customers find." },
      { property: "og:title", content: "About — customeragent." },
      { property: "og:description", content: "An AI-first growth agency: every brand should be the answer its customers find." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Strategy before tools",
    text: "AI and automation are leverage, not a plan. We start from your customers and work backwards to the tactics.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Measure what moves revenue",
    text: "Rankings, citations and followers only count when they turn into calls, bookings and sales. That's the number we report.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Ship weekly",
    text: "No 60-page audits that gather dust. Small, sharp improvements shipped every sprint compound faster.",
  },
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: "Built around you",
    text: "Agents, content and design shaped to your voice and workflow — never generic templates with your logo pasted on.",
  },
];

function AboutPage() {
  return (
    <main>
      <section className="aurora grain relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-44">
        <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
          <Reveal y={16}>
            <p className="eyebrow text-muted-foreground">About</p>
          </Reveal>
          <h1 className="headline mt-5 max-w-4xl text-5xl md:text-7xl">
            <RevealWords text="The dot is the" />
            <br />
            <span className="text-signal">
              <RevealWords text="whole point." delay={0.25} />
            </span>
          </h1>
          <Reveal delay={0.6} className="mt-7 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every sentence ends somewhere. customeragent. exists to make sure your
              brand is where your customer's search ends — the ranking they click, the
              answer AI reads out, the site they trust, the agent that books the job.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border py-8">
        <Marquee
          slow
          className="headline text-2xl md:text-4xl"
          items={["Found", "Chosen", "Remembered", "Automated"]}
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="headline text-3xl md:text-5xl">
              An agency built for the AI era of search.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Buying decisions moved. People still Google — but now they also ask
                ChatGPT, scroll Instagram, read reviews and expect answers at 11pm.
                Most agencies solve one of those channels. We run all of them as one
                system.
              </p>
              <p>
                That's why our services live under one roof: SEO and AEO get you found,
                design and social make you chosen, and AI agents convert that
                attention into customers around the clock.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-signal-tint text-signal-deep">
                  {principle.icon}
                </span>
                <h3 className="headline mt-5 text-xl">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-16 text-ink-fg md:py-24">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="relative z-[2] mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3 md:px-8">
          {[
            { value: <Counter to={6} />, label: "core services, one growth engine" },
            { value: <Counter to={24} suffix="/7" />, label: "agents working while you sleep" },
            { value: <Counter to={100} suffix="%" />, label: "reporting tied to revenue" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="headline text-5xl text-signal md:text-7xl">{stat.value}</p>
              <p className="mt-2 text-ink-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28">
        <Reveal>
          <h2 className="headline mx-auto max-w-2xl text-4xl md:text-6xl">
            Let's end your customer's search <span className="text-signal">.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="btn-signal">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
