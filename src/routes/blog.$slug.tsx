import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/anim";
import { getPost, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — customeragent.` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Article not found — customeragent." }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-40 text-center">
      <h1 className="headline text-4xl">Article not found</h1>
      <Link to="/blog" className="btn-outline mt-8">Back to blog</Link>
    </main>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <article className="mx-auto max-w-3xl px-5 md:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-signal-deep">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <Reveal>
          <p className="mt-8 text-sm text-muted-foreground">
            <span className="font-semibold text-signal-deep">{post.tag}</span> · {formatDate(post.date)} · {post.readTime}
          </p>
          <h1 className="headline mt-4 text-4xl md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </Reveal>
        <div className={`relative mt-12 aspect-[16/9] overflow-hidden rounded-4xl bg-gradient-to-br ${post.art}`}>
          <div className="grain absolute inset-0" />
        </div>
        <div className="mt-12 space-y-8">
          {post.body.map((b, i) => (
            <Reveal key={i}>
              {b.h && <h2 className="headline mb-3 text-2xl md:text-3xl">{b.h}</h2>}
              <p className="text-lg leading-relaxed text-foreground/85">{b.p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 rounded-4xl bg-ink p-8 text-ink-fg md:p-12">
          <h2 className="headline text-3xl">Want this working for your brand?</h2>
          <Link to="/contact" hash="book" className="btn-signal mt-6">
            Book a call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
