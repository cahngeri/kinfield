import { useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay },
});

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />
      <main className="pt-20 md:pt-24">
        <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 lg:py-36">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left — Info */}
            <div>
              <motion.p {...fadeIn(0)} className="section-label">
                Contact Us
              </motion.p>
              <motion.h1
                {...fadeIn(0.1)}
                className="font-body text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] text-foreground leading-[1.12] tracking-[-0.02em] font-light mb-6"
              >
                Let's build a brand{" "}
                <span className="text-primary font-semibold">parents trust.</span>
              </motion.h1>
              <motion.p {...fadeIn(0.2)} className="body-text mb-10">
                Ready to connect with parents in a meaningful way? We'd love to hear from you.
              </motion.p>

              <motion.div {...fadeIn(0.3)} className="space-y-4">
                <div>
                  <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground/60 mb-1">Email</p>
                  <a href="mailto:hello@kinfield.agency" className="font-body text-base text-foreground hover:text-primary transition-colors">
                    hello@kinfield.agency
                  </a>
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground/60 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/6285158563550?text=Hi%20Kinfield%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Kinfield on WhatsApp"
                    className="font-body text-base text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    +62 851 5856 3550
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div {...fadeIn(0.2)}>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="font-display text-2xl text-foreground mb-3">Thank you!</p>
                    <p className="font-body text-sm text-muted-foreground">We'll be in touch soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-xs tracking-[0.08em] uppercase text-muted-foreground mb-2 block">Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full font-body text-sm bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.08em] uppercase text-muted-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full font-body text-sm bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.08em] uppercase text-muted-foreground mb-2 block">Company</label>
                    <input
                      type="text"
                      maxLength={100}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full font-body text-sm bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                      placeholder="Brand or company name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.08em] uppercase text-muted-foreground mb-2 block">Message</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full font-body text-sm bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/40"
                      placeholder="Tell us about your brand and goals"
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-body font-semibold px-8 py-4 rounded-lg text-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 uppercase tracking-wider mt-4"
                  >
                    Start a Conversation →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactUs;
