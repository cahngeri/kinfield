import { motion } from "framer-motion";

const services = [
  { text: "Creative Strategy", highlight: "rooted in parent insights" },
  { text: "Phase-based", highlight: "Campaign & Content Development" },
  { text: "Community Activation", highlight: "& Seeding" },
  { text: "Brand Storytelling", highlight: "for Trust & Longevity" },
  { text: "Integrated Creative", highlight: "Marketing Execution" },
];

const ServicesSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 bg-card relative overflow-hidden">
      {/* Subtle organic shapes */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-muted/8 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-4xl relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          Capabilities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-14 max-w-2xl"
        >
          <span className="font-body font-light">What we help</span>{" "}
          <span className="ig-gradient-text italic">baby & kids brands</span>{" "}
          <span className="font-body font-light">do</span>
        </motion.h2>

        <div className="space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center gap-5 p-5 md:p-6 rounded-xl border border-border/60 bg-background/80 hover:border-primary/30 hover:bg-background hover:shadow-md transition-all duration-300"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-primary/20 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
              </span>
              <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{service.text}</span>{" "}
                <span className="font-light">{service.highlight}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
