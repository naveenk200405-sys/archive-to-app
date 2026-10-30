import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/anim";

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-ink-fg">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-signal">Let's talk</p>
          <Link
            to="/contact"
            className="group mt-4 inline-flex flex-wrap items-baseline gap-3"
          >
            <span className="headline text-4xl transition-colors group-hover:text-signal md:text-6xl">
              hello@customeragent.si
            </span>
            <ArrowUpRight className="h-8 w-8 text-ink-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal md:h-12 md:w-12" />
          </Link>
        </Reveal>

        <div className="mt-16 flex flex-col gap-8 border-t border-ink-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl font-bold tracking-tight">
            customeragent<span className="text-signal">.</span>
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted" aria-label="Footer">
            <Link to="/" className="transition-colors hover:text-ink-fg">Home</Link>
            <Link to="/services" className="transition-colors hover:text-ink-fg">Services</Link>
            <Link to="/work" className="transition-colors hover:text-ink-fg">Work</Link>
            <Link to="/about" className="transition-colors hover:text-ink-fg">About</Link>
            <Link to="/blog" className="transition-colors hover:text-ink-fg">Blog</Link>
            <Link to="/contact" className="transition-colors hover:text-ink-fg">Contact</Link>
          </nav>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} customeragent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
