import { getPageMetadata } from "@/lib/seo/data";
import { RequestDemoSection } from "@/components/fovestta/RequestDemoSection";

export async function generateMetadata() {
  return getPageMetadata("/request-demo");
}

export default function RequestDemoPage() {
  return <RequestDemoSection />;
}
