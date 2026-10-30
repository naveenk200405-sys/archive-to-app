import { Bot, Check, TrendingUp } from "lucide-react";

const SPARK = "M0 26 L12 22 L24 24 L36 16 L48 18 L60 9 L72 4";

/** Three floating glass cards beside the hero headline. Only the stat card shows on mobile. */
export function HeroCards() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-sm lg:h-[26rem]">
      <div className="glass-card hero-float absolute left-0 top-0 hidden w-64 rounded-2xl p-4 lg:block" style={{ animationDelay: "0s" }}>
        <p className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-hero-ink text-ink-fg"><Bot className="h-3.5 w-3.5" /></span>
          AI agent · now
        </p>
        <p className="mt-3 rounded-2xl rounded-tl-sm bg-card px-3 py-2 text-sm font-medium text-hero-ink">Want to book a call?</p>
      </div>

      <div className="glass-card hero-float absolute right-0 top-40 hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-hero-ink lg:flex" style={{ animationDelay: "1.4s" }}>
        Cited by ChatGPT
        <span className="grid h-5 w-5 place-items-center rounded-full bg-hero-green"><Check className="h-3 w-3" /></span>
      </div>

      <div className="glass-card hero-float absolute bottom-0 left-1/2 w-64 -translate-x-1/2 rounded-2xl p-5 lg:left-8 lg:translate-x-0" style={{ animationDelay: "2.6s" }}>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <TrendingUp className="h-4 w-4 text-hero-green" /> Bookings
        </p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <p className="font-display text-3xl font-bold tracking-tight text-hero-ink">+312%</p>
          <svg viewBox="0 0 72 30" className="h-8 w-20" aria-hidden>
            <path d={SPARK} fill="none" stroke="var(--hero-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
