import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, CalendarCheck, Mail, MessageSquareText } from "lucide-react";
import { toast } from "sonner";
import { Reveal, RevealWords } from "@/components/anim";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — customeragent." },
      { name: "description", content: "Start a project with customeragent. — tell us where you want to be found and we'll map the fastest route there." },
      { property: "og:title", content: "Contact — customeragent." },
      { property: "og:description", content: "Start a project with customeragent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "hello@customeragent.si";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES[0]?.title ?? "SEO");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry — ${service}`);
    const body = encodeURIComponent(
      `Hi customeragent.,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}\n`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app — your message is pre-filled.", {
      description: `Sending to ${EMAIL}`,
    });
  };

  const inputClass =
    "w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-signal focus:ring-4 focus:ring-signal/15";

  return (
    <main>
      <section className="aurora grain relative overflow-hidden pb-14 pt-32 md:pt-44">
        <div className="relative z-[2] mx-auto max-w-6xl px-5 md:px-8">
          <Reveal y={16}>
            <p className="eyebrow text-muted-foreground">Contact</p>
          </Reveal>
          <h1 className="headline mt-5 max-w-4xl text-5xl md:text-7xl">
            <RevealWords text="Start a" />
            <span className="text-signal">
              <RevealWords text=" project." delay={0.25} />
            </span>
          </h1>
          <Reveal delay={0.6} className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tell us where you want to be found. We reply within one business day
              with first thoughts and a call slot.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <Reveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-4xl border border-border bg-card p-7 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Your name</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Email</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">What do you need?</span>
                <select value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Everything">Everything — full growth engine</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Your project</span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your business, your customers, and where you want to be found."
                  className={inputClass}
                />
              </label>
              <button type="submit" className="btn-signal mt-2 w-full justify-center sm:w-auto sm:self-start">
                Send message
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                Submitting opens your email app with everything pre-filled — nothing is
                stored on this site.
              </p>
            </form>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-signal-tint text-signal-deep">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Email us directly</span>
                  <span className="block text-sm text-muted-foreground">{EMAIL}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-3xl bg-ink p-7 text-ink-fg">
                <p className="eyebrow text-signal">What happens next</p>
                <ol className="mt-5 flex flex-col gap-5">
                  {[
                    {
                      icon: <MessageSquareText className="h-4 w-4" />,
                      title: "We read your brief",
                      text: "Within one business day you get first thoughts on your visibility.",
                    },
                    {
                      icon: <CalendarCheck className="h-4 w-4" />,
                      title: "A 30-minute strategy call",
                      text: "We walk through gaps and opportunities across search, AI, social and agents.",
                    },
                    {
                      icon: <ArrowUpRight className="h-4 w-4" />,
                      title: "You keep the plan",
                      text: "Whether we work together or not, you leave with a clear roadmap.",
                    },
                  ].map((step) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ink-soft text-signal">
                        {step.icon}
                      </span>
                      <span>
                        <span className="block font-semibold">{step.title}</span>
                        <span className="mt-0.5 block text-sm text-ink-muted">{step.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <p className="eyebrow text-signal">Book a call</p>
          <h2 className="headline mt-4 text-4xl md:text-5xl">Prefer to talk? Grab 30 minutes.</h2>
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-4xl border border-border bg-card">
          <iframe
            src="https://cal.com/mohit-bisht-il8sst/30min?embed=true&overlayCalendar=true&month=2026-11"
            title="Book a 30-minute call"
            loading="lazy"
            className="block h-[720px] w-full border-0"
          />
        </div>
      </section>
    </main>
  );
}
