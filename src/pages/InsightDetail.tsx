import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Seo from "@/components/Seo";
import NotFound from "./NotFound";
import { getInsightBySlug } from "@/data/insights";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const InsightDetail = () => {
  const { slug } = useParams();
  const article = getInsightBySlug(slug);

  if (!article) return <NotFound />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Organization",
      name: "KINFIELD",
      url: "https://kinfield.agency/",
    },
    publisher: {
      "@type": "Organization",
      name: "KINFIELD",
      url: "https://kinfield.agency/",
    },
    mainEntityOfPage: `https://kinfield.agency/insight/${article.slug}`,
  };

  return (
    <>
      <Seo
        title={`${article.title} — KINFIELD Insights`}
        description={article.excerpt}
        path={`/insight/${article.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <SiteHeader />
      <main className="pt-20 md:pt-24">
        <article className="px-6 md:px-12 lg:px-24 py-20 md:py-28 max-w-3xl mx-auto">
          <motion.div {...fadeIn(0)}>
            <Link
              to="/insight"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              All insights
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-body text-xs tracking-[0.1em] uppercase text-primary font-medium">
                {article.category}
              </span>
              <span className="font-body text-xs text-muted-foreground/60">
                {article.date}
              </span>
            </div>
            <h1 className="font-body text-[2rem] md:text-[2.75rem] text-foreground leading-[1.15] tracking-[-0.02em] font-light mb-6">
              {article.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-5">
              {article.excerpt}
            </p>
          </motion.div>
        </article>

        {/* Section: CTA */}
        <section className="section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 {...fadeIn(0)} className="section-heading mb-6">
              Let's build impactful brands together.
            </motion.h2>
            <motion.a
              href="mailto:hello@kinfield.agency"
              {...fadeIn(0.2)}
              className="inline-block bg-primary text-primary-foreground font-body font-medium px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              Start a conversation
            </motion.a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default InsightDetail;
