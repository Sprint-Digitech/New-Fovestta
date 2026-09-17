import { PremiumHero } from "@/components/fovestta/PremiumHero";
import { DashboardShowcase } from "@/components/fovestta/DashboardShowcase";
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
      <TeamCultureSection />
      <IndustriesSection />
      <CustomerResultsSection />
      <FAQSection />
    </>
  );
}
