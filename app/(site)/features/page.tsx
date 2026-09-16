import { getPageMetadata } from "@/lib/seo/data";
import { PremiumFeatures } from "@/components/fovestta/PremiumFeatures";

export async function generateMetadata() {
  return getPageMetadata("/features");
}

export default function FeaturesPage() {
  return <PremiumFeatures />;
}
