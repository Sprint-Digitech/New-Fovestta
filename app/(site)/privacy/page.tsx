import { getPageMetadata } from "@/lib/seo/data";
import { PrivacyPolicyPage } from "@/components/fovestta/PrivacyPolicyPage";

export async function generateMetadata() {
  return getPageMetadata("/privacy");
}

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
