import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const AboutUs = () => {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 lg:py-36 max-w-5xl mx-auto">
          <motion.p {...fadeIn(0)} className="section-label">
            About Us
          </motion.p>
          <motion.h1
            {...fadeIn(0.1)}
            className="font-body text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] text-foreground leading-[1.12] tracking-[-0.02em] font-light max-w-3xl mb-6"
          >
            A creative agency that{" "}
            <span className="text-primary font-semibold">deeply understands parents.</span>
          </motion.h1>
          <motion.p {...fadeIn(0.2)} className="body-text max-w-2xl">
            KINFIELD is a creative marketing agency built for baby & kids brands that take parents seriously. We don't treat parents as just another audience segment — we see them as protectors making the most careful decisions of their lives.
          </motion.p>
        </section>

        {/* Philosophy */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-card">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div {...fadeIn(0)}>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Our Philosophy
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                Marketing to parents isn't about persuasion — it's about reassurance. Every campaign, every piece of content, every community interaction is designed to earn trust, not demand attention.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                We combine creative strategy with deep parent insights to build brands that families believe in for the long term.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.15)}>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Part of Herco Digital
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                KINFIELD operates as a specialized vertical within the Herco Digital ecosystem — a top 3% digital agency in Indonesia with over 15 years of experience.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                This gives us access to enterprise-grade capabilities while maintaining the focus and agility of a specialist creative studio dedicated to the parent & child market.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 lg:py-36 max-w-5xl mx-auto">
          <motion.h2 {...fadeIn(0)} className="font-display text-2xl md:text-3xl text-foreground mb-12">
            What We Believe
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Empathy First", desc: "Every strategy starts with understanding the real fears, hopes, and needs of parents." },
              { title: "Trust Over Tactics", desc: "We prioritize long-term brand belief over short-term conversion tricks." },
              { title: "Community-Driven", desc: "Real influence comes from authentic parent voices, not manufactured endorsements." },
            ].map((val, i) => (
              <motion.div key={val.title} {...fadeIn(i * 0.1)}>
                <h3 className="font-display text-xl text-foreground mb-3">{val.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default AboutUs;
