import { getPageMetadata } from "@/lib/seo/data";
import { HRChallengesSection } from "@/components/fovestta/HRChallengesSection";

export async function generateMetadata() {
  return getPageMetadata("/solutions");
}

export default function SolutionsPage() {
  return <HRChallengesSection />;
}
