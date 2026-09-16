import { getPageMetadata } from "@/lib/seo/data";
import { TermsOfServicePage } from "@/components/fovestta/TermsOfServicePage";

export async function generateMetadata() {
  return getPageMetadata("/terms");
}

export default function Terms() {
  return <TermsOfServicePage />;
}
