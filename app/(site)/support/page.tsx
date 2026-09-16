import { getPageMetadata } from "@/lib/seo/data";
import { SupportSection } from "@/components/fovestta/SupportSection";

export async function generateMetadata() {
  return getPageMetadata("/support");
}

export default function SupportPage() {
  return <SupportSection />;
}
