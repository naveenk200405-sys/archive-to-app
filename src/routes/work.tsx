import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Bot, Check, MessageCircle, Sparkles, TrendingUp } from "lucide-react";
import { Reveal, RevealWords, Counter } from "@/components/anim";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — customeragent." },
      { name: "description", content: "What customeragent. ships: AI visibility dashboards, search growth, agent conversations and social engines." },
      { property: "og:title", content: "Work — customeragent." },
      { property: "og:description", content: "What customeragent. ships: AI visibility, search growth, agent conversations and social engines." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main>
      <section className="aurora grain relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-44">
        <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
          <Reveal y={16}>
            <p className="eyebrow text-muted-foreground">Work</p>
          </Reveal>
          <h1 className="headline mt-5 max-w-4xl text-5xl md:text-7xl">
            <RevealWords text="Built to be" />
            <br />
            <span className="text-signal">
              <RevealWords text="measured." delay={0.25} />
            </span>
          </h1>
          <Reveal delay={0.6} className="mt-7 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A look at the systems we put in front of clients — visibility dashboards,
              search growth curves, agent inboxes and content engines. Every build
              ships with its own reporting, so you always see what moved.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <ShowcaseCard
              title="AI visibility snapshot"
              subtitle="AEO · citation tracking"
              icon={<Sparkles className="h-4 w-4" />}
            >
              <div className="flex flex-col gap-3">
                {[
                  { engine: "ChatGPT", score: "4/42" },
                  { engine: "Perplexity", score: "5/11" },
                  { engine: "Google AI Overviews", score: "10/42" },
                  { engine: "Gemini", score: "2/11" },
                ].map((row) => (
                  <div key={row.engine} className="flex items-center justify-between rounded-xl bg-muted px-4 py-3 text-sm">
                    <span className="font-medium">{row.engine}</span>
                    <span className="flex items-center gap-2 font-semibold text-signal-deep">
                      <Check className="h-3.5 w-3.5" />
                      {row.score}
                    </span>
                  </div>
                ))}
              </div>
            </ShowcaseCard>
          </Reveal>

          <Reveal delay={0.08}>
            <ShowcaseCard
              title="Search growth curve"
              subtitle="SEO · monthly clicks"
              icon={<TrendingUp className="h-4 w-4" />}
            >
              <div className="flex h-44 items-end gap-2.5">
                {[22, 30, 27, 41, 55, 52, 68, 84].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-md bg-signal/80"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Clicks trending <Counter to={184} suffix="%" className="font-semibold text-foreground" />{" "}
                over the last 8 months.
              </p>
            </ShowcaseCard>
          </Reveal>

          <Reveal delay={0.04}>
            <ShowcaseCard
              title="Agent inbox"
              subtitle="AI agents · lead capture"
              icon={<Bot className="h-4 w-4" />}
            >
              <div className="flex flex-col gap-2.5">
                <Bubble side="visitor">Hey, do you deliver to my area?</Bubble>
                <Bubble side="agent">We do! What's your postcode and the service you need?</Bubble>
                <Bubble side="visitor">12340 — need it this week.</Bubble>
                <Bubble side="agent">Booked for Thursday, 10:00. Confirmation sent to your email ✓</Bubble>
              </div>
            </ShowcaseCard>
          </Reveal>

          <Reveal delay={0.12}>
            <ShowcaseCard
              title="Social engine"
              subtitle="Social posts · content calendar"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  "h-20 bg-signal-tint",
                  "h-20 bg-muted",
                  "h-20 bg-signal/25",
                  "h-20 bg-muted",
                  "h-20 bg-signal/25",
                  "h-20 bg-signal-tint",
                ].map((cls, i) => (
                  <motion.div
                    key={i}
                    className={cn("rounded-xl", cls)}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                <Counter to={20} suffix="+" className="font-semibold text-foreground" /> posts
                designed, written and scheduled every month.
              </p>
            </ShowcaseCard>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Illustrative snapshots of client reporting. Want yours here?
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="btn-signal">
              Become our next case study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function ShowcaseCard({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] md:p-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="text-signal">{icon}</span>
            {title}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-1 flex-col">{children}</div>
    </div>
  );
}

function Bubble({ side, children }: { side: "agent" | "visitor"; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
        side === "agent"
          ? "self-end bg-signal text-accent-foreground"
          : "self-start bg-muted",
      )}
    >
      {children}
    </div>
  );
}
