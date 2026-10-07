import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const projects = [
  {
    title: "Bebio",
    category: "Telon Skincare",
    description: "Building trust in a new natural baby skincare line through community-driven parent advocacy and authentic storytelling.",
    image: case1,
    slug: "/portfolio/bebio",
    impact: "3x engagement lift",
  },
  {
    title: "Nary Babywear",
    category: "Baby Clothing",
    description: "Repositioning a babywear brand by connecting with parents through the emotional language of comfort and protection.",
    image: case2,
    slug: "/portfolio/nary-babywear",
    impact: "2.5x brand recall",
  },
];

const WinningProject = () => {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 lg:py-36 max-w-6xl mx-auto">
          <motion.p {...fadeIn(0)} className="section-label">
            Winning Projects
          </motion.p>
          <motion.h1
            {...fadeIn(0.1)}
            className="font-body text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] text-foreground leading-[1.12] tracking-[-0.02em] font-light max-w-3xl mb-5"
          >
            Work that moved{" "}
            <span className="italic text-primary font-normal">real</span> parent decisions
          </motion.h1>
          <motion.p {...fadeIn(0.2)} className="body-text max-w-xl">
            Selected projects where deep parent understanding turned into trust, engagement, and long-term brand belief.
          </motion.p>
        </section>

        {/* Project Grid */}
        <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32 lg:pb-40">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, i) => (
              <motion.div key={project.slug} {...fadeIn(i * 0.15)}>
                <Link to={project.slug} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-body text-xs tracking-[0.12em] uppercase text-primary font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <span className="font-body text-sm text-primary font-semibold">
                    {project.impact}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default WinningProject;
