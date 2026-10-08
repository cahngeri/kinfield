import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/nary-hero.jpg";
import socialImage from "@/assets/nary-social.jpg";
import kolImage from "@/assets/nary-kol.jpg";
import productImage from "@/assets/nary-product.jpg";
import lifestyleImage from "@/assets/nary-lifestyle.jpg";
import Seo from "@/components/Seo";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const PortfolioNaryBaby = () => {
  return (
    <main className="bg-background text-foreground">
      <Seo
        title="Nary Babywear Case Study — Brand & KOL Activation | KINFIELD"
        description="How KINFIELD repositioned Nary Babywear with lifestyle storytelling and KOL activation — +3,200 followers and 2.5x quarterly growth."
        path="/portfolio/nary-babywear"
        type="article"
      />
      {/* Back nav */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Section 1 — Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="section-padding max-w-5xl mx-auto text-center pt-0 pb-0">
          <motion.p {...fadeIn(0)} className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Case Study · Babywear
          </motion.p>
          <motion.h1 {...fadeIn(0.1)} className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-5">
            Nary Babywear
          </motion.h1>
          <motion.p {...fadeIn(0.2)} className="body-text max-w-xl mx-auto">
            Building a babywear brand that parents choose with heart, not habit.
          </motion.p>
        </div>

        {/* Editorial hero visual — full-bleed campaign frame */}
        <motion.div {...fadeIn(0.3)} className="mt-12 md:mt-16">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={heroImage}
              alt="Nary Babywear campaign — KOL collaboration with @monaratuliu showing a mother and her two laughing toddlers"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Project meta strip */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 mt-10 md:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-border pt-8">
            {[
              { label: "Client", value: "Nary Babywear" },
              { label: "Category", value: "Babywear · D2C" },
              { label: "Scope", value: "Brand · Content · KOL" },
              { label: "Timeline", value: "30-day activation" },
            ].map((item, i) => (
              <motion.div key={item.label} {...fadeIn(i * 0.05)}>
                <p className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">
                  {item.label}
                </p>
                <p className="font-display text-base md:text-lg text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Brand Background */}
      <section className="section-padding max-w-4xl mx-auto">
        <motion.p {...fadeIn(0)} className="section-label">
          The Brand
        </motion.p>
        <motion.h2 {...fadeIn(0.05)} className="section-heading mb-6">
          Babywear made with intention,<br className="hidden md:block" /> not habit.
        </motion.h2>
        <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl">
          Nary Babywear creates soft, comfortable, thoughtfully designed outfits for infants and toddlers.
          In a market driven by fast fashion and generic designs, Nary set out to offer parents clothing that feels intentional —
          gentle on baby skin and made with care.
        </motion.p>
      </section>

      {/* Section 3 — Lifestyle full-bleed (storytelling beat) */}
      <motion.section {...fadeIn(0)} className="relative">
        <div className="aspect-[21/9] md:aspect-[21/8] overflow-hidden">
          <img
            src={lifestyleImage}
            alt="A mother holding her baby in soft sage Nary Babywear, bathed in warm morning light"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* Section 4 — Challenge */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeIn(0)} className="section-label">
            The Challenge
          </motion.p>
          <motion.h2 {...fadeIn(0.05)} className="section-heading mb-6">
            Standing out in a sea of sameness.
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl mb-12">
            Baby clothing is a crowded space dominated by established retail brands. Nary needed to carve out an
            emotional brand position — differentiating not just on product quality, but on the feeling of choosing
            something meaningful for your child.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Market", text: "Saturated babywear category with price-driven competition" },
              { title: "Audience", text: "Style-conscious parents who value comfort and intention" },
              { title: "Stage", text: "Brand launch, establishing identity and community" },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeIn(i * 0.1)} className="border-t border-border pt-4">
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Our Approach */}
      <section className="section-padding max-w-4xl mx-auto">
        <motion.p {...fadeIn(0)} className="section-label">
          Our Approach
        </motion.p>
        <motion.h2 {...fadeIn(0.05)} className="section-heading mb-6">
          Soft brand. Strong story.
        </motion.h2>
        <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl mb-10">
          We built a warm, lifestyle-driven brand narrative that positions Nary as the thoughtful parent's choice.
          Every visual was designed to evoke comfort, softness, and intentional parenting.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Lifestyle-first visual identity and brand direction",
            "Warm, fabric-focused content and product photography",
            "Community engagement through relatable parenting moments",
            "KOL activation with parent voices that feel honest",
          ].map((item, i) => (
            <motion.div key={i} {...fadeIn(i * 0.08)} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <p className="font-body text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 6 — Product Photography (full-bleed editorial) */}
      <section className="relative">
        <div className="section-padding max-w-6xl mx-auto pb-10 md:pb-12">
          <motion.p {...fadeIn(0)} className="section-label">
            Product Photography
          </motion.p>
          <motion.h2 {...fadeIn(0.05)} className="section-heading mb-6 max-w-2xl">
            Texture, tone, and the feel of cotton on tiny skin.
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl">
            Close-up, fabric-forward photography that lets parents almost feel the softness through the screen —
            elevating Nary from another babywear brand to a tactile, considered object.
          </motion.p>
        </div>
        <motion.div {...fadeIn(0.1)} className="overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <img
              src={productImage}
              alt="Close-up product photography of soft sage and cream Nary babywear with delicate pearl buttons"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* Section 7 — KOL Deep Dive (asymmetric editorial grid) */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12 md:mb-16">
            <motion.p {...fadeIn(0)} className="section-label">
              KOL & Campaign Activation
            </motion.p>
            <motion.h2 {...fadeIn(0.05)} className="section-heading mb-6">
              Real parents.<br />
              Real moments.<br />
              Real reach.
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="body-text">
              We partnered with parent KOLs whose voices feel honest — turning everyday moments into trusted brand
              stories that drove community participation and organic conversation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            {/* Phone mockup — taller, anchor */}
            <motion.div {...fadeIn(0)} className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary/20">
                <img
                  src={kolImage}
                  alt="Editorial portrait of a toddler styled in Nary Babywear printed kimono set"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right side — stats stacked + caption */}
            <div className="md:col-span-7 space-y-8">
              <motion.div {...fadeIn(0.1)}>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">
                  Featured KOL · @monaratuliu
                </p>
                <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">
                  "Gemessssnaa bayi-bayiku ini — dua-duanya pake baju dari @narybabywear."
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div {...fadeIn(0.15)} className="bg-background rounded-lg p-6 md:p-8">
                  <p className="font-display text-4xl md:text-5xl text-primary mb-2">+3,200</p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Followers gained
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">in 30 days</p>
                </motion.div>
                <motion.div {...fadeIn(0.2)} className="bg-background rounded-lg p-6 md:p-8">
                  <p className="font-display text-4xl md:text-5xl text-primary mb-2">+200</p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Campaign participants
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">in 30 days</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Social Activation (full-bleed editorial spread) */}
      <section className="relative">
        <div className="section-padding max-w-6xl mx-auto pb-10 md:pb-12">
          <motion.p {...fadeIn(0)} className="section-label">
            Social Activation
          </motion.p>
          <motion.h2 {...fadeIn(0.05)} className="section-heading mb-6 max-w-2xl">
            Stories parents tell on their own.
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl">
            The strongest proof came unprompted — testimonials, anniversary posts, and OOTD entries from parents who
            wanted to share their Nary moments with their own communities.
          </motion.p>
        </div>
        <motion.div {...fadeIn(0.1)} className="overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[21/9] bg-secondary/20">
            <img
              src={socialImage}
              alt="Nary Babywear organic Instagram testimonials from real parents"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* Section 9 — Impact */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeIn(0)} className="section-label">
            Impact
          </motion.p>
          <motion.h2 {...fadeIn(0.05)} className="section-heading mb-6">
            A community, not just a customer base.
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="body-text max-w-2xl mb-10">
            Nary established a distinct brand voice and loyal community of parents who resonate with its values.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "2.5x", label: "Follower growth in first quarter" },
              { metric: "90%", label: "Positive brand sentiment" },
              { metric: "↑", label: "Repeat purchase rate among early adopters" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn(i * 0.1)} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-primary mb-2">{item.metric}</p>
                <p className="font-body text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — CTA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 {...fadeIn(0)} className="section-heading mb-6">
            See how we help brands grow.
          </motion.h2>
          <motion.a
            href="mailto:hello@kinfield.agency"
            {...fadeIn(0.2)}
            className="inline-block bg-primary text-primary-foreground font-body font-medium px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
          >
            Start a conversation
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default PortfolioNaryBaby;
