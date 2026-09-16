import { getPageMetadata } from "@/lib/seo/data";
import { PricingSection } from "@/components/fovestta/PricingSection";

export async function generateMetadata() {
  return getPageMetadata("/pricing");
}

export default function PricingPage() {
  return <PricingSection />;
}
