import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import CredentialsSection from "@/components/CredentialsSection";
import ProofSection from "@/components/ProofSection";
import ApproachSection from "@/components/ApproachSection";
import UspSection from "@/components/UspSection";

import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <CredentialsSection />
      <ProofSection />
      <ApproachSection />
      <UspSection />
      
      <ServicesSection />
      <TeamSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
