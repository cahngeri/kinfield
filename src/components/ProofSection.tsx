import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const projects = [
  { id: "bebio", image: case1, alt: "BEBIO Telon Skincare campaign", label: "Bebio", slug: "/portfolio/bebio" },
  { id: "nary-baby", image: case2, alt: "NARY BABY babywear clothing brand", label: "Nary Baby", slug: "/portfolio/nary-babywear" },
];

const ProofSection = () => {
  return (
    <section className="bg-background">
      <div className="px-6 md:px-12 lg:px-24 pt-24 md:pt-32 lg:pt-40 pb-0 max-w-6xl mx-auto">
        <motion.p
          {...fadeIn(0)}
          className="section-label"
        >
          PROOF OF WORKS
        </motion.p>
        <motion.h2 {...fadeIn(0.1)} className="section-heading max-w-2xl mb-5">
          Works that moved <span className="italic ig-gradient-text">real</span> parents' decisions
        </motion.h2>
        <motion.p {...fadeIn(0.2)} className="body-text max-w-xl">
          When empathy meets strategy: transforming how parents see, trust, and choose your brand.
        </motion.p>
      </div>

      <div className="pt-16 md:pt-20 flex flex-col gap-0">
        {projects.map((project, i) => (
          <motion.div key={project.id} {...fadeIn(i * 0.15)}>
            <Link to={project.slug} className="block group relative overflow-hidden">
              <div className="aspect-[16/5] overflow-hidden bg-secondary/20">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/15" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <span className="font-display text-lg md:text-2xl text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
                  {project.label}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProofSection;
