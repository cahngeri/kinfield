import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DEFAULT_HOMEPAGE_FAQS } from "@/lib/schema";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay },
});

const FaqSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-secondary/30 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.p {...fadeIn(0)} className="section-label">
          Common Questions
        </motion.p>
        <motion.h2
          {...fadeIn(0.1)}
          className="section-heading mb-4 max-w-2xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          {...fadeIn(0.2)}
          className="body-text mb-12 max-w-2xl text-muted-foreground"
        >
          Understanding how modern parents make choices, why traditional advertising struggles in early childhood categories, and how KINFIELD bridges trust.
        </motion.p>

        <motion.div {...fadeIn(0.3)}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {DEFAULT_HOMEPAGE_FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border/60 rounded-xl px-6 data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-body text-base md:text-lg font-medium py-5 text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed pt-1 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
