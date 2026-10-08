import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Seo from "@/components/Seo";
import { insights } from "@/data/insights";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const Insight = () => {
  return (
    <>
      <Seo
        title="Insights — KINFIELD"
        description="Strategic perspectives on parent marketing, community building, and brand trust from the KINFIELD team."
        path="/insight"
      />
      <SiteHeader />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 lg:py-36 max-w-5xl mx-auto">
          <motion.p {...fadeIn(0)} className="section-label">
            Insight
          </motion.p>
          <motion.h1
            {...fadeIn(0.1)}
            className="font-body text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] text-foreground leading-[1.12] tracking-[-0.02em] font-light max-w-3xl mb-5"
          >
            Thinking that shapes how brands{" "}
            <span className="text-primary font-semibold">win parents.</span>
          </motion.h1>
          <motion.p {...fadeIn(0.2)} className="body-text max-w-xl">
            Strategic perspectives on parent marketing, community building, and brand trust.
          </motion.p>
        </section>

        {/* Articles */}
        <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32 lg:pb-40">
          <div className="max-w-4xl mx-auto divide-y divide-border">
            {insights.map((article, i) => (
              <motion.article key={article.slug} {...fadeIn(i * 0.1)} className="py-8 md:py-10">
                <Link
                  to={`/insight/${article.slug}`}
                  className="group block"
                  aria-label={`Read article: ${article.title}`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-body text-xs tracking-[0.1em] uppercase text-primary font-medium">
                      {article.category}
                    </span>
                    <span className="font-body text-xs text-muted-foreground/60">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Insight;
