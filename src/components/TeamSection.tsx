import { motion } from "framer-motion";
import teamHero from "@/assets/team-hero.jpg";
import teamElliza from "@/assets/team-elliza.jpg";
import teamGalang from "@/assets/team-galang.jpg";
import teamMaulana from "@/assets/team-maulana.jpg";
import teamFailasuf from "@/assets/team-failasuf.jpg";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

const team = [
  { name: "Hero Wijayadi", role: "Advisor", photo: teamHero },
  { name: "Elliza Puspita", role: "Founder & Parent Insight Lead", photo: teamElliza },
  { name: "Maulana Zia", role: "Creative Director", photo: teamMaulana },
  { name: "Galang Pradhana", role: "Visual Communication Designer", photo: teamGalang },
  { name: "M. Failasuf", role: "Video & Content Editor", photo: teamFailasuf },
];

const TeamSection = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header — left aligned */}
        <motion.div {...fadeIn()} className="max-w-2xl mb-5">
          <span className="section-label inline-block">The Team</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
            Strategy Powered by{" "}
            <span className="italic text-primary">Real Experts</span>
          </h2>
        </motion.div>

        <motion.p
          {...fadeIn(0.1)}
          className="text-muted-foreground max-w-xl mb-16 text-base md:text-lg leading-relaxed"
        >
          Built by people who understand how parents think, feel, and decide.
        </motion.p>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              {...fadeIn(0.1 + i * 0.08)}
              className="group flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-transparent transition-all duration-500 ease-out group-hover:-translate-y-1">
                <img
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground leading-snug">
                  {member.name}
                </h3>
                <p className="text-primary text-xs md:text-sm font-medium mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.p
          {...fadeIn(0.6)}
          className="mt-16 text-sm md:text-base italic text-foreground/80 max-w-lg"
        >
          We don't just study parents. We live their world and speak their truth.
          <br />
          <span className="text-primary font-medium not-italic">We are parents.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TeamSection;
