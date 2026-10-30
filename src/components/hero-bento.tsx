import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Bot, CalendarCheck, Sparkles, TrendingUp } from "lucide-react";
import { Counter } from "@/components/anim";

const CHAT = [
  { from: "visitor", text: "Can you help us get more leads?" },
  { from: "agent", text: "Yes — I've found 3 open slots this week. Book Tue 10:00?" },
];

const EVENTS = ["Call booked · Tue 10:00", "Lead qualified · 92% fit", "Cited by ChatGPT", "Ranked #3 on Google"];

const float = (d: number) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 6, delay: d, repeat: Infinity, ease: "easeInOut" as const },
});

/** Hero visual: floating bento of live-feeling result tiles. Works at every width. */
export function HeroBento() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % EVENTS.length), 2600);
    return () => clearInterval(t);
  }, []);
  const bars = [30, 44, 38, 56, 64, 78, 92];

  return (
    <div className="relative mx-auto grid w-full max-w-xl grid-cols-2 gap-3 sm:gap-4">
      <div aria-hidden className="absolute inset-8 -z-10 rounded-full bg-signal/20 blur-3xl" />

      {/* growth tile */}
      <motion.div {...float(0)} className="col-span-2 rounded-3xl border border-border bg-card/85 p-5 shadow-[var(--shadow-lift)] backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-signal" /> Qualified leads
          </p>
          <span className="rounded-full bg-signal-tint px-2.5 py-1 text-xs font-semibold text-signal-deep">+214%</span>
        </div>
        <div className="mt-4 flex items-end justify-between gap-4">
          <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <Counter to={1284} />
          </p>
          <div className="flex h-14 flex-1 items-end gap-1.5 sm:h-16">
            {bars.map((h, k) => (
              <motion.span
                key={k}
                className="flex-1 rounded-t bg-signal/80"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.9, delay: 0.6 + k * 0.07, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* agent chat tile */}
      <motion.div {...float(0.8)} className="col-span-2 rounded-3xl border border-border bg-card/85 p-5 shadow-[var(--shadow-lift)] backdrop-blur-xl sm:col-span-1">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Bot className="h-4 w-4 text-signal" /> Your AI agent
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {CHAT.map((c, k) => (
            <motion.p
              key={k}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + k * 0.6 }}
              className={`max-w-[90%] rounded-2xl px-3 py-2 text-xs leading-snug ${
                c.from === "agent" ? "self-end bg-signal text-accent-foreground" : "self-start bg-muted"
              }`}
            >
              {c.text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* AI citations tile */}
      <motion.div {...float(1.6)} className="rounded-3xl bg-ink p-5 text-ink-fg shadow-[var(--shadow-lift)]">
        <Sparkles className="h-4 w-4 text-signal" />
        <p className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <Counter to={38} suffix="/42" />
        </p>
        <p className="mt-1 text-xs text-ink-muted">AI answers citing you</p>
      </motion.div>

      {/* booking tile */}
      <motion.div {...float(2.2)} className="flex flex-col justify-between rounded-3xl bg-signal p-5 text-accent-foreground shadow-[var(--shadow-signal)] sm:col-span-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center justify-between">
          <CalendarCheck className="h-4 w-4" />
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <div className="mt-6 h-10 overflow-hidden sm:mt-0 sm:flex sm:h-6 sm:flex-1 sm:items-center sm:order-none">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-sm font-semibold leading-tight"
            >
              {EVENTS[i]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
