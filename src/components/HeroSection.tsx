import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Parent tenderly holding their baby in a sunlit nursery" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-transparent" />
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="hsl(214 70% 59%)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* Soft organic blob */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-muted/10 blur-3xl z-[1]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl z-[1]" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-20 md:py-28 lg:py-36 w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[11px] md:text-xs tracking-[0.15em] uppercase mb-8 whitespace-nowrap text-primary font-medium"
        >
          KINFIELD — Creative marketing agency for brands that take parents seriously
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] text-foreground leading-[1.15] tracking-[-0.02em] mb-3 max-w-3xl font-light"
        >
          Parents don't behave like{" "}
          <span className="text-muted-foreground">consumers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-body text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.03em] mb-10 max-w-3xl"
        >
          <span className="font-light text-foreground">They are the</span>{" "}
          <span className="text-primary font-semibold">protectors.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-lg mb-14 leading-relaxed"
        >
          We help baby & kids brands win parents' trust through creative
          strategies that speak naturally to their protective instincts.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-block font-body font-semibold px-8 py-4 rounded-lg text-base text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 uppercase tracking-wider shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
        >
          Explore How We Win Parents →
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
