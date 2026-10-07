import { motion } from "framer-motion";

const pillars = [
  { letter: "H", word: "Hook", desc: "Capture attention naturally" },
  { letter: "E", word: "Engage", desc: "Build emotional connection" },
  { letter: "A", word: "Acquisition", desc: "Guide purchase decisions with clarity" },
  { letter: "R", word: "Remind", desc: "Stay relevant post-purchase" },
  { letter: "T", word: "Trust", desc: "Earn loyalty, not just sales" },
];

const FrameworkSection = () => {
  const cardPositions = [
    { x: "2%", y: "6%", align: "left" },
    { x: "58%", y: "18%", align: "left" },
    { x: "2%", y: "42%", align: "left" },
    { x: "58%", y: "52%", align: "left" },
    { x: "2%", y: "78%", align: "left" },
  ];

  const dotPositions = [
    { x: "42%", y: "18%" },
    { x: "55%", y: "28%" },
    { x: "38%", y: "48%" },
    { x: "52%", y: "58%" },
    { x: "42%", y: "78%" },
  ];

  const colors = [
    "hsl(var(--ig-purple))",
    "hsl(var(--ig-pink))",
    "hsl(var(--ig-coral))",
    "hsl(var(--ig-orange))",
    "hsl(var(--ig-purple))",
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 bg-background">
      {/* Subtle circular pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fw-circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="20" fill="none" stroke="hsl(166 72% 72%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fw-circles)" />
        </svg>
      </div>

      {/* Organic blobs */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-muted/8 blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
            Our Signature Methodology
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
            <span className="font-body font-light">The</span>{" "}
            <span className="italic ig-gradient-text text-5xl md:text-6xl lg:text-7xl">HEARTFUL</span>{" "}
            <span className="text-editorial-upper text-3xl md:text-4xl lg:text-5xl">Framework</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Because moms remember how brands make them <span className="text-primary italic font-medium">feel.</span>
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" style={{ aspectRatio: "1 / 1.1" }}>
          <motion.svg
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            viewBox="0 0 440 480"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            style={{ left: "5%", top: "2%", width: "90%", height: "96%" }}
          >
            <defs>
              <linearGradient id="heartStrokeFw" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--ig-purple))" stopOpacity="0.25" />
                <stop offset="50%" stopColor="hsl(var(--ig-coral))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--ig-orange))" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <motion.path
              d="M220 430 C220 430 20 280 20 140 C20 60 75 10 145 10 C185 10 210 35 220 65 C230 35 255 10 295 10 C365 10 420 60 420 140 C420 280 220 430 220 430Z"
              fill="none"
              stroke="url(#heartStrokeFw)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <motion.line
              x1="60" y1="220" x2="380" y2="220"
              stroke="url(#heartStrokeFw)" strokeWidth="1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </motion.svg>

          {dotPositions.map((dot, i) => (
            <motion.div
              key={`dot-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
              className="absolute w-2.5 h-2.5 rounded-full border border-primary/20 bg-background"
              style={{ left: dot.x, top: dot.y, transform: "translate(-50%, -50%)" }}
            />
          ))}

          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.letter}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              className="absolute"
              style={{ left: cardPositions[i].x, top: cardPositions[i].y }}
            >
              <div className="flex items-start gap-3 bg-background/90 backdrop-blur-sm rounded-xl border border-border/60 px-4 py-3 shadow-sm max-w-[200px]">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-display text-base font-bold"
                  style={{
                    backgroundColor: colors[i].replace(")", " / 0.12)"),
                    color: colors[i],
                  }}
                >
                  {pillar.letter}
                </div>
                <div>
                  <p className="font-display text-sm text-foreground leading-tight font-bold">
                    {pillar.word}{" "}
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/40 align-middle ml-0.5" />
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
