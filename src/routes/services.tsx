import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, RevealWords } from "@/components/anim";
import { Marquee } from "@/components/marquee";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — customeragent." },
      { name: "description", content: "SEO, AEO, website design, social posts, AI agents and custom agent builds — everything customeragent. does to grow your business." },
      { property: "og:title", content: "Services — customeragent." },
      { property: "og:description", content: "SEO, AEO, website design, social posts, AI agents and custom agent builds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <section className="aurora grain relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-44">
        <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
          <Reveal y={16}>
            <p className="eyebrow text-muted-foreground">Services</p>
          </Reveal>
          <h1 className="headline mt-5 max-w-4xl text-5xl md:text-7xl">
            <RevealWords text="Everything it takes" />
            <br />
            <span className="text-signal">
              <RevealWords text="to get found." delay={0.25} />
            </span>
          </h1>
          <Reveal delay={0.6} className="mt-7 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Six services, one engine. Take them together or start with the one your
              pipeline needs most — every engagement is measured against revenue, not
              deliverables.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border py-8">
        <Marquee
          slow
          outlined
          className="headline text-3xl md:text-5xl"
          items={SERVICES.map((s) => s.title)}
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {SERVICES.map((service, i) => (
          <Reveal key={service.id} delay={0.04}>
            <article
              id={service.id}
              className={`group grid gap-8 border-t border-border py-14 transition-colors duration-500 hover:border-signal md:py-20 ${
                i % 2 === 1 ? "md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_110px]" : "md:grid-cols-[110px_minmax(0,1.1fr)_minmax(0,1fr)]"
              }`}
            >
              <div
                className={`font-display text-6xl font-bold tracking-tight text-signal md:text-7xl ${
                  i % 2 === 1 ? "md:order-3 md:text-right" : ""
                }`}
              >
                {service.index}
              </div>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="headline text-3xl md:text-5xl">{service.title}</h2>
                <p className="mt-2 text-lg font-semibold text-signal-deep">{service.tagline}</p>
                <p className="mt-5 leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <ul className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-7 transition-all duration-500 group-hover:border-signal/50 group-hover:bg-signal-tint/40">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm font-medium md:text-base">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal-tint">
                        <Check className="h-3 w-3 text-signal-deep" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-4xl bg-ink px-8 py-14 text-ink-fg md:flex-row md:items-center md:px-14">
            <div>
              <h2 className="headline text-3xl md:text-5xl">
                Not sure where to start?
              </h2>
              <p className="mt-3 max-w-lg text-ink-muted">
                Book a free strategy call — we'll audit your visibility and tell you
                exactly which service moves the needle first.
              </p>
            </div>
            <Link to="/contact" className="btn-ink-invert shrink-0">
              Get your plan
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
