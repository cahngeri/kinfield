export const SITE_URL = "https://kinfield.id";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CaseStudyData {
  slug: string;
  name: string;
  description: string;
  clientName: string;
  results?: string[];
}

export interface ArticleData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const buildOrganizationSchema = () => ({
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "KINFIELD",
  legalName: "KINFIELD",
  alternateName: ["KINFIELD Indonesia", "Agensi Pemasaran Kreatif KINFIELD"],
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: `${SITE_URL}/favicon.png`,
    caption: "KINFIELD Logo",
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Creative marketing agency for baby & kids brands that helps brands win parents through empathy-led creative strategies, phase-based campaigns, and authentic community trust.",
  slogan: "Winning Parents. Growing Brands.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressLocality: "Indonesia",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Indonesia",
    },
    {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
  ],
  knowsAbout: [
    "Baby Brand Marketing",
    "Parent Psychology & Consumer Behavior",
    "Maternal & Paternal Decision Making",
    "Community Seeding & Parent Advocacy",
    "Phase-Based Lifecycle Marketing",
    "Generative Engine Optimization (GEO)",
    "Pemasaran Produk Bayi & Anak",
    "Agensi Kreatif Indonesia",
    "Digital Marketing Ibu dan Bayi",
    "Strategi Branding Minyak Telon & Baby Care",
    "KOL & Komunitas Parenting Indonesia",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Herco Digital",
    url: "https://www.hercodigital.id",
    description:
      "Top 3% digital agency in Indonesia with over 15 years of experience and Google Premier Partner 2024 recognition.",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@kinfield.agency",
      telephone: "+62-851-5856-3550",
      availableLanguage: ["English", "Indonesian"],
      areaServed: ["ID", "Worldwide"],
    },
  ],
  award: [
    "Google Premier Partner 2024 (Top 3% Agency in Indonesia)",
    "Meta Certified Digital Marketing Associate",
    "Meta Certified Creative Strategy Professional",
    "Meta Certified Media Planning Professional",
    "Meta Certified Media Buying Professional",
    "Meta Certified AI & Performance Marketing",
    "Meta Certified Business Marketing Strategy",
    "TikTok Media Buying Professional",
  ],
  member: [
    { "@id": `${SITE_URL}/#person-hero-wijayadi` },
    { "@id": `${SITE_URL}/#person-elliza-puspita` },
    { "@id": `${SITE_URL}/#person-maulana-zia` },
    { "@id": `${SITE_URL}/#person-galang-pradhana` },
    { "@id": `${SITE_URL}/#person-m-failasuf` },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Marketing Services for Baby & Kids Brands",
    itemListElement: [
      { "@id": `${SITE_URL}/#service-creative-strategy` },
      { "@id": `${SITE_URL}/#service-campaign-development` },
      { "@id": `${SITE_URL}/#service-community-activation` },
      { "@id": `${SITE_URL}/#service-brand-storytelling` },
      { "@id": `${SITE_URL}/#service-marketing-execution` },
    ],
  },
});

export const buildTeamSchemas = () => [
  {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-hero-wijayadi`,
    name: "Hero Wijayadi",
    jobTitle: "Advisor",
    worksFor: { "@id": ORGANIZATION_ID },
    description: "Executive leader at Herco Digital providing corporate governance and digital scaling guidance.",
  },
  {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-elliza-puspita`,
    name: "Elliza Puspita",
    jobTitle: "Founder & Parent Insight Lead",
    worksFor: { "@id": ORGANIZATION_ID },
    knowsAbout: ["Parent Psychology", "Maternal Behavior", "Insight-Led Strategy"],
    description: "Directs parent behavioral research and insight-led brand strategy for baby and children's brands.",
  },
  {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-maulana-zia`,
    name: "Maulana Zia",
    jobTitle: "Creative Director",
    worksFor: { "@id": ORGANIZATION_ID },
    knowsAbout: ["Brand Storytelling", "Creative Direction", "Art Direction"],
    description: "Leads creative narrative formulations, visual styling, and campaign art direction.",
  },
  {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-galang-pradhana`,
    name: "Galang Pradhana",
    jobTitle: "Visual Communication Designer",
    worksFor: { "@id": ORGANIZATION_ID },
    knowsAbout: ["Visual Design", "Packaging Aesthetics", "Brand Identity"],
    description: "Designs brand visual identities and digital packaging touchpoints.",
  },
  {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-m-failasuf`,
    name: "M. Failasuf",
    jobTitle: "Video & Content Editor",
    worksFor: { "@id": ORGANIZATION_ID },
    knowsAbout: ["Video Editing", "Short-Form Video", "UGC Curation"],
    description: "Produces short-form video stories and authentic user-generated content curation.",
  },
];

export const buildServicesSchemas = () => [
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-creative-strategy`,
    name: "Creative Strategy rooted in parent insights",
    serviceType: "Creative Strategy",
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Insight-driven creative marketing strategy tailored to parental psychology and decision-making drivers.",
    audience: {
      "@type": "Audience",
      audienceType: "Baby & Kids Brand Founders and Marketing Leaders",
    },
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-campaign-development`,
    name: "Phase-based Campaign & Content Development",
    serviceType: "Campaign & Content Development",
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Lifecycle-oriented marketing campaigns addressing parents across pregnancy, infancy, and toddler stages.",
    audience: {
      "@type": "Audience",
      audienceType: "Baby & Kids Brand Founders and Marketing Leaders",
    },
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-community-activation`,
    name: "Community Activation & Seeding",
    serviceType: "Community Activation",
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Peer-to-peer parent advocacy, community seeding, and authentic user-generated content strategies.",
    audience: {
      "@type": "Audience",
      audienceType: "Baby & Kids Brand Founders and Marketing Leaders",
    },
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-brand-storytelling`,
    name: "Brand Storytelling for Trust & Longevity",
    serviceType: "Brand Storytelling",
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Emotional reassurance and brand positioning designed to earn lasting family trust.",
    audience: {
      "@type": "Audience",
      audienceType: "Baby & Kids Brand Founders and Marketing Leaders",
    },
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-marketing-execution`,
    name: "Integrated Creative Marketing Execution",
    serviceType: "Marketing Execution",
    provider: { "@id": ORGANIZATION_ID },
    description:
      "Full-funnel creative execution across digital channels, visual design, and video production.",
    audience: {
      "@type": "Audience",
      audienceType: "Baby & Kids Brand Founders and Marketing Leaders",
    },
  },
];

export const buildWebsiteSchema = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "KINFIELD",
  description: "Creative marketing agency for baby & kids brands that take parents seriously.",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: ["en", "id"],
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
  })),
});

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const buildCaseStudySchema = (caseStudy: CaseStudyData) => ({
  "@type": "CreativeWork",
  "@id": `${SITE_URL}/portfolio/${caseStudy.slug}#casestudy`,
  name: caseStudy.name,
  url: `${SITE_URL}/portfolio/${caseStudy.slug}`,
  creator: { "@id": ORGANIZATION_ID },
  description: caseStudy.description,
  about: {
    "@type": "Organization",
    name: caseStudy.clientName,
  },
  ...(caseStudy.results && {
    keywords: caseStudy.results.join(", "),
  }),
});

export const buildArticleSchema = (article: ArticleData) => {
  // Approximate standard date parsing for ISO 8601
  const dateMap: Record<string, string> = {
    "March 2026": "2026-03-01",
    "February 2026": "2026-02-01",
    "January 2026": "2026-01-01",
    "December 2025": "2025-12-01",
  };
  const publishedDate = dateMap[article.date] || "2026-01-01";

  return {
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: publishedDate,
    dateModified: publishedDate,
    articleSection: article.category,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Elliza Puspita",
      jobTitle: "Founder & Parent Insight Lead",
      worksFor: { "@id": ORGANIZATION_ID },
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: `${SITE_URL}/insight/${article.slug}`,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/insight#blog`,
      name: "KINFIELD Insights",
      url: `${SITE_URL}/insight`,
    },
  };
};

export const DEFAULT_HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "Why does marketing to parents require a specialized approach?",
    answer:
      "Parents act as protective decision-makers rather than impulsive consumers. Over 85% read reviews and 88% trust community recommendations over ads. Reassurance, safety cues, and ingredient transparency outperform high-pressure sales tactics.",
  },
  {
    question: "What is KINFIELD's HEARTFUL Framework?",
    answer:
      "The HEARTFUL Framework is our proprietary 5-step methodology: Hook (unforced attention), Engage (empathetic resonance), Acquisition (radical safety reassurance), Remind (lifecycle milestone retention), and Trust (peer community advocacy).",
  },
  {
    question: "How does phase-based marketing work for baby brands?",
    answer:
      "Because children grow rapidly, a parent's priorities change every few months. We map marketing sequences to exact developmental phases—from pregnancy and newborn vulnerability to active toddler stages.",
  },
  {
    question: "What credentials and agency backing does KINFIELD have?",
    answer:
      "KINFIELD is part of Herco Digital, a Google Premier Partner 2024 recognized in the Top 3% of digital agencies in Indonesia with 15+ years of digital heritage, supported by Meta and TikTok certified specialists.",
  },
];
