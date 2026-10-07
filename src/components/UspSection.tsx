import { motion } from "framer-motion";

const UspSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 bg-card relative overflow-hidden">
      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="usp-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="hsl(214 70% 59%)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#usp-grid)" />
        </svg>
      </div>

      {/* Organic blobs */}
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-muted/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          Why It Matters
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl md:text-3xl lg:text-[2.75rem] text-foreground leading-tight mb-5"
        >
          <span className="font-body font-light">Because parents are</span>{" "}
          <span className="italic ig-gradient-text text-3xl md:text-4xl lg:text-[3.25rem]">special.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6 mb-14"
        >
          <p className="body-text max-w-xl mx-auto">
            They don't make <span className="text-editorial-upper text-sm">impulsive</span> decisions.
            <br />
            They make <span className="text-primary font-semibold">protective</span> ones.
          </p>
          <p className="body-text max-w-xl mx-auto">
            That's why we don't design marketing to sell.
            <br />
            We design marketing to <span className="italic font-display ig-gradient-text text-xl md:text-2xl">belong.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-14"
        >
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            More than{" "}
            <span className="font-display text-2xl md:text-3xl text-primary font-medium">85%</span>{" "}
            of parents read online reviews before purchasing, showing that parents rely more on{" "}
            <span className="text-foreground font-semibold">real experiences from other parents</span>{" "}
            than on traditional advertising.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="inline-block p-6 md:p-8 rounded-2xl border border-primary/15 bg-background shadow-sm"
        >
          <p className="font-body text-sm md:text-base text-foreground leading-relaxed max-w-lg">
            KINFIELD meets parents where they already are,
            through{" "}
            <span className="text-primary italic font-display">
              phase-based communities
            </span>{" "}
            and insight-led creative strategies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UspSection;
