import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

// Placeholder social URLs — replace with the real profiles.
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/your-company",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/your-handle",
    path: "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm4.98-9.25a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24ZM12 2.9c2.96 0 3.31.01 4.48.07 2.98.13 4.4 1.56 4.54 4.53.05 1.17.06 1.52.06 4.48s-.01 3.31-.06 4.48c-.14 2.97-1.55 4.4-4.54 4.53-1.17.05-1.51.07-4.48.07s-3.31-.02-4.48-.07c-3-.14-4.4-1.56-4.54-4.53-.05-1.17-.06-1.52-.06-4.48s.01-3.31.06-4.48C3.12 4.53 4.53 3.1 7.52 2.97 8.69 2.91 9.04 2.9 12 2.9ZM12 1.2c-3 0-3.38.01-4.56.07-4.03.18-6.27 2.42-6.45 6.45C.93 8.9.92 9.28.92 12.28s.01 3.38.07 4.56c.18 4.03 2.42 6.27 6.45 6.45 1.18.06 1.56.07 4.56.07s3.38-.01 4.56-.07c4.02-.18 6.27-2.42 6.45-6.45.06-1.18.07-1.56.07-4.56s-.01-3.38-.07-4.56c-.18-4.02-2.42-6.27-6.45-6.45C15.38 1.21 15 1.2 12 1.2Z",
  },
];

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-site py-16 md:py-24">
        <p className="eyebrow text-muted-foreground">Let's talk</p>
        <Link to="/contact" className="group mt-4 inline-flex max-w-full flex-wrap items-baseline gap-3">
          <span className="headline link-underline break-all text-3xl sm:text-4xl md:text-6xl">hello@customeragent.si</span>
          <ArrowUpRight className="h-8 w-8 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground md:h-12 md:w-12" />
        </Link>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
          <Logo className="h-6 w-auto text-foreground" />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground md:justify-center" aria-label="Footer">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="link-underline transition-colors hover:text-foreground">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="link-underline press text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">© {new Date().getFullYear()} customeragent. All rights reserved.</p>
      </div>
    </footer>
  );
}
