import { getPageMetadata } from "@/lib/seo/data";
import { ComplianceScorecardSection } from "@/components/fovestta/ComplianceScorecardSection";

export async function generateMetadata() {
  return getPageMetadata("/compliance-scorecard");
}

export default function ComplianceScorecardPage() {
  return <ComplianceScorecardSection />;
}
