import { motion } from "framer-motion";

const WhyHobySection = () => {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 bg-background">
      {/* Soft teal accent bar */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-muted/40 via-primary/20 to-transparent" />

      <div className="max-w-3xl relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          The Problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="section-heading mb-5 max-w-2xl"
        >
          <span className="font-body font-light">Most baby & kids brands talk like</span>{" "}
          <span className="text-editorial-upper">advertisers.</span>
          <br />
          <span className="font-body font-light">Parents listen like</span>{" "}
          <span className="italic ig-gradient-text">guardians.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6 mt-10"
        >
          <p className="body-text">
            Parents don't scroll for fun.
            <br />
            They scroll to <span className="text-primary font-medium">protect, compare, and validate.</span>
          </p>
          <p className="body-text">
            They don't ask if a brand is cool.
            <br />
            They ask if it's <span className="text-foreground font-medium">safe, trustworthy, and chosen by other parents.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHobySection;
