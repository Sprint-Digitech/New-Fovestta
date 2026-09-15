import { PremiumHero } from "@/components/fovestta/PremiumHero";
import { PremiumFeatures } from "@/components/fovestta/PremiumFeatures";
import { DashboardShowcase } from "@/components/fovestta/DashboardShowcase";
import { SecuritySection } from "@/components/fovestta/SecuritySection";
import { SuccessStoriesSection } from "@/components/fovestta/SuccessStoriesSection";
import { TeamCultureSection } from "@/components/fovestta/TeamCultureSection";
import { IndustriesSection } from "@/components/fovestta/IndustriesSection";
import { HRChallengesSection } from "@/components/fovestta/HRChallengesSection";
import { CustomerResultsSection } from "@/components/fovestta/CustomerResultsSection";
import { ResourcesSection } from "@/components/fovestta/ResourcesSection";
import { PricingSection } from "@/components/fovestta/PricingSection";
import { SupportSection } from "@/components/fovestta/SupportSection";
import { FAQSection } from "@/components/fovestta/FAQSection";

export default function Home() {
  return (
    <>
      <PremiumHero />
      <PremiumFeatures />
      <DashboardShowcase />
      <SecuritySection />
      <SuccessStoriesSection />
      <TeamCultureSection />
      <IndustriesSection />
      <HRChallengesSection />
      <CustomerResultsSection />
      <ResourcesSection />
      <PricingSection />
      <SupportSection />
      <FAQSection />
    </>
  );
}
