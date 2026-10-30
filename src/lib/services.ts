export interface Service {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    id: "seo",
    index: "01",
    title: "SEO",
    tagline: "Own the search results",
    description:
      "Technical fixes, content engines and authority building that move you up Google and keep you there. We optimise for what actually drives revenue, not vanity rankings.",
    bullets: [
      "Technical audits & site health",
      "Keyword & intent mapping",
      "Content that ranks and converts",
      "Local & Maps visibility",
    ],
  },
  {
    id: "aeo",
    index: "02",
    title: "AEO",
    tagline: "Be the answer AI gives",
    description:
      "Answer Engine Optimization: when buyers ask ChatGPT, Perplexity, Gemini or Google AI Overviews, we make sure your brand is the answer they hear — and can prove it with citation tracking.",
    bullets: [
      "AI-citation tracking across engines",
      "Structured data & entity building",
      "Prompt-benchmark reporting",
      "Community & UGC presence",
    ],
  },
  {
    id: "web-design",
    index: "03",
    title: "Website Design",
    tagline: "Sites that sell while they scroll",
    description:
      "Premium, fast, conversion-focused websites with motion and personality — built on modern stacks, measured against real business goals, never template-pretty and slow.",
    bullets: [
      "Design systems & brand identity",
      "Motion & scroll experiences",
      "CRO-focused page structure",
      "Fast, SEO-ready builds",
    ],
  },
  {
    id: "social",
    index: "04",
    title: "Social Posts",
    tagline: "Feeds that feel alive",
    description:
      "Scroll-stopping posts, carousels and shorts — planned, designed and published on a rhythm. Consistent voice, consistent growth, zero scramble for ideas at 6pm.",
    bullets: [
      "Content calendars & pillars",
      "Design & copy production",
      "Short-form video scripts",
      "Monthly performance reporting",
    ],
  },
  {
    id: "ai-agents",
    index: "05",
    title: "AI Agents",
    tagline: "Ready-made agents, deployed fast",
    description:
      "Proven agent playbooks we can stand up in days: support chatbots, lead qualification, review responses, content pipelines — wired into the tools you already use.",
    bullets: [
      "Website & WhatsApp assistants",
      "Lead capture & qualification",
      "Review & inbox automation",
      "CRM & calendar integrations",
    ],
  },
  {
    id: "custom-agents",
    index: "06",
    title: "Custom Agents",
    tagline: "Agentic systems built for your workflow",
    description:
      "When off-the-shelf isn't enough, we design and build bespoke multi-step agents around your process — with guardrails, human-in-the-loop controls and measurable outcomes.",
    bullets: [
      "Workflow discovery & mapping",
      "Custom multi-step agent builds",
      "Eval, guardrails & monitoring",
      "Dashboards & ongoing tuning",
    ],
  },
];
