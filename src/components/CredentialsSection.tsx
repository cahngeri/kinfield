import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const certifications = [
  {
    name: "Google Premier Partner 2024",
    badge: "https://www.hercodigital.id/wp-content/uploads/2024/03/PremierBadge2024-150x150.webp",
    desc: "Top 3% Agency — Google",
    featured: true,
  },
  {
    name: "Meta — Digital Marketing Associate",
    badge: "https://www.hercodigital.id/wp-content/uploads/2022/01/Meta-Certified-150x150.png",
    desc: "Certified Associate",
  },
  {
    name: "Meta — Creative Strategy Professional",
    badge: "https://www.hercodigital.id/wp-content/uploads/2023/05/certified-badge-meta-creative-150x150.webp",
    desc: "Creative Strategy",
  },
  {
    name: "Meta — Media Planning Professional",
    badge: "https://www.hercodigital.id/wp-content/uploads/2024/03/meta-certified-media-planning-professional-150x150.webp",
    desc: "Media Planning",
  },
  {
    name: "Meta — Media Buying Professional",
    badge: "https://www.hercodigital.id/wp-content/uploads/2021/06/Cert_Media_Buying_Pro_800-150x150-1.webp",
    desc: "Media Buying",
  },
  {
    name: "Meta — AI & Performance Marketing",
    badge: "https://www.hercodigital.id/wp-content/uploads/2026/01/BADGE-META-01.webp",
    desc: "AI & Performance",
  },
  {
    name: "Meta — Business Marketing Strategy",
    badge: "https://www.hercodigital.id/wp-content/uploads/2026/03/Untitled-1-150x150.webp",
    desc: "Business Strategy",
  },
  {
    name: "TikTok — Media Buying Professional",
    badge: "https://www.hercodigital.id/wp-content/uploads/2025/03/badge-sertifikasi-TikTok-150x150.webp",
    desc: "Media Buying",
  },
];

const CredentialsSection = () => {
  return (
    <section className="relative bg-foreground overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cred-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cred-grid)" />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Label — left aligned */}
        <motion.p
          {...fadeIn(0)}
          className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground/70 mb-16 md:mb-20"
        >
          Recognition & Credentials
        </motion.p>

        {/* Giant stat numbers — left aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mb-20 md:mb-28">
          {/* 15+ Years */}
          <motion.div {...fadeIn(0.1)}>
            <p className="font-display text-[72px] md:text-[110px] lg:text-[150px] xl:text-[180px] leading-[0.9] font-bold text-primary-foreground tracking-tight">
              15+
            </p>
             <p className="font-body text-base md:text-lg text-primary-foreground/70 mt-6 uppercase tracking-[0.15em]">
              Years of Experience
            </p>
          </motion.div>

          {/* Top 3% */}
          <motion.div {...fadeIn(0.2)}>
            <p className="font-display text-[72px] md:text-[110px] lg:text-[150px] xl:text-[180px] leading-[0.9] font-bold tracking-tight">
              <span className="text-primary">Top 3%</span>
            </p>
            <p className="font-body text-base md:text-lg text-primary-foreground/70 mt-6 uppercase tracking-[0.15em]">
              Digital Agency in Indonesia
            </p>
          </motion.div>
        </div>

        {/* Contextual statement — left aligned */}
        <motion.div {...fadeIn(0.3)} className="mb-20 md:mb-24 max-w-3xl">
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-primary-foreground leading-relaxed">
            <span className="font-body font-light text-primary-foreground/80">KINFIELD is part of</span>{" "}
            <span className="text-primary font-bold">Herco Digital</span>
             <span className="font-body font-light text-primary-foreground/80">, ranked by</span>{" "}
            <span className="font-bold text-primary-foreground">Google</span>{" "}
            <span className="font-body font-light text-primary-foreground/80">as a top-performing agency in</span>{" "}
            <span className="italic text-primary-foreground">2024.</span>
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeIn(0.35)} className="w-full h-px bg-primary-foreground/10 mb-14 md:mb-16" />

        {/* Certifications label */}
        <motion.p
          {...fadeIn(0.35)}
          className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground/60 mb-10"
        >
          Certified Across
        </motion.p>

        <motion.div
          {...fadeIn(0.4)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-6 mb-12"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              {...fadeIn(0.4 + i * 0.04)}
              className={`group relative p-5 md:p-6 rounded-xl bg-background/[0.07] backdrop-blur-sm border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center text-center ${
                cert.featured
                  ? "border-primary/30 bg-background/[0.12] sm:col-span-1"
                  : "border-primary-foreground/10 hover:border-primary/30"
              }`}
            >
              {cert.featured && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full">
                  Featured
                </span>
              )}
              <img
                src={cert.badge}
                alt={cert.name}
                className={`object-contain mb-4 transition-transform duration-300 group-hover:scale-110 ${
                  cert.featured ? "w-20 h-20 md:w-24 md:h-24" : "w-16 h-16 md:w-20 md:h-20"
                }`}
              />
              <p className="font-body text-xs md:text-sm text-primary-foreground/90 font-medium leading-snug">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust line */}
        <motion.p
          {...fadeIn(0.6)}
          className="font-body text-sm text-primary-foreground/60 italic"
        >
          Trusted by global platforms and certified across strategy, media, and performance.
        </motion.p>
      </div>
    </section>
  );
};

export default CredentialsSection;
