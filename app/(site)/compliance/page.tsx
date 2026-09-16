import { getPageMetadata } from "@/lib/seo/data";
import { ComplianceSecurityPage } from "@/components/fovestta/ComplianceSecurityPage";

export async function generateMetadata() {
  return getPageMetadata("/compliance");
}

export default function Compliance() {
  return <ComplianceSecurityPage />;
}
