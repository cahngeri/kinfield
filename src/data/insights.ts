export interface Insight {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

export const insights: Insight[] = [
  {
    slug: "why-85-percent-parents-read-reviews",
    title: "Why 85% of Parents Read Reviews Before Buying",
    category: "Parent Behavior",
    excerpt:
      "Understanding the trust-driven decision-making process that defines how parents choose products for their children.",
    date: "March 2026",
  },
  {
    slug: "community-seeding-baby-brands",
    title: "Community Seeding: The Most Underused Strategy in Baby Brands",
    category: "Strategy",
    excerpt:
      "How peer-to-peer influence among parents outperforms traditional advertising by creating authentic brand advocates.",
    date: "February 2026",
  },
  {
    slug: "phase-based-marketing",
    title: "Phase-Based Marketing: Meeting Parents Where They Are",
    category: "Framework",
    excerpt:
      "From expecting to toddler years — why timing your message to the parent lifecycle changes everything.",
    date: "January 2026",
  },
  {
    slug: "reassurance-economy",
    title: "The Reassurance Economy: Marketing Beyond Persuasion",
    category: "Insight",
    excerpt:
      "Parents don't want to be sold to. They want to be reassured. How this shift transforms brand strategy.",
    date: "December 2025",
  },
];

export const getInsightBySlug = (slug?: string) =>
  insights.find((insight) => insight.slug === slug);
