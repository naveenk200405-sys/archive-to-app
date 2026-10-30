import imgCited from "@/assets/blog-cited.jpg";
import imgAgent from "@/assets/blog-agent.jpg";
import imgLocal from "@/assets/blog-local.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string; // ISO
  readTime: string;
  art: string;
  body: { h?: string; p: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "get-cited-by-chatgpt",
    title: "How to get your brand cited by ChatGPT in 2026",
    excerpt: "AI answers are the new page one. Here is the playbook we use to make brands the answer AI engines recommend.",
    tag: "AEO",
    date: "2026-10-22",
    readTime: "6 min read",
    art: "from-signal-deep via-signal to-coral",
    body: [
      { p: "Buyers no longer scroll ten blue links. They ask ChatGPT, Perplexity or Google's AI Overviews — and act on the first brand named. If you are not in that answer, you are invisible." },
      { h: "1. Become the clearest source", p: "AI engines quote pages that answer a question directly. Lead every key page with a crisp, factual answer in the first two sentences, then expand." },
      { h: "2. Earn mentions, not just links", p: "Models learn from what the web says about you. Reviews, roundups, podcasts and industry lists all feed the signal that you are a credible choice." },
      { h: "3. Structure everything", p: "Schema markup, FAQ blocks and consistent naming make it easy for engines to extract facts about your business without guessing." },
      { h: "4. Track it like rankings", p: "We test the same prompts every month across each engine and report exactly where you are cited — and where a competitor is winning instead." },
    ],
  },
  {
    slug: "lead-qualifier-agent-playbook",
    title: "The lead-qualifier agent: a playbook for service businesses",
    excerpt: "How a single AI agent can answer every visitor, score intent and put qualified calls straight on your calendar.",
    tag: "AI Agents",
    date: "2026-10-08",
    readTime: "5 min read",
    art: "from-ink via-violet to-signal",
    body: [
      { p: "Most websites lose the majority of interested visitors simply because nobody answers fast enough. A lead-qualifier agent fixes that around the clock." },
      { h: "What it does", p: "It greets visitors, answers questions in your brand voice, asks the qualifying questions your sales team would ask, and books the call when the fit is right." },
      { h: "Where it pays off", p: "Clinics, agencies, consultancies and home services see the biggest lift — anywhere a booked call is the main conversion." },
      { h: "How we build it", p: "We train the agent on your services, pricing rules and FAQs, connect it to your calendar and CRM, and review conversations weekly to keep improving it." },
    ],
  },
  {
    slug: "ai-overviews-local-search",
    title: "Why AI Overviews changed local search forever",
    excerpt: "Local businesses are now competing for a single AI summary. What changed, and what to do about it this quarter.",
    tag: "SEO",
    date: "2026-09-24",
    readTime: "4 min read",
    art: "from-signal-deep via-violet to-ink",
    body: [
      { p: "Search for 'best dentist near me' today and an AI summary often appears before the map pack. That summary picks a handful of names — and everyone else gets scrolled past." },
      { h: "What the summary looks at", p: "Review volume and recency, consistent business details across the web, and pages that clearly describe your services and service area." },
      { h: "Three moves for this quarter", p: "Clean up your listings everywhere, publish one strong page per service and location, and build a steady stream of fresh reviews." },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

const IMAGES: Record<string, string> = {
  "get-cited-by-chatgpt": imgCited,
  "lead-qualifier-agent-playbook": imgAgent,
  "ai-overviews-local-search": imgLocal,
};
export const postImage = (slug: string) => IMAGES[slug];
