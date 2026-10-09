import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/bebio-hero.jpg";
import executionImage from "@/assets/bebio-execution.jpg";
import case1 from "@/assets/case-1.jpg";
import Seo from "@/components/Seo";
import { buildBreadcrumbSchema, buildCaseStudySchema } from "@/lib/schema";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const PortfolioBebio = () => {
  const jsonLd = [
    buildCaseStudySchema({
      slug: "bebio",
      name: "Bebio Case Study — Telon Skincare Campaign",
      description:
        "How the #TelonSkincareBebio campaign transformed telon oil into a daily baby skincare ritual — 3x organic engagement growth.",
      clientName: "Bebio",
      results: [
        "3x organic engagement growth",
        "85% positive sentiment from UGC",
        "Telon Skincare category creation",
      ],
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Winning Projects", path: "/winning-project" },
      { name: "Bebio", path: "/portfolio/bebio" },
    ]),
  ];

  return (
    <main className="bg-background text-foreground">
      <Seo
        title="Bebio Case Study — Telon Skincare Campaign | KINFIELD"
        description="How the #TelonSkincareBebio campaign transformed telon oil into a daily baby skincare ritual — 3x organic engagement growth."
        path="/portfolio/bebio"
        type="article"
        jsonLd={jsonLd}
      />
      {/* Back nav */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Section 1 — Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="BEBIO baby daily care products with natural botanical ingredients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-16 w-full max-w-4xl">
          <motion.p {...fadeIn(0)} className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Case Study
          </motion.p>
          <motion.h1 {...fadeIn(0.1)} className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-4">
            Bebio
          </motion.h1>
          <motion.p {...fadeIn(0.2)} className="body-text max-w-xl">
            Transforming telon oil from a situational product into a daily baby skincare ritual.
          </motion.p>
        </div>
      </section>

      {/* Section 2 — Brand Background */}
      <section className="section-padding max-w-4xl mx-auto">
        <motion.h2 {...fadeIn(0)} className="section-heading mb-6">
          The Brand
        </motion.h2>
        <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl">
          Bebio is a baby daily care brand specializing in telon oil — a traditional Indonesian skincare staple for infants.
          Despite strong cultural familiarity, telon oil was perceived as a remedy rather than an everyday essential.
          Bebio needed to redefine its category positioning and build a modern, trust-driven brand identity among young parents.
        </motion.p>
      </section>

      {/* Section 3 — Challenge */}
      <section className="section-padding bg-secondary/30 max-w-none">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeIn(0)} className="section-heading mb-6">
            The Challenge
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl mb-8">
            The telon oil market is saturated with legacy brands. New parents — especially millennial and Gen-Z moms — were skeptical of traditional products and craved modern, evidence-based skincare narratives.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Market", text: "Crowded with established legacy brands" },
              { title: "Audience", text: "Millennial & Gen-Z parents seeking modern solutions" },
              { title: "Stage", text: "Early growth, building category credibility" },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeIn(i * 0.1)} className="border-t border-border pt-4">
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Our Approach */}
      <section className="section-padding max-w-4xl mx-auto">
        <motion.h2 {...fadeIn(0)} className="section-heading mb-6">
          Our Approach
        </motion.h2>
        <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl mb-10">
          We crafted the #TelonSkincareBebio campaign — a community-driven content strategy built on parent-to-parent trust.
          Instead of clinical product messaging, we leaned into authentic storytelling from real moms.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Community-driven UGC campaign strategy",
            "Authentic parent storytelling content direction",
            "Visual identity refresh for modern parent appeal",
            "Organic engagement-first social media approach",
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn(i * 0.08)}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <p className="font-body text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5 — Execution */}
      <section className="py-0">
        <div className="section-padding pb-0 max-w-4xl mx-auto">
          <motion.h2 {...fadeIn(0)} className="section-heading mb-6">
            Execution
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl">
            Visuals crafted to feel warm, trustworthy, and distinctly Bebio.
          </motion.p>
        </div>
        <div className="pt-12 flex flex-col gap-0">
          <motion.div {...fadeIn(0)}>
            <div className="aspect-[21/9] overflow-hidden">
              <img src={case1} alt="Bebio campaign visual" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <motion.div {...fadeIn(0.1)}>
            <div className="aspect-square md:aspect-[16/9] overflow-hidden max-w-4xl mx-auto my-16">
              <img src={executionImage} alt="Bebio product flat lay" className="w-full h-full object-cover rounded-lg" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 — Results */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeIn(0)} className="section-heading mb-6">
            Impact
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl mb-10">
            The campaign shifted consumer perception and drove measurable organic growth.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "3x", label: "Organic engagement growth" },
              { metric: "85%", label: "Positive sentiment from UGC" },
              { metric: "↑", label: "Brand recall among young parents" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn(i * 0.1)} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-primary mb-2">{item.metric}</p>
                <p className="font-body text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
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
  );
};

export default PortfolioBebio;
