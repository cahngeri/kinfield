import { motion } from "framer-motion";

const ApproachSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 bg-background">
      {/* Subtle line pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="approach-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="hsl(213 75% 14%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#approach-lines)" />
        </svg>
      </div>

      {/* Organic shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-muted/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative px-6 md:px-12 lg:px-24 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-xl md:text-2xl lg:text-[2.25rem] text-foreground leading-tight mb-6 whitespace-nowrap"
        >
          <span className="font-body font-light">Marketing to parents is not about</span>{" "}
          <span className="text-editorial-upper">persuasion.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display italic ig-gradient-text text-2xl md:text-3xl lg:text-[2.75rem] leading-tight mb-12"
        >
          It's about reassurance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="body-text max-w-2xl mb-10"
        >
          Parents don't need to be pushed.
          <br />
          They need to feel <span className="text-primary font-medium italic">understood.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Around{" "}
            <span className="font-display text-2xl md:text-3xl text-primary font-medium">88%</span>
            {" "}* of parents bypass traditional ads for real community trust — from everyday purchases to major life choices.
            In a world of noise, your brand needs to win the heart of parents.
          </p>
          <p className="font-body text-xs text-muted-foreground/70 mt-3 italic">
            *Nielsen, 2021 — Trust In Advertising Study
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-base md:text-lg text-foreground leading-relaxed max-w-2xl italic"
        >
          That's why trust is built through <span className="text-primary font-medium">empathy</span>, <span className="text-primary font-medium">presence</span>, and <span className="text-primary font-medium">consistency</span> across every parenting phase.
        </motion.p>
      </div>
    </section>
  );
};

export default ApproachSection;
