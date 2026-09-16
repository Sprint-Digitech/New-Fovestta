import { PremiumHero } from "@/components/fovestta/PremiumHero";
import { DashboardShowcase } from "@/components/fovestta/DashboardShowcase";
import { SecuritySection } from "@/components/fovestta/SecuritySection";
import { TeamCultureSection } from "@/components/fovestta/TeamCultureSection";
import { IndustriesSection } from "@/components/fovestta/IndustriesSection";
import { CustomerResultsSection } from "@/components/fovestta/CustomerResultsSection";
import { FAQSection } from "@/components/fovestta/FAQSection";
import { getPageMetadata } from "@/lib/seo/data";

export async function generateMetadata() {
  return getPageMetadata("/");
}

export default function Home() {
  return (
    <>
      <PremiumHero />
      <DashboardShowcase />
      <SecuritySection />
      <TeamCultureSection />
      <IndustriesSection />
      <CustomerResultsSection />
      <FAQSection />
    </>
  );
}
