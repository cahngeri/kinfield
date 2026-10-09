import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import CredentialsSection from "@/components/CredentialsSection";
import ProofSection from "@/components/ProofSection";
import ApproachSection from "@/components/ApproachSection";
import UspSection from "@/components/UspSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import SiteFooter from "@/components/SiteFooter";
import Seo from "@/components/Seo";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServicesSchemas,
  buildTeamSchemas,
  DEFAULT_HOMEPAGE_FAQS,
} from "@/lib/schema";

const Index = () => {
  const jsonLdGraph = [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
    buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
    buildFaqSchema(DEFAULT_HOMEPAGE_FAQS),
    ...buildServicesSchemas(),
    ...buildTeamSchemas(),
  ];

  return (
    <main>
      <Seo path="/" jsonLd={jsonLdGraph} />
      <SiteHeader />
      <HeroSection />
      <CredentialsSection />
      <ProofSection />
      <ApproachSection />
      <UspSection />
      <ServicesSection />
      <TeamSection />
      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
