import { motion } from "framer-motion";

const FinalCtaSection = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: "hsl(213 75% 14%)" }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      {/* Soft glows */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-muted/10 blur-3xl" />
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl md:text-3xl lg:text-[2.75rem] text-primary-foreground leading-tight mb-6"
        >
          <span className="font-body font-light">Let's build a brand</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display italic text-3xl md:text-4xl lg:text-[3.25rem] leading-tight mb-12"
          style={{ color: "hsl(166 72% 72%)" }}
        >
          parents trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@kinfield.agency"
            className="inline-block font-body font-semibold px-10 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-base uppercase tracking-wider shadow-lg shadow-primary/30"
          >
            Start a conversation →
          </a>
          <a
            href="https://wa.me/6285158563550?text=Hi%20Kinfield%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Kinfield on WhatsApp"
            className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-lg bg-white/10 text-primary-foreground hover:bg-white/20 transition-all duration-300 text-base uppercase tracking-wider border border-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
