import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/anim";
import { POSTS, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — customeragent." },
      { name: "description", content: "Insights on AI search visibility, SEO, and custom AI agents from the customeragent. team." },
      { property: "og:title", content: "Blog — customeragent." },
      { property: "og:description", content: "Insights on AEO, SEO and AI agents for growing businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [first, ...rest] = POSTS;
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-44">
      <Reveal>
        <p className="eyebrow text-signal">Blog</p>
        <h1 className="headline mt-4 max-w-4xl text-5xl md:text-7xl">
          Notes from <span className="serif text-spectrum">the frontier</span> of growth.
        </h1>
      </Reveal>

      {first && (
        <Reveal className="mt-16">
          <Link to="/blog/$slug" params={{ slug: first.slug }} className="group grid overflow-hidden rounded-4xl border border-border bg-card transition-all duration-500 hover:border-signal/50 hover:shadow-[var(--shadow-signal)] md:grid-cols-2">
            <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br md:aspect-auto ${first.art}`}>
              <div className="grain absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
              <div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-signal-deep">{first.tag}</span> · {formatDate(first.date)} · {first.readTime}
                </p>
                <h2 className="headline mt-4 text-3xl transition-colors group-hover:text-signal-deep md:text-4xl">{first.title}</h2>
                <p className="mt-4 text-muted-foreground">{first.excerpt}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold">
                Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}

export function PostCard({ post }: { post: (typeof POSTS)[number] }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${post.art}`}>
        <div className="grain absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold">{post.tag}</span>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">{formatDate(post.date)} · {post.readTime}</p>
      <h3 className="headline mt-2 text-xl leading-snug transition-colors group-hover:text-signal-deep md:text-2xl">{post.title}</h3>
    </Link>
  );
}
